import {useSelector} from "react-redux";

export const getFiltersSelector = () => useSelector(({filter: {filters}}) => filters);
export const getSortByFilterSelector = () => useSelector(({filter: {sortBy}}) => sortBy);
export const getActiveFilterSelector = () => useSelector(({filter: {active}}) => active);