import mongoose from "mongoose";
import omUsersSchema from "./om-users-schema.js";

const omUsersModel = mongoose.model('OmdbUsersModel',omUsersSchema)

export default omUsersModel;