import PropTypes from "prop-types";
import "./movies-filter-item.scss";
import classNames from "classnames";

const MoviesFilterItem = ({filter, active}) => {
    const classes = classNames('movies-filter-item', {
        'movies-filter-item--active': filter.toLowerCase() === active.toLowerCase()
    });
  return (
      <button className={classes} value={filter}>{filter}</button>
  );
};

MoviesFilterItem.propTypes = {
    filter: PropTypes.string,
    active: PropTypes.string
}

MoviesFilterItem.defaultProps = {
    filter: '',
    active: ''
}

export default MoviesFilterItem;
