import usersIndividualModel from "./users-individual-model.js";

export const createUser = (user) =>
    usersIndividualModel.create(user)

export const findAllUsers = () =>
    usersIndividualModel.find()

export const findUserById = (uid) =>
    usersIndividualModel.findById(uid)

export const findByUsername = (username) =>
    usersIndividualModel.findOne({username})

export const findByCredentials = (username, password) =>
    usersIndividualModel.findOne({username, password}, {password:false})

export const deleteUser = (uid) =>
    usersIndividualModel.deleteOne({_id: uid})

export const updateUser = (userUpdates) =>
    usersIndividualModel.updateOne({_id: userUpdates._id},
        {$set: userUpdates})

export const welcomeIndividual = () =>
    usersIndividualModel.find().sort({_id:-1}).limit(3)