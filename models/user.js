const mongoose = require('mongoose');
const {Schema} = mongoose;

const commentSchema = new Schema({
    comment: String,
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    comments: [
        {type: commentSchema}
    ]
});

module.exports = mongoose.model('User', userSchema);