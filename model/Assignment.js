const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const AssignmentSchema = new Schema({
    assignment_name: {
        type: String, 
        required: true
    },
    start_date: { 
        type: Date,
        required: true
    },
    end_date: { 
        type: Date,
        required: true
    },
    match: { 
        type: String
    }
})

module.exports = Assignment = mongoose.model('assignments', AssignmentSchema);


