import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role :{
        type: String,
        required: true,
        enum: ['Corporate','Individual-User','Admin']
    },
    city: String,
    email: {
        type: String,
        required: true
    },
    mobile: String,
    Iam: String,
    facebook: String,
    twitter: String,
    linkedin: String,
    instagram: String,
    password: String,
    following:String,
    followers: String,
    review:String,
    favorites: String
}, {versionKey: false,
    collection: 'profile'});

export default ProfileSchema;

