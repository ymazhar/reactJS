import React from "react";
import PropTypes from "prop-types";
import "./movie-item.scss";

const MovieItem = ({image, title, releaseDate, genre}) => {
    return(
        <div className={"movie-item"}>
            <div className={"movie-item__image"}>
                <img src={image.src} alt={image.alt}/>
                <div className="movie-item__dots" />
            </div>
            <div className={"movie-item__content"}>
                <div className="movie-item__title">{title}</div>
                <div className="movie-item__release-date">{releaseDate}</div>
                <div className="movie-item__genre">{genre}</div>
            </div>
        </div>
    )
}

MovieItem.prototypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    genre: PropTypes.string
}

export default MovieItem;