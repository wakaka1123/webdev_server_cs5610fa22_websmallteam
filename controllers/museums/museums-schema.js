import mongoose from "mongoose";

const museumsSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: String,
  rating: String
}, {collection: 'museums'})

export default museumsSchema