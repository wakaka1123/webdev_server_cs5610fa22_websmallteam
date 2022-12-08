import mongoose from 'mongoose';
import usersCorporateSchema from "./users-corporate-schema.js";

const usersCorporateModel = mongoose.model('UserCorporateModel', usersCorporateSchema);
export default usersCorporateModel;