import mongoose from 'mongoose'

const reviewsSchema =mongoose.Schema({
    review: String,
    imdbID: String,
    author: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'OmdbUsersModel'
    }

},{collection:'reviews'})

export default reviewsSchema