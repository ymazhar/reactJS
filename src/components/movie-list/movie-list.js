import MovieItem from "../movie-item";
import "./movie-list.scss";
import PropTypes from "prop-types";

const MovieList = ({ movies, movieActionBox, onClick }) => {
  const list = movies.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      {...movie}
      movieActionBox={movieActionBox}
      onClick={onClick}
    />
  ));
  return <div className={"movie-list"}>{list}</div>;
};

MovieList.proptypes = {
  movies: PropTypes.array,
  movieActionBox: PropTypes.object,
  onClick: PropTypes.func,
};

MovieList.defaultProps = {
  movies: [],
  movieActionBox: {},
  onClick: () => {},
};
export default MovieList;
