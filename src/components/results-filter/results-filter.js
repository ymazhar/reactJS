import PropTypes from "prop-types";
import ResultsFilterItem from "../results-filter-item";
import "./results-filter.scss";

const ResultsFilter = ({ items }) => {
  const results = items.map((item, index) => (
    <ResultsFilterItem key={index} {...item} />
  ));
  return <div className={"results-filter"}>{results}</div>;
};

ResultsFilter.propTypes = {
  items: PropTypes.array
}

ResultsFilter.defaultProps = {
  items: []
}

export default ResultsFilter;
