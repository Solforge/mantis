const Validator = require('validator')

const isEmpty = require('./isEmpty')

module.exports = function validateLoginInput(data) {

    let errors = {}

    data.handle = !isEmpty(data.handle) ? data.handle : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be between 2 and 40 characters'
    }

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}