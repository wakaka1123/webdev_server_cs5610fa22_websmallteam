import express from 'express'
import MoviesController from "./controllers/movies/movies-controller.js";
import mongoose from "mongoose";
import cors from 'cors';
import session from 'express-session'
import HelloController from "./controllers/hello-controller.js";
import LikesController from "./controllers/likes/likes-controller.js";
import ProfileController from "./controllers/profile/profile-controller.js";
import IndividualUserController from "./controllers/users/users-individual-controller.js"
import CorporateUserController from "./controllers/users/users-corporate-controller.js"
import AdminUserController from "./controllers/users/users-admin-controller.js"
import SessionController from "./session-controller.js";
import GooglePlacesController
  from "./controllers/googleplaces/googleplaces-controller.js";
import CitiesController from "./controllers/cities/cities-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import RestaurantsController
  from "./controllers/restaturants/restaurants-controller.js";
import MuseumsController from "./controllers/museums/museums-controller.js"


const CONNECTION_STRING = 'mongodb+srv://wakaka:overmars89@cluster0.m9j6yue.mongodb.net/?retryWrites=true&w=majority'
    ||'mongodb://localhost:27017/test'

mongoose.connect(CONNECTION_STRING).then(() => console.log('connected DB') );

const app = express()
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))
app.use(session({
  secret: 'should be an environment variable',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(express.json())
MoviesController(app)
LikesController(app)
HelloController(app)
IndividualUserController(app)
CorporateUserController(app)
AdminUserController(app)
SessionController(app)
ProfileController(app)
GooglePlacesController(app)
CitiesController(app)
ReviewsController(app)
RestaurantsController(app)
MuseumsController(app)

app.listen(process.env.PORT ||4000)



