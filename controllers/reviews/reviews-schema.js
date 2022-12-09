import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    placeID: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserIndividualModel'
    }
}, {collection: 'reviews'})
export default reviewsSchema