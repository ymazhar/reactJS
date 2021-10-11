import {
    HIDE_MODAL_ADD_MOVIE, HIDE_MODAL_DELETE_MOVIE,
    HIDE_MODAL_EDIT_MOVIE,
    SHOW_MODAL_ADD_MOVIE,
    SHOW_MODAL_DELETE_MOVIE,
    SHOW_MODAL_EDIT_MOVIE
} from "./types";

const showModalAddMovie = () => ({type: SHOW_MODAL_ADD_MOVIE})

const hideModalAddMovie = () => ({type: HIDE_MODAL_ADD_MOVIE});

const showModalEditMovie = () => ({type: SHOW_MODAL_EDIT_MOVIE});

const hideModalEditMovie = () => ({type: HIDE_MODAL_EDIT_MOVIE});

const showModalDeleteMovie = () => ({type: SHOW_MODAL_DELETE_MOVIE});

const hideModalDeleteMovie = () => ({type: HIDE_MODAL_DELETE_MOVIE});

export {
    showModalAddMovie,
    hideModalAddMovie,
    showModalEditMovie,
    hideModalEditMovie,
    showModalDeleteMovie,
    hideModalDeleteMovie,
}