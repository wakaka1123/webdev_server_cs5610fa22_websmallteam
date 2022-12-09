import mongoose from "mongoose";
import citiesSchema from "./cities-schema.js";

const citiesModel = mongoose.model('CityModel', citiesSchema)

export default citiesModel