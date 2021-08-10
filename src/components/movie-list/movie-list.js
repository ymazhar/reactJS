import React from "react";
import MovieItem from "../movie-item";
import "./movie-list.scss";

const MovieList = ({movies}) => {
    const list = movies.map((movie, index) => <MovieItem key={index} {...movie} />);
    return (
        <div className={"movie-list"}>
            {list}
        </div>
    )
}
export default MovieList;