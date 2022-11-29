import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
}, {versionKey: false,collection: 'users'});

export default usersSchema;