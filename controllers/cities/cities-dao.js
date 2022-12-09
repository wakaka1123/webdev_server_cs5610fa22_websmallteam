import citiesModel from "./cities-model.js";

export const findAllCities = async () => {
  const cities = await citiesModel.find()
  return cities
}
export const createCity = async (city) => {
  const actualInsertedCity = await citiesModel.create(city)
  return actualInsertedCity
}

export const findCityByCityName = async (name) =>
    await citiesModel.findOne({name})

export const findCityById = (cityID) =>
    citiesModel.findById(cityID)