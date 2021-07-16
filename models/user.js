const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        required: 'Email is required',
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create the User model using the userSchema
const user = model('user', userSchema);

// export the user model
module.exports = user;