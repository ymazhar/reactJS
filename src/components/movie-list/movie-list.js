import MovieItem from "../movie-item";
import "./movie-list.scss";
import PropTypes from "prop-types";
import {useMemo} from "react";

const MovieList = ({ movies, onClick, ...restProps }) => {
  const list = useMemo(() => movies.map((movie) => {
    return (
        <MovieItem
            key={movie.id}
            id={movie.id}
            onClick={onClick}
            {...movie}
            {...restProps}
        />
    )
  }),[movies]);
  return <div className={"movie-list"}>{list}</div>;
};

MovieList.propTypes = {
  movies: PropTypes.array,
  onClick: PropTypes.func,
};

MovieList.defaultProps = {
  movies: [],
  onClick: () => {},
};
export default MovieList;
