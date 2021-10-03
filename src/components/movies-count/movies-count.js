import PropTypes from "prop-types";
import "./movies-count.scss";

const MoviesCount = ({ count }) => (
  <div className={"movies-count"}>
    <span className={"movies-count__num"}>{count}</span> movies found
  </div>
);

MoviesCount.propTypes = {
  count: PropTypes.number,
};

export default MoviesCount;
