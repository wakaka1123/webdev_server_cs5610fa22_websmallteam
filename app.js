import express from 'express'
import MoviesController from "./controllers/movies/movies-controller.js";
import mongoose from "mongoose";
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import LikesController from "./controllers/likes/likes-controller.js";
import ProfileController from "./controllers/profile/profile-controller.js";
import UserController from "./controllers/users/users-controller.js"


const CONNECTION_STRING = 'mongodb+srv://wakaka:overmars89@cluster0.m9j6yue.mongodb.net/?retryWrites=true&w=majority'
    ||'mongodb://localhost:27017/test'

mongoose.connect(CONNECTION_STRING).then(() => console.log('connected DB') );

const app = express()
app.use(cors())
app.use(express.json())
MoviesController(app)
LikesController(app)
HelloController(app)
UserController(app)
ProfileController(app)

app.listen(process.env.PORT ||4000)



