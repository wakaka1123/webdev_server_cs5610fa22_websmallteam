import mongoose from 'mongoose';

const usersAdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role : {
        type: String,
        required: true,
        enum: ['Corporate','Individual-User','Admin']
    },
}, {versionKey: false,collection: 'profile'},{typeKey: '$type'});

export default usersAdminSchema;