import {
    GET_MOVIES_ERROR,
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS, REMOVE_DELETE_MOVIE_ID, REMOVE_EDIT_MOVIE_ID, SET_DELETE_MOVIE_ID, SET_EDIT_MOVIE_ID,
    SUCCESS_UPDATE_MOVIE, GET_MOVIE_BY_ID_SUCCESS, SUCCESS_ADDED_MOVIE
} from "./types";
import {moviesAPI} from "../services/movie-service";
import {setActiveFilter, setSortByFilter} from "./filterActions";
import {getEditMovieIdSelector, getMoviesSelector} from "../selectors/movieSelectors";
import {hideModalDeleteMovie} from "./modalActions";

const getMoviesRequest = () => ({type: GET_MOVIES_REQUEST});

const getMoviesSuccess = (newMovies) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: newMovies
    };
}

const getMovieByIdSuccess = (movie) => {
    return {
        type: GET_MOVIE_BY_ID_SUCCESS,
        payload: movie
    };
}

const getMoviesError = (error) => {
    return {
        type: GET_MOVIES_ERROR,
        payload: error
    };
}

const setEditMovieId = (id) => {
    return {
        type: SET_EDIT_MOVIE_ID,
        payload: id
    }
}

const removeEditMovieId = () => ({type: REMOVE_EDIT_MOVIE_ID});

const setDeleteMovieId = (id) => {
    return {
        type: SET_DELETE_MOVIE_ID,
        payload: id
    }
}

const removeDeleteMovieId = () => ({type: REMOVE_DELETE_MOVIE_ID});

const successUpdating = (movie) => ({type: SUCCESS_UPDATE_MOVIE, payload: movie})
const successAddMovie = (movie) => ({type: SUCCESS_ADDED_MOVIE, payload: movie})

const addMovie = movieData => async dispatch => {
    const movie = {
        title: movieData.title,
        release_date: movieData.release_date,
        poster_path: movieData.poster_path,
        genres: movieData.genres,
        overview: movieData.overview,
        runtime: movieData.runtime,
    }
    try {
        const response = await moviesAPI.addMovie(movie);
        dispatch(successAddMovie(response.data))
    } catch (e) {
        dispatch(getMoviesError(e));
    }
}

const updateMovie = movieData => async dispatch => {
    try {
        dispatch(getMoviesRequest());
        const response = await moviesAPI.updateMovie(movieData);
        dispatch(successUpdating(response.data));
    } catch(e) {
        dispatch(getMoviesError(e));
    }
}

const deleteMovie = id => async dispatch => {
    try {
        const response = await moviesAPI.deleteMovie(id);
        console.log(response);
        if(response.status === 204) {
            dispatch(hideModalDeleteMovie());
        }
    } catch(e) {
        dispatch(getMoviesError(e));
    }
}

const fetchMovies = () => async dispatch => {
    try {
        dispatch(getMoviesRequest());
        const response = await moviesAPI.getMovies();
        dispatch(getMoviesSuccess(response.data));
    } catch (e) {
        dispatch(getMoviesError(e));
    }
}

const fetchMovieById = (id) => async dispatch => {
    try {
        const response = await moviesAPI.getMovieById(id);
        dispatch(getMovieByIdSuccess(response.data));
    } catch (e) {
        dispatch(getMoviesError(e));
    }
}

const searchMovies = (query) => async dispatch => {
    try {
        dispatch(getMoviesRequest());
        const response = await moviesAPI.search(query);
        dispatch(getMoviesSuccess(response.data));
    } catch (e) {
        dispatch(getMoviesError(e));
    }
}

const sortByMovies = (query) => async dispatch => {
    try {
        dispatch(setSortByFilter(query));
        dispatch(getMoviesRequest());
        const response = await moviesAPI.sortBy(query);
        dispatch(getMoviesSuccess(response.data));
    } catch (e) {
        dispatch(getMoviesError(e));
    }
}

const filterByGenres = (query) => async dispatch => {
    try {
        dispatch(setActiveFilter(query));
        dispatch(getMoviesRequest());
        let response = await moviesAPI.getMoviesByGenres(query);
        if(query === "All") {
            response = await moviesAPI.getMovies();
        }
        dispatch(getMoviesSuccess(response.data));
    } catch (e) {
        dispatch(getMoviesError(e));
    }
}

const getMovieById = () => {
    const movies = getMoviesSelector();
    const id = getEditMovieIdSelector();
    if(!movies || id === null) {return }
    const movie = movies.find((movie) => movie.id === id);
    const options = movie.genres.map(genre => ({label: genre, value: genre}));
    return {
        ...movie,
        genres: options
    };
}

export {
    getMoviesRequest,
    getMoviesSuccess,
    getMoviesError,
    setEditMovieId,
    removeEditMovieId,
    setDeleteMovieId,
    removeDeleteMovieId,
    updateMovie,
    deleteMovie,
    fetchMovies,
    searchMovies,
    sortByMovies,
    filterByGenres,
    fetchMovieById,
    getMovieById,
    addMovie
}