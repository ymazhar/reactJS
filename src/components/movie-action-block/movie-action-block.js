import "./movie-action-block.scss";

const MovieActionBlock = () => {
  return (
    <div className="movie-action-block">
      <div className="movie-action-block__dots" data-movie-action="show" />
      <div className="movie-action-block__holder">
        <div className="movie-action-block__close" data-movie-action="close" />
        <ul className="movie-action-list">
          <li className="movie-action-list__item" data-movie-action="edit">
            Edit
          </li>
          <li className="movie-action-list__item" data-movie-action="delete">
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieActionBlock;
