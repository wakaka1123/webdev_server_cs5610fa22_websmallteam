import mongoose from "mongoose";
import museumsSchema from "./museums-schema.js";

const museumsModel = mongoose.model('MuseumModel', museumsSchema)

export default museumsModel