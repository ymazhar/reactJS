import PropTypes from "prop-types";
import "./results-filter-item.scss";

const ResultsFilterItem = ({ title, link, active }) => {
  return (
    <a
      href={link}
      className={`results-filter-item ${
        active ? "results-filter-item--active" : ""
      }`}
    >
      {title}
    </a>
  );
};

ResultsFilterItem.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    active: PropTypes.bool,
}

ResultsFilterItem.defaultProps = {
    title: '',
    link: '',
    active: false,
}

export default ResultsFilterItem;
