import * as cityDao from './cities-dao.js'

const CitiesController = (app) => {

  const createCity = async (req, res) => {
    const city = req.body
    const existingCity = await cityDao
    .findCityByCityName(city.name)
    if(existingCity) {
      res.sendStatus(403)
      return
    }
    const actualCity = await cityDao.createCity(city)
    res.send(actualCity)
  }
  const findAllCites = async (req, res) => {
    const citiesInDatabase = await cityDao.findAllCities()
    res.send(citiesInDatabase)
  }
  const findCityById = async (req, res) => {
    const cityID = req.params.cityID
    const city = await cityDao.findCityById(cityID)
    if (city) {
      res.json(city)
      return
    }
    res.sendStatus(404)
  }

  app.post  ('/cities', createCity)
  app.get   ('/cities', findAllCites)
  app.get   ('/cities/:cityID', findCityById)
}

export default CitiesController;