import usersCorporateModel from "./users-corporate-model.js";

export const createUser = (user) =>
    usersCorporateModel.create(user)

export const findAllUsers = () =>
    usersCorporateModel.find()

export const findUserById = (uid) =>
    usersCorporateModel.findById(uid)

export const findByUsername = (username) =>
    usersCorporateModel.findOne({username})

export const findByCredentials = (username, password) =>
    usersCorporateModel.findOne({username, password}, {password:false})

export const deleteUser = (uid) =>
    usersCorporateModel.deleteOne({_id: uid})

export const updateUser = (userUpdates) =>
    usersCorporateModel.updateOne({_id: userUpdates._id},
        {$set: userUpdates})