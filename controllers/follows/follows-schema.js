import mongoose from 'mongoose'

const followsSchema = mongoose.Schema({
  followed:{type:mongoose.Schema.Types.ObjectId, ref:'OmdbUsersModel'},
  follower:{type:mongoose.Schema.Types.ObjectId, ref:'OmdbUsersModel'},
},{collection:'follows'})

export default followsSchema