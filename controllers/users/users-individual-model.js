import mongoose from 'mongoose';
import usersIndividualSchema from "./users-individual-schema.js";

const usersIndividualModel = mongoose.model('UserIndividualModel', usersIndividualSchema);
export default usersIndividualModel;