import usersModel from "./users-model.js";

export const findAllUsers = () =>
    usersModel.find()

export const findUserById = (uid) =>
    usersModel.findById(uid)

