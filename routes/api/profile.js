const express = require('express');
const router = express.Router(); 
const mongoose = require('mongoose');
const passport = require('passport');

//load profile model 
const Profile = require('../../model/Profile');

//load user model 
const User = require('../../model/User');

//load course model 
const Course = require('../../model/Course');

// @route   GET api/profile/test
// @desc    tests post route
// @access  public route
router.get('/test', (req, res) => res.json({ msg: 'profile working' }))


// @route   GET api/profile
// @desc    get the current users profile 
// @access  private route 
router.get('/', passport.authenticate('jwt', {session: false}, (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if (!profile) { 
        errors.noProfile = 'There is no profile for given user';
        //not found is a 404 status
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
}));


// @route    POST api/profile 
// @desc     create a user profile 
// @access   private route 
router.post('/', passport.authenticate('jwt', {session:false}), (req,res) => {
  
  const profileFields = {};
  //store user field 
  profileFields.user = req.user.id; 

  new Profile(profileFields).save().then(profile => res.json(profile));

})

    
module.exports = router;