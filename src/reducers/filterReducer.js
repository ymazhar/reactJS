import {
    SET_ACTIVE_FILTER,
    SORT_BY
} from "../actions/types";

const initialState = {
    filters: ["All", "Documentary", "Comedy", "Horror", "Crime"],
    active: "All",
    sortBy: "release_date"
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_FILTER: {
            return {
                ...state,
                active: action.payload
            }
        }
        case SORT_BY: {
            return {
                ...state,
                sortBy: action.payload
            }
        }
        default:
            return state;
    }
}