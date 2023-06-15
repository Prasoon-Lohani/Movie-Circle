const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    release_date: String,
    overview: String,
    comments: [
        // {type: Schema.Types.ObjectId, ref: "User"}
        {type: String}
    ]
});

module.exports = mongoose.model('movie', MovieSchema)