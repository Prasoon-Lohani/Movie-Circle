const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String,
    ref:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const MovieSchema = new Schema({
    title: String,
    release_date: String,
    overview: String,
    comments: [
        {type: commentSchema}
    ]
});

module.exports = mongoose.model('movie', MovieSchema)