
import * as moviesDao from '../movies/movies-dao.js'

let movies =[
  {
    "_id":"123",
    "title":"Avatar"
  },
  {
    "_id":"234",
    "title":"StarWar"
  },
  {
    "_id":"345",
    "title":"Lord of the Rings"
  }
]


//movie crud api tests
const MovieController = (app) => {

  const createMovie = async (req, res) => {
    const newMovie = req.body
    newMovie.likes = 0
    newMovie.liked = false
    const insertedMovie = await moviesDao.createMovie(newMovie)
    res.json(insertedMovie)
  }

  const findAllMovies = async (req, res) => {
    const movies = await moviesDao.findMovies()
    return res.json(movies)
  }

  const updateMovie = async (req, res) => {
    const midToUpdate = req.params.mid
    const movieUpdates = req.body

    const status = await moviesDao.updateMovie(midToUpdate,movieUpdates)
    res.json(status)

  }

  const deleteMovie = async (req, res) => {
    const midToDelete = req.params.mid
    const status = await moviesDao.deleteMovie(midToDelete)
    res.json(status)
  }

  app.post('/movies', createMovie)
  app.get('/movies', findAllMovies)
  app.put('/movies/:mid', updateMovie)
  app.delete('/movies/:mid', deleteMovie)
}

export default MovieController;