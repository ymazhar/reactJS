import "./add-movie.scss";
import PropTypes from "prop-types";

const AddMovie = ({ onClick }) => (
  <button
    className={"add-movie-link"}
    onClick={onClick}
    data-modal-id="addMovie"
  >
    add movie
  </button>
);

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;
