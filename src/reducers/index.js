import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
    SHOW_EDIT_MOVIE_PAGE,
    HIDE_EDIT_MOVIE_PAGE,
    SHOW_MODAL_ADD_MOVIE,
    HIDE_MODAL_ADD_MOVIE,
    SHOW_MODAL_DELETE_MOVIE,
    HIDE_MODAL_DELETE_MOVIE,
    SHOW_MODAL_EDIT_MOVIE,
    HIDE_MODAL_EDIT_MOVIE,
    HANDLE_ADD_MOVIE_FORM_FIELD,
    HANDLE_GENRE_CHANGE,
    SET_EDIT_MOVIE_ID,
    REMOVE_EDIT_MOVIE_ID,
    SET_DELETE_MOVIE_ID,
    REMOVE_DELETE_MOVIE_ID,
} from '../actions/types';

const initialState = {
    movies: [],
    loading: true,
    error: null,
    showEditMoviePage: false,
    movieItem: {},
    modals: {
        addMovie: {
            title: "Add movie",
            isOpen: false,
            id: "addMovie",
        },
        editMovie: {
            title: "Edit movie",
            isOpen: false,
            id: "editMovie",
        },
        deleteMovie: {
            title: "Delete movie",
            isOpen: false,
            id: "deleteMovie",
        },
    },
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
    },
    editMovieId: null,
    deleteMovieId: null
}
const reducer = (state = initialState, action) => {
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
        case SHOW_EDIT_MOVIE_PAGE :
            return {
                ...state,
                showEditMoviePage: true,
                movieItem: action.payload
            }
        case HIDE_EDIT_MOVIE_PAGE :
            return {
                ...state,
                showEditMoviePage: false,
                movieItem: {}
            }
        case SHOW_MODAL_ADD_MOVIE :
            return {
                ...state,
                modals: {
                    ...state.modals,
                    addMovie: {
                        ...state.modals.addMovie,
                        isOpen: true
                    }

                }
            }
        case HIDE_MODAL_ADD_MOVIE :
            return {
                ...state,
                modals: {
                    ...state.modals,
                    addMovie: {
                        ...state.modals.addMovie,
                        isOpen: false
                    }

                }
            }
        case SHOW_MODAL_EDIT_MOVIE :
            return {
                ...state,
                modals: {
                    ...state.modals,
                    editMovie: {
                        ...state.modals.editMovie,
                        isOpen: true
                    }

                }
            }
        case HIDE_MODAL_EDIT_MOVIE :
            return {
                ...state,
                modals: {
                    ...state.modals,
                    editMovie: {
                        ...state.modals.editMovie,
                        isOpen: false
                    }

                }
            }
        case SHOW_MODAL_DELETE_MOVIE :
            return {
                ...state,
                modals: {
                    ...state.modals,
                    deleteMovie: {
                        ...state.modals.deleteMovie,
                        isOpen: true
                    }

                }
            }
        case HIDE_MODAL_DELETE_MOVIE :
            return {
                ...state,
                modals: {
                    ...state.modals,
                    deleteMovie: {
                        ...state.modals.deleteMovie,
                        isOpen: false
                    }

                }
            }
        case HANDLE_ADD_MOVIE_FORM_FIELD: {
            const target = action.payload;
            console.log(target.value);
            return {
                ...state,
                forms: {
                    ...state.forms,
                    movieForm: {
                        ...state.forms.movieForm,
                        [target.id]: {
                            ...state.forms.movieForm[target.id],
                            value: target.value,
                        },
                    }
                }
            }
        }
        case HANDLE_GENRE_CHANGE: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    movieForm: {
                        ...state.forms.movieForm,
                        genres: {
                            ...state.forms.movieForm.genres,
                            value: action.payload
                        }
                    }
                }
            }
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
        default:
            return state;
    }
}

export default reducer;