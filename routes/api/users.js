const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../../model/User');

// @route GET api/users/test 
// @desc tests post route 
// @access private route
router.get('/test', (req, res) => res.json({ msg: "user working" }));

// @route get api/users/register
// @desc register user
// @access public
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email Already Exists" });
        } else {
            const NewUser = new User({
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(NewUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    NewUser.password = hash;
                    NewUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
})

module.exports = router; 