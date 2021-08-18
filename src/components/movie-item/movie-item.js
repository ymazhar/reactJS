import PropTypes from "prop-types";
import classNames from "classnames";
import "./movie-item.scss";
import MovieActionBlock from "../movie-action-block";

const MovieItem = ({
  image,
  title,
  releaseDate,
  genre,
  id,
  movieActionBox,
  onClick,
}) => {
  const classes = classNames(`movie-item`, {
    show: movieActionBox.isVisible && movieActionBox.activeId === id,
  });
  return (
    <div className={classes} id={id} onClick={onClick}>
      <div className={"movie-item__image"}>
        <img src={image.src} alt={image.alt} />
      </div>
      <div className={"movie-item__content"}>
        <div className="movie-item__title">{title}</div>
        <div className="movie-item__release-date">{releaseDate}</div>
        <div className="movie-item__genre">{genre}</div>
      </div>
      <MovieActionBlock />
    </div>
  );
};

MovieItem.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.string,
};

export default MovieItem;
