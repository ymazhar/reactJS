import {
    GET_MOVIES_ERROR,
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS, REMOVE_DELETE_MOVIE_ID, REMOVE_EDIT_MOVIE_ID, SET_DELETE_MOVIE_ID, SET_EDIT_MOVIE_ID,
    SUCCESS_UPDATE_MOVIE, GET_MOVIE_BY_ID_SUCCESS
} from "../actions/types";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    movieItem: {},
    editMovieId: null,
    deleteMovieId: null,
    showEditMoviePage: false,
    forms: {
        movieForm: {
            id: {
                id: "id",
                name: "id",
                placeholder: "Movie id",
                defaultValue: "",
                value: "",
                label: "Movie ID",
            },
            title: {
                id: "title",
                name: "title",
                placeholder: "Add movie title",
                defaultValue: "",
                value: "",
                label: "Title",
            },
            release_date: {
                id: "release_date",
                placeholder: "Select Date",
                name: "release_date",
                defaultValue: "",
                value: "",
                label: "Release date",
            },
            poster_path: {
                id: "poster_path",
                name: "poster_path",
                placeholder: "Movie Url Here",
                defaultValue: "",
                value: "",
                label: "Movie Url",
            },
            genres: {
                id: "genres",
                name: "genres",
                options: [
                    {
                        value: "Comedy",
                        label: "Comedy",
                    },
                    {
                        value: "Drama",
                        label: "Drama",
                    },
                    {
                        value: "Romance",
                        label: "Romance",
                    },
                ],
                defaultValue: [],
                value: [],
                label: "Genre",
                placeholder: "Select genre",
            },
            overview: {
                id: "overview",
                name: "overview",
                placeholder: "Overview text goes here",
                text: "Overview text goes here",
                defaultValue: "",
                value: "",
                label: "Overview",
            },
            runtime: {
                id: "runtime",
                name: "runtime",
                placeholder: "Runtime here",
                text: "Runtime here",
                defaultValue: "",
                value: "",
                label: "Runtime",
            },
        },
    }
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES_REQUEST :
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_MOVIES_SUCCESS :
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case GET_MOVIES_ERROR :
            return {
                ...state,
                movies: [],
                loading: false,
                error: action.payload
            }
        case SET_EDIT_MOVIE_ID: {
            const id = action.payload;
            return {
                ...state,
                editMovieId: id
            }
        }
        case REMOVE_EDIT_MOVIE_ID: {
            return {
                ...state,
                editMovieId: null
            }
        }
        case SET_DELETE_MOVIE_ID: {
            const id = action.payload;
            return {
                ...state,
                deleteMovieId: id
            }
        }
        case REMOVE_DELETE_MOVIE_ID: {
            return {
                ...state,
                deleteMovieId: null
            }
        }
        case SUCCESS_UPDATE_MOVIE: {
            const movies = state.movies.data.map((movie) => {
                if(movie.id === action.payload.id) {
                    movie = action.payload
                }
                return movie;
            })
            return {
                ...state,
                loading: false,
                movies: {
                    ...state.movies,
                    data: movies
                },
            }
        }
        case GET_MOVIE_BY_ID_SUCCESS: {
            return {
                ...state,
                movieItem: action.payload
            }
        }
        default:
            return state;
    }
}