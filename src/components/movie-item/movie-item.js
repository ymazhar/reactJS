import PropTypes from "prop-types";
import "./movie-item.scss";
import MovieActionBlock from "../movie-action-block";

const MovieItem = ({
                       image,
                       title,
                       releaseDate,
                       genre,
                       id,
                        onClick,
                       ...restProps
                   }) => {
    return (
        <div className="movie-item" id={id}>
            <div className={"movie-item__image"} onClick={onClick}>
                <img src={image.src} alt={image.alt}/>
            </div>
            <div className={"movie-item__content"}>
                <div className="movie-item__title">{title}</div>
                <div className="movie-item__release-date">{releaseDate}</div>
                <div className="movie-item__genre">{genre}</div>
            </div>
            <MovieActionBlock id={id} {...restProps} />
        </div>
    );
};

MovieItem.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    genre: PropTypes.string,
    id: PropTypes.string,
    movieActionBox: PropTypes.object,
    onClick: PropTypes.func,
    handleOpenModal: PropTypes.func,
    handleEditMovieClick: PropTypes.func,
    handleDeleteMovieClick: PropTypes.func,
};

MovieItem.defultProps = {
    image: {},
    title: '',
    releaseDate: '',
    genre: '',
    id: '',
    movieActionBox: {},
    onClick: () => {},
    handleEditMovieClick: () => {},
    handleDeleteMovieClick: () => {},
}

export default MovieItem;
