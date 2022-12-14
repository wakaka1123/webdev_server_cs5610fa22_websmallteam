import * as dao from './users-individual-dao.js';
import {findByUsername, welcomeIndividual} from "./users-individual-dao.js";

let currentUser = null

const usersIndividualController = (app) => {
    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }

    const findAllUsers = async (req, res) => {
        const allUsers = await dao.findAllUsers()
        res.send(allUsers);
    }

    const deleteUser = async (req, res) => {
        const uid = req.params.uid
        const status = await dao.deleteUser(uid)
        res.json(status)
    }

    const updateUser = async (req, res) => {
        const updates = req.body
        const status = await dao.updateUser(updates)
        res.json(status)
    }

    const register = async (req, res) => {
        const user = req.body
        const existingUser = await findByUsername(user.username)
        if (existingUser) {
            res.sendStatus(403)
            return
        }
        const currentUser = await dao.createUser(user)
        req.session['currentUser'] = currentUser
        res.json(currentUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await dao.findByCredentials(credentials.username, credentials.password)
        if (!existingUser) {

            res.sendStatus(403)
            return
        }
        req.session['currentUser'] = existingUser
        // currentUser = existingUser
        res.json(existingUser)

    }

    const profile = async (req, res) => {
        if (req.session['currentUser']) {
            // const data = await findByUsername(currentUser.username)
            // res.json(data)
            // return
            res.send(req.session['currentUser'])
        } else {
            res.sendStatus(403)
        }
    }

    const logout = (req, res) => {
        req.session.destroy()
        // currentUser = null
        res.sendStatus(200)
    }

    const welcomeIndividual = async (req,res)=>{
        const welcomeIndividual = await dao.welcomeIndividual()
        res.send(welcomeIndividual);
    }

    app.post('/individual-users', createUser)
    app.get('/individual-users', findAllUsers)
    app.delete('/individual-users/:uid', deleteUser)
    app.put('/individual-user', updateUser)
    app.get('/welcome-individual',welcomeIndividual)

    app.post('/individual-register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

export default usersIndividualController