import * as museumDao from './museums-dao.js'

const MuseumsController = (app) => {

  const createMuseum = async (req, res) => {
    const museum = req.body
    const existingMuseum = await museumDao
    .findMuseumByMuseumName(museum.name)
    if(existingMuseum) {
      res.sendStatus(403)
      return
    }
    const actualMuseum = await museumDao.createMuseum(museum)
    res.send(actualMuseum)
  }
  const findAllMuseums = async (req, res) => {
    const museumsInDatabase = await museumDao.findAllMuseums()
    res.send(museumsInDatabase)
  }

  const findMuseumById = async (req, res) => {
    const museumID = req.params.museumID
    const museum = await museumDao.findMuseumById(museumID)
    if (museum) {
      res.json(museum)
      return
    }
    res.sendStatus(404)
  }

  app.post  ('/museums', createMuseum)
  app.get   ('/museums', findAllMuseums)
  app.get   ('/museums/:museumID', findMuseumById)
}

export default MuseumsController;