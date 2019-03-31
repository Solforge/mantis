
const Validator = require('validator')

const isEmpty = require('./isEmpty')

module.exports = function validateLoginInput(data) {

    let errors = {}

    data.course_name = !isEmpty(data.course_name) ? data.course_name : ''
    data.start_date = !isEmpty(data.start_date) ? data.start_date : ''
    data.end_date = !isEmpty(data.end_date) ? data.end_date : ''

    if (Validator.isEmpty(data.course_name)) {
        errors.course_name = 'Course Name field is required'
    }

    if (!Validator.isLength(data.course_name, { min: 5, max: 200 })) {
        errors.course_name = 'Course Name must be atleast 5 characters'
    }
    

    if (Validator.isEmpty(data.start_date)) {
        errors.start_date = 'Start Date field is required'
    }

    if (Validator.isEmpty(data.end_date)) {
        errors.end_date = 'End Date field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}

