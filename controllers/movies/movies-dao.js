import moviesModel from './movies-model.js';

export const findMovies = () => moviesModel.find();
export const createMovie = (movie) => moviesModel.create(movie);
export const deleteMovie = (mid) => moviesModel.deleteOne({_id: mid});
export const updateMovie = (mid, movie) => moviesModel.updateOne({_id: mid}, {$set: movie})