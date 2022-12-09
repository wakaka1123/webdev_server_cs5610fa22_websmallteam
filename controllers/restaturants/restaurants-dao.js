import restaurantsModel from "./restaurants-model.js";

export const findAllRestaurants = async () => {
  const restaurants = await restaurantsModel.find()
  return restaurants
}
export const createRestaurant = async (restaurant) => {
  const actualInsertedRestaurant = await restaurantsModel.create(restaurant)
  return actualInsertedRestaurant
}

export const findRestaurantByRestaurantName = async (name) =>
    await restaurantsModel.findOne({name})

export const findRestaurantById = (restaurantID) =>
    restaurantsModel.findById(restaurantID)