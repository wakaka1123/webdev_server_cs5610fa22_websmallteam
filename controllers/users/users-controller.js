import * as userDao from './users-dao.js';

const usersController = (app) => {


    const findAllUsers = async (req, res) => {
        const allUsers = await userDao.findAllUsers()
        res.send(allUsers);
    }


    app.get('/users', findAllUsers)
}

export default usersController;