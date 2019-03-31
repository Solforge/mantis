const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//course model
const Course = require('../../model/Course');

//profile model
const Profile = require('../../model/Profile');

//validation 
const validateCourseInput = require('../../validation/course');

// @route   GET api/course/test
// @desc    tests post route
// @access  public route
router.get('/test', (req, res) => res.json({ msg: 'course works!' }))


//@route    GET api/course 
//@desc     GET course
//@access   private route
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    Course.find()
        .sort({ start_date: -1 })
        .then(course => res.json(course))
        .catch(err => res.status(404).json({ noCourseFound: 'No courses found' }));

});

//@route    GET api/course/id 
//@desc     GET course
//@access   private route

router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Course.findById(req.params.id)
        .then(course => res.json(course))
        .catch(err => res.status(404).json({ noCourseFound: 'No course found with that id' }));

});

//@route    DELETE api/course/:id 
//@desc     DELETE course
//@access   private route
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            Course.findById(req.params.id)
                .then(course => {
                    // check for course instructor 
                    if (course.instructor.toString() !== req.user.id) {
                        return res.status(401).json({ notAuthorised: 'User not authorized' });
                    }
                    //delete 
                    course.remove()
                        .then(() => res.json({ success: true }))
                        .catch(err => res.status(404)
                            .json({ postNotFound: 'No post found' }))


                })
        })
});


//@route    DELETE api/course/:id 
//@desc     DELETE course
//@access   private route
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Profile.findOne({ user: req.user.id })
        .then(profile => {
            Course.findById(req.params.id)
                .then(course => {
                    // check for course instructor 
                    if (course.instructor.toString() !== req.user.id) {
                        return res.status(401).json({ notAuthorised: 'User not authorized' });
                    }
                    //delete 
                    course.remove()
                        .then(() => res.json({ success: true }))
                        .catch(err => res.status(404)
                            .json({ postNotFound: 'No post found' }))


                })
        })
});

//@route    POST api/course 
//@desc     Create course
//@access   private route
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    const { errors, isValid } = validateCourseInput(req.body);

    //check validation
    if (!isValid) {
        // return errors with 400 status
        return res.status(400).json(errors);
    }

    const newCourse = new Course({
        course_name: req.body.course_name,
        instructor: req.user.id,
        start_date: req.body.start_date,
        end_date: req.body.end_date
    });

    newCourse.save().then(course => res.json(course));

});


module.exports = router;


