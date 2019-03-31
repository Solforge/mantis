const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    course_name: {
        type: String,
        required: true
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    students: [
        {
            type: Schema.ObjectId,
            ref: 'users'
        }
    ],
    assignments: [
        {
            type: Schema.ObjectId,
            ref: 'assignments'
        }
    ]
})

module.exports = Course = mongoose.model('course', CourseSchema);




    
    