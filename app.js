import express from 'express'
import MoviesController from "./controllers/movies/movies-controller.js";
import mongoose from "mongoose";
import cors from 'cors';
import session from 'express-session';
import HelloController from "./controllers/hello-controller.js";
import LikesController from "./controllers/likes/likes-controller.js";
import ProfileController from "./controllers/profile/profile-controller.js";
import UserController from "./controllers/users/users-controller.js"
import OmUsersController from "./controllers/omdb-users/om-users-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import SessionController from "./session-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";


const CONNECTION_STRING = //'mongodb+srv://wakaka:overmars89@cluster0.m9j6yue.mongodb.net/?retryWrites=true&w=majority'||
    'mongodb://localhost:27017/test'


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4
}


mongoose.connect('mongodb://localhost:27017/test',options).then(() => console.log('connected DB') );




const app = express()
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))
app.use(session({
  secret: 'should be environment variable!',
  resave:false,
  saveUninitialized: true,
  cookie:{secure:false}
}))
app.use(express.json())
MoviesController(app)
LikesController(app)
HelloController(app)
UserController(app)
ProfileController(app)
OmUsersController(app)
SessionController(app)
ReviewsController(app)
FollowsController(app)

app.listen(process.env.PORT ||4000)



