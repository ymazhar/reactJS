import "./movie-action-block.scss";
import classNames from "classnames";
import {useRef, useState} from "react";
import PropTypes from 'prop-types';
import useOnClickOutside from "../../hooks/clickOutside";

const MovieActionBlock = ({id, handleEditMovieClick, handleDeleteMovieClick}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    const classes = classNames(`movie-action-block`, {
        show: isVisible,
    });

    const handleDotsClick = () => {
        setIsVisible(!isVisible);
    }

    useOnClickOutside(ref, () => setIsVisible(false));

    return (
    <div className={classes} ref={ref}>
      <div className="movie-action-block__dots" onClick={handleDotsClick} />
      <div className="movie-action-block__holder">
        <div className="movie-action-block__close" onClick={handleDotsClick} />
        <ul className="movie-action-list">
          <li className="movie-action-list__item" onClick={() => handleEditMovieClick(id)}>
            Edit
          </li>
          <li className="movie-action-list__item" onClick={() => handleDeleteMovieClick(id)}>
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
};

MovieActionBlock.propTypes = {
    id: PropTypes.string,
    handleEditMovieClick: PropTypes.func,
    handleDeleteMovieClick: PropTypes.func,
}

MovieActionBlock.defaultProps = {
    id: '',
    handleEditMovieClick: () => {},
    handleDeleteMovieClick: () => {},
}


export default MovieActionBlock;
