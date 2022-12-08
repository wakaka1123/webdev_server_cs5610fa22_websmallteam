import mongoose from 'mongoose';
import usersAdminSchema from "./users-admin-schema.js";

const usersAdminModel = mongoose.model('UserAdminModel', usersAdminSchema);
export default usersAdminModel;