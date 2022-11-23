import mongoose from 'mongoose';
const schema = mongoose.Schema({
  title: String,
  likes: Number,
  liked: Boolean,
}, {versionKey: false,
  collection: 'omdb'});
export default schema;