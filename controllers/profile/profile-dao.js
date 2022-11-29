import profileModel from "./profile-model.js";

export const createProfile = (profile) =>
    profileModel.create(profile);

export const updateProfile = (pid, profile) =>
    profileModel.updateOne({_id: pid}, {$set: profile});

export const findProfile = () =>
    profileModel.find();