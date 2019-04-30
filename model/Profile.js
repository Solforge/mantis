const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create profile schema 
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    enrollment: [
        {
            type: Schema.Types.ObjectId,
            ref: 'course'
        }
    ],
    date: {
        type: Date, 
        default: Date.now
    }
})

module.exports = Profile = mongoose.model('profile', ProfileSchema);

