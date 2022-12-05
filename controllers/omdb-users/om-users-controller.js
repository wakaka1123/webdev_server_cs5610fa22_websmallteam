import * as dao from './om-users-dao.js'
import {findOmUserByCredentials, findOmUserByUsername} from "./om-users-dao.js";

let curOmUser = null


const OmUsersController = (app) =>{

  const createOmUser = async (req,res)=>{
    const user = req.body
    const actualUser = await dao.createOmUser(user)
    res.json(actualUser)
  }

  const findAllOmUsers = async (req,res)=>{
    const users = await dao.findAllOmUsers()
    res.json(users)
  }

  const deleteOmUser = async (req,res)=>{
    const uid = req.params.uid
    const status = await dao.deleteOmUser(uid)
    res.json(status)
  }

  const updateOmUser = async (req,res)=>{
    const uid = req.params.uid
    const updates= req.body
    const status = await dao.updateOmUser(uid,updates)
    res.json(status)
  }


  const omRegister = async (req,res)=>{
    const user = req.body
    const existingUser = await findOmUserByUsername(user.username)
    if(existingUser){
      res.sendStatus(403)
      return
    }
      const currentUser = await dao.createOmUser(user)
      req.session['currentUser'] = currentUser

      res.json(currentUser)
  }

  const omLogin = async (req,res)=>{
    const credentials = req.body
    const existingUser = await findOmUserByCredentials(credentials.username, credentials.password)
    if(existingUser){
      req.session['currentUser'] = existingUser
      res.json(existingUser)
      return
    }
    // if(!existingUser){
      res.sendStatus(403)
    //   return
    // }
    // curOmUser = existingUser
    // res.json(existingUser)

  }


  const omProfile = async (req,res) =>{
    // if(curOmUser){
    //   res.json(curOmUser)
    //   return
    // }
    // res.sendStatus(403)

    if(req.session['currentUser']){
      res.send(req.session['currentUser'])
    } else {
      res.sendStatus(403)
    }
  }


  const omLogout = async (req,res)=>{
    // curOmUser= null
    // res.sendStatus(200)
    req.session.destroy();
    res.sendStatus(200)
  }

  const findUserById = async(req,res)=>{
    const uid = req.params.uid
    const user = await dao.findUserById(uid)
    if(user) {
      res.json(user)
      return
    }
    res.sendStatus(404)
  }

  app.post('/movies/om-users',createOmUser)
  app.get('/movies/om-users',findAllOmUsers)
  app.put('/movies/om-users/:uid',deleteOmUser)
  app.delete('/movies/om-users/:uid',updateOmUser)
  app.get('/movies/om-users/:uid',findUserById)




  app.post('/movies/register',omRegister)
  app.post('/movies/login',omLogin)
  app.post('/movies/profile',omProfile)
  app.post('/movies/logout',omLogout)

}

export default OmUsersController