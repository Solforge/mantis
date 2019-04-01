const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const User = require('../../model/User')
const passport = require('passport')

// load register input validation
const validationRegisterInput = require('../../validation/register')

// load login input validation
const validationLoginInput = require('../../validation/login')

// @route   GET api/users/test
// @desc    tests post route
// @access  public route
router.get('/test', (req, res) => res.json({ msg: 'user working' }))

// @route get api/users/register
// @desc register user
// @access public
router.post('/register', (req, res) => {
  
  const { errors, isValid } = validationRegisterInput(req.body)

  // first line of validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email Already Exists' })
    } else {
      const NewUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        user_type: req.body.user_type,
        joinKey: req.body.joinKey
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(NewUser.password, salt, (err, hash) => {
          if (err) throw err
          NewUser.password = hash
          NewUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })
      })
    }
  })
})

// @route get api/users/login
// @desc login user - returns jwt token
// @access public

router.post('/login', (req, res) => {
  const { errors, isValid } = validationLoginInput(req.body)

  // first line of validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const password = req.body.password

  // find user with email
  User.findOne({ email: email }).then(user => {
    if (!user) {
      res.status(404).json({ email: 'User not found' })
    }

    // check password if its the same
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user matched
        // create jwt payload
        const payload = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          user_type: user.user_type,
          joinKey: user.joinKey
        }
        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            })
          }
        )
      } else {
        res.status(400).json({ password: 'Password incorrect' })
      }
    })
  })
})

// @route get api/users/current
// @desc return current user
// @access private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      user_type: req.user.user_type,
      joinKey: req.user.joinKey
    })
  }
)

module.exports = router
