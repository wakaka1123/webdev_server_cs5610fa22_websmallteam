import * as dao from './users-admin-dao.js';

let currentUser = null

const usersAdminController = (app) => {
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
        const uid = req.params.uid
        const updates = req.body
        const status = await dao.updateUser(uid, updates)
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

    app.post('/admin-users', createUser)
    app.get('/admin-users', findAllUsers)
    app.delete('/admin-users/:uid', deleteUser)
    app.put('/admin-users/:uid', updateUser)

    app.post('/admin-register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

export default usersAdminController