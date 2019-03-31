const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// load user model
const User = require('../../model/User')

// load profile model
const Profile = require('../../model/Profile')

// load validation
const validateProfileInput = require('../../validation/profile')

// @route   GET api/profile/test
// @desc    tests profile route
// @access  public route
router.get('/test', (req, res) => res.json({ msg: 'profile works' }))

// @route   GET api/profile
// @desc    get current users profile
// @access  private route
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const errors = {}

    // fetch current users profile
    Profile.findOne({ user: req.user.id })
      .populate('user', ['first_name', 'last_name', 'email', 'date'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user'
          return res.status(404).json(errors)
        }
        res.json(profile)
      })
      .catch(err => res.status(404).json(err))
  }
)

// @route   POST api/profile
// @desc    create user profile
// @access  private route
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid } = validateProfileInput(req.body);

    //check validation
    if (!isValid) {
      // return errors with 400 status
      return res.status(400).json(errors);
    }

    const profile_fields = {};
    // req.user.id includes:
    //  first_name, last_name, email, user_type and date of creation
    profile_fields.user = req.user.id;
  
    if (req.body.handle) {
      profile_fields.handle = req.body.handle;
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // update profile
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profile_fields },
          { new: true }
        ).then(profile => res.json(profile))
      } else {
        // create profile

        // check to see if the handle exists
        Profile.findOne({ handle: profile_fields.handle }).then(profile => {
          if (profile) {
            return (errors.handle = 'That handle already exists')
            res.status(400).json(errors)
          }

          // if profile with that handle doesn't exist we save profile
          new Profile(profile_fields).save().then(profile => res.json(profile))
        })
      }
    })
  }
)

module.exports = router
