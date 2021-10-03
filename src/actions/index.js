import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
    SHOW_EDIT_MOVIE_PAGE,
    HIDE_EDIT_MOVIE_PAGE,
    SHOW_MODAL_ADD_MOVIE,
    HIDE_MODAL_ADD_MOVIE,
    SHOW_MODAL_EDIT_MOVIE,
    HIDE_MODAL_EDIT_MOVIE,
    SHOW_MODAL_DELETE_MOVIE,
    HIDE_MODAL_DELETE_MOVIE,
    HANDLE_ADD_MOVIE_FORM_FIELD,
    SET_EDIT_MOVIE_ID,
    REMOVE_EDIT_MOVIE_ID,
    SET_DELETE_MOVIE_ID,
    REMOVE_DELETE_MOVIE_ID,
} from './types';

const getMoviesRequest = () => {
    return {
        type: GET_MOVIES_REQUEST
    };
};

const getMoviesSuccess = (newMovies) => {
    return {
        type: GET_MOVIES_SUCCESS,
        payload: newMovies
    };
}

const getMoviesError = (error) => {
    return {
        type: GET_MOVIES_ERROR,
        payload: error
    };
}

const showEditMoviePage = (movie) => {
    return {
        type: SHOW_EDIT_MOVIE_PAGE,
        payload: movie
    }
}

const hideEditMoviePage = () => {
    return {
        type: HIDE_EDIT_MOVIE_PAGE
    }
}

const showModalAddMovie = () => {
    return {
        type: SHOW_MODAL_ADD_MOVIE
    }
}

const hideModalAddMovie = () => {
    return {
        type: HIDE_MODAL_ADD_MOVIE
    }
}

const showModalEditMovie = () => {
    return {
        type: SHOW_MODAL_EDIT_MOVIE
    }
}

const hideModalEditMovie = () => {
    return {
        type: HIDE_MODAL_EDIT_MOVIE
    }
}

const showModalDeleteMovie = () => {
    return {
        type: SHOW_MODAL_DELETE_MOVIE
    }
}

const hideModalDeleteMovie = () => {
    return {
        type: HIDE_MODAL_DELETE_MOVIE
    }
}

const handleAddMovieFormField = (event) => {
    return {
        type: HANDLE_ADD_MOVIE_FORM_FIELD,
        payload: event.target
    }
}

const setEditMovieId = (id) => {
    return {
        type: SET_EDIT_MOVIE_ID,
        payload: id
    }
}

const removeEditMovieId = () => {
    return {
        type: REMOVE_EDIT_MOVIE_ID
    }
}

const setDeleteMovieId = (id) => {
    return {
        type: SET_DELETE_MOVIE_ID,
        payload: id
    }
}

const removeDeleteMovieId = () => {
    return {
        type: REMOVE_DELETE_MOVIE_ID
    }
}

export {
    getMoviesRequest,
    getMoviesSuccess,
    getMoviesError,
    showEditMoviePage,
    hideEditMoviePage,
    showModalAddMovie,
    hideModalAddMovie,
    showModalEditMovie,
    hideModalEditMovie,
    showModalDeleteMovie,
    hideModalDeleteMovie,
    handleAddMovieFormField,
    setEditMovieId,
    removeEditMovieId,
    setDeleteMovieId,
    removeDeleteMovieId,
};