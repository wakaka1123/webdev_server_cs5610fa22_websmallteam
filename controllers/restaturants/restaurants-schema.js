import mongoose from "mongoose";

const restaurantsSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  googleRating: String,
  priceLevel: String,
  city: String
}, {collection: 'restaurants'})

export default restaurantsSchema