import PropTypes from "prop-types";
import "./movie-item.scss";
import MovieActionBlock from "../movie-action-block";

const MovieItem = ({
                       poster_path,
                       title,
                       release_date,
                       genres,
                       id,
                        onClick,
                       ...restProps
                   }) => {
    return (
            <div className="movie-item" id={id}>
                <div className={"movie-item__image"} onClick={() => onClick(id)}>
                    <picture>
                        <source srcSet={poster_path} />
                        <img src='https://via.placeholder.com/328x458' alt={title}/>
                    </picture>
                </div>
                <div className={"movie-item__content"}>
                    <div className="movie-item__title">{title}</div>
                    <div className="movie-item__release-date">{release_date}</div>
                    <div className="movie-item__genre">{genres}</div>
                </div>
                <MovieActionBlock id={id} {...restProps} />
            </div>
    );
};

MovieItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    id: PropTypes.number,
    movieActionBox: PropTypes.object,
    onClick: PropTypes.func,
    handleOpenModal: PropTypes.func,
    handleEditMovieClick: PropTypes.func,
    handleDeleteMovieClick: PropTypes.func,
};

MovieItem.defultProps = {
    poster_path: '',
    title: '',
    release_date: '',
    genres: [],
    id: null,
    movieActionBox: {},
    onClick: () => {},
    handleEditMovieClick: () => {},
    handleDeleteMovieClick: () => {},
}

export default MovieItem;
