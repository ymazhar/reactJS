import React from "react";
import "./add-movie.scss";

const AddMovie = ({onClick}) => {

    return (
        <a href={"/"} className={"add-movie-link"} onClick={onClick}>add movie</a>
    )
}

export default AddMovie;