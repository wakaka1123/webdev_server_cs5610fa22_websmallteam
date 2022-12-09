import museumsModel from "./museums-model.js";

export const findAllMuseums = async () => {
  const museums = await museumsModel.find()
  return museums
}
export const createMuseum = async (museum) => {
  const actualInsertedMuseum = await museumsModel.create(museum)
  return actualInsertedMuseum
}

export const findMuseumByMuseumName = async (name) =>
    await museumsModel.findOne({name})

export const findMuseumById = (museumID) =>
    museumsModel.findById(museumID)