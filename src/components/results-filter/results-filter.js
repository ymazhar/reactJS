import ResultsFilterItem from "../results-filter-item";
import "./results-filter.scss";

const ResultsFilter = ({ items }) => {
  const results = items.map((item, index) => (
    <ResultsFilterItem key={index} {...item} />
  ));
  return <div className={"results-filter"}>{results}</div>;
};

export default ResultsFilter;
