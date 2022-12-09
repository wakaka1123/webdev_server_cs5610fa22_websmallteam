import mongoose from "mongoose";

const citiesSchema = mongoose.Schema({
  name: {type: String, required: true},
  address: String,
}, {collection: 'cities'})

export default citiesSchema