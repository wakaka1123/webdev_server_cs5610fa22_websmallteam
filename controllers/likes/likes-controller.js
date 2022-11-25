
let likes = [
  {_id:'123',user:'111',movie:'123'},
  {_id:'234',user:'111',movie:'234'},
  {_id:'345',user:'222',movie:'345'},
  {_id:'456',user:'333',movie:'345'},

]

const LikesController = (app) => {
  const userLikesMovie = (req,res) =>{
    const uid = req.params.uid
    const mid = req.params.mid
    const newLike = {
      _id: (new Date()).getTime()+'',
      user: uid,
      movie: mid
    }
    likes.push(newLike)
    res.json(newLike)
  }

  const userUnlikesMovie = (req,res) =>{
    const uid = req.params.uid
    const mid = req.params.mid
    likes = likes.filter(like=>like.user !== uid && like.movie !== mid)
    res.send(200)
  }

  const findAllLikes = (req,res) =>{
    res.json(likes)
  }
  const findMoviesLikedByUser = (req,res) =>{
    const uid = req.params.uid
    const moviesLikedByUser = likes.filter(like=>like.user === uid)
    res.json(moviesLikedByUser)
  }

  const findUsersWhoLikedMovie = (req,res) =>{
    const mid = req.params.mid
    const usersWhoLikedMovie = likes.filter(like=>like.movie === mid)
    res.json(usersWhoLikedMovie)
  }

  // => update rating
  //const updateLike = (req,res) =>{}


  app.post('/users/:uid/likes/:mid',userLikesMovie)
  app.delete('/users/:uid/likes/:mid',userUnlikesMovie)
  app.get('/likes',findAllLikes)
  app.get('/users/:uid/likes',findMoviesLikedByUser)
  app.get('/movies/:mid/likes',findUsersWhoLikedMovie)

  //app.put(updateLike)

}

export default LikesController;