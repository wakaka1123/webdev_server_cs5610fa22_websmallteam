import express from 'express'
import MoviesController from "./controllers/movies/movies-controller.js";
import mongoose from "mongoose";
import cors from 'cors';


const uri = "mongodb+srv://wakaka:overmars89@cluster0.m9j6yue.mongodb.net/?retryWrites=true&w=majority"

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || uri ||'mongodb://localhost:27017/test'
mongoose.connect(CONNECTION_STRING);


const app = express()
app.use(cors())
app.use(express.json())
MoviesController(app)

app.listen(process.env.PORT ||4000)