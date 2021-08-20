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

export default ResultsFilterItem;
