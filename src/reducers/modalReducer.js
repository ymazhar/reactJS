import {
    HIDE_MODAL_ADD_MOVIE, HIDE_MODAL_DELETE_MOVIE,
    HIDE_MODAL_EDIT_MOVIE,
    SHOW_MODAL_ADD_MOVIE, SHOW_MODAL_DELETE_MOVIE,
    SHOW_MODAL_EDIT_MOVIE
} from "../actions/types";

const initialState = {
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
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_ADD_MOVIE :
            return {
                ...state,
                addMovie: {
                    ...state.addMovie,
                    isOpen: true
                }
            }
        case HIDE_MODAL_ADD_MOVIE :
            return {
                ...state,
                addMovie: {
                    ...state.addMovie,
                    isOpen: false
                }
            }
        case SHOW_MODAL_EDIT_MOVIE :
            return {
                ...state,
                editMovie: {
                    ...state.editMovie,
                    isOpen: true
                }
            }
        case HIDE_MODAL_EDIT_MOVIE :
            return {
                ...state,
                editMovie: {
                    ...state.editMovie,
                    isOpen: false
                }
            }
        case SHOW_MODAL_DELETE_MOVIE :
            return {
                ...state,
                deleteMovie: {
                    ...state.deleteMovie,
                    isOpen: true
                }
            }
        case HIDE_MODAL_DELETE_MOVIE :
            return {
                ...state,
                deleteMovie: {
                    ...state.deleteMovie,
                    isOpen: false
                }
            }
        default:
            return state;
    }
}