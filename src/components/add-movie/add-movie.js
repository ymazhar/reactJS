import "./add-movie.scss";
import PropTypes from "prop-types";

const AddMovie = ({ onClick }) => (
  <a
    href={"/"}
    className={"add-movie-link"}
    onClick={onClick}
    data-modal-id="addMovie"
  >
    add movie
  </a>
);

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;
