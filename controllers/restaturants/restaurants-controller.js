import * as restaurantDao from './restaurants-dao.js'

const RestaurantsController = (app) => {

  const createRestaurant = async (req, res) => {
    const restaurant = req.body
    const existingRestaurant = await restaurantDao
    .findRestaurantByRestaurantName(restaurant.name)
    if(existingRestaurant) {
      res.sendStatus(403)
      return
    }
    const actualRestaurant = await restaurantDao.createRestaurant(restaurant)
    res.send(actualRestaurant)
  }
  const findAllRestaurants = async (req, res) => {
    const restaurantsInDatabase = await restaurantDao.findAllRestaurants()
    res.send(restaurantsInDatabase)
  }
  const findRestaurantById = async (req, res) => {
    const restaurantID = req.params.restaurantID
    const restaurant = await restaurantDao.findRestaurantById(restaurantID)
    if (restaurant) {
      res.json(restaurant)
      return
    }
    res.sendStatus(404)
  }

  app.post  ('/restaurants', createRestaurant)
  app.get   ('/restaurants', findAllRestaurants)
  app.get   ('/restaurants/:restaurantID', findRestaurantById)
}

export default RestaurantsController;