import {useSelector} from "react-redux";

export const getAddModalSelector = () => useSelector(({modal: {addMovie}}) => addMovie);
export const getEditModalSelector = () => useSelector(({modal: {editMovie}}) => editMovie);
export const getDeleteModalSelector = () => useSelector(({modal: {deleteMovie}}) => deleteMovie);