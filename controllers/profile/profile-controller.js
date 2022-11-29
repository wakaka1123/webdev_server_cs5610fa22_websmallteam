import * as profileDao from './profile-dao.js'

const profileController = (app) => {

    const createProfile = async (req, res) => {
        const newProfile = req.body
        const insertedProfile = await profileDao.createProfile(newProfile);
        res.json(insertedProfile)
    }

    const findAllProfiles = async(req,res) => {
        const profiles = await profileDao.findProfile()
        return res.json(profiles)
    }

    const updateProfile = async (req, res) => {
        const idToUpdate = req.params['pid']
        const profileUpdate = req.body

        const status = await profileDao.updateProfile(idToUpdate,profileUpdate);
        res.json(status)
    }

    app.post('/profile', createProfile);
    app.get('/profile', findAllProfiles);
    app.put('/profile/:pid',updateProfile);
}

export default profileController;

