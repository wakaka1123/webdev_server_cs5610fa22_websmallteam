import mongoose from 'mongoose'


const followsSchema = mongoose.Schema({
  followed: {type:mongoose.Schema.Types.ObjectId, ref:'ProfileModel'},
  follower: {type:mongoose.Schema.Types.ObjectId, ref:'ProfileModel'}
},{collection: 'follows'})

export default followsSchema