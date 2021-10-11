import {SET_ACTIVE_FILTER, SORT_BY} from './types';
const setActiveFilter = (active) => ({type: SET_ACTIVE_FILTER, payload: active});
const setSortByFilter = (active) => ({type: SORT_BY, payload: active});

export {setActiveFilter, setSortByFilter}