import omUsersModel from "./om-users-model.js";

export const createOmUser = (user)=>omUsersModel.create(user)

export const findAllOmUsers = () => omUsersModel.find()

export const findOmUserById = (uid) => omUsersModel.findOne(uid)

export const findOmUserByUsername = (username) => omUsersModel.findOne({username})

export const findOmUserByCredentials = (username,password) => omUsersModel.findOne({username,password},{password:false})

export const deleteOmUser = (uid) => omUsersModel.deleteOne({_id:uid})

export const updateOmUser = (uid,userUpdates) => omUsersModel.updateOne({_id:uid},{$set:userUpdates})

export const omRegister = async (user)=>{

}

export const findUserById = (uid) =>omUsersModel.findById(uid,{password:false})