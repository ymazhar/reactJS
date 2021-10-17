import PropTypes from "prop-types";
import MoviesFilterItem from "../movies-filter-item";
import "./movies-filter.scss";

const MoviesFilter = ({filters, handleActiveFilter, active}) => {
  const results = filters.map((filter, index) => (
    <MoviesFilterItem key={index} filter={filter} active={active} />
  ));
  return <div className={"movies-filter"} onClick={handleActiveFilter}>{results}</div>;
};

MoviesFilter.propTypes = {
  filters: PropTypes.array,
  handleActiveFilter: PropTypes.func,
  active: PropTypes.string
}

MoviesFilter.defaultProps = {
  filters: [],
  handleActiveFilter: () => {},
  active: PropTypes.string
}

export default MoviesFilter;
