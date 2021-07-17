const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtName: {
        type: String,
        required: 'Thought name is required',
        minlength: 1,
        maxlength: 280
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create the thought model using the thoughtSchema
const thought = model('thought', thoughtSchema);

// export the user model
module.exports = thought;