import "./add-movie.scss";

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

export default AddMovie;
