import {useSelector} from "react-redux";

export const errorSelector = () => useSelector(({movies: {error}}) => error);
export const getLoadingStateSelector = () => useSelector(({movies: {loading}}) => loading);
export const getMoviesSelector = () => useSelector(({movies: {movies: {data}}}) => data);
export const getMoviesTotalCountSelector = () => useSelector(({movies: {movies: {totalAmount}}}) => totalAmount);
export const getDeleteMovieIdSelector = () => useSelector(({movies: {deleteMovieId}}) => deleteMovieId);
export const getEditMovieIdSelector = () => useSelector(({movies: {editMovieId}}) => editMovieId);
export const getMovieFormSelector = () => useSelector(({movies: {forms: {movieForm}}}) => movieForm);
export const getFilmItemSelector = () => useSelector(({movies: {movieItem}}) => movieItem);
