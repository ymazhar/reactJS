import PropTypes from "prop-types";
import "./result-count.scss";

const ResultCount = ({ count }) => (
  <div className={"result-count"}>
    <span className={"result-count__num"}>{count}</span> movies found
  </div>
);

ResultCount.propTypes = {
  count: PropTypes.number,
};

export default ResultCount;
