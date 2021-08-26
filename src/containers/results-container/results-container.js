import PropTypes from "prop-types";
import "./results-container.scss";
import ResultsFilter from "../../components/results-filter";
import ResultsSort from "../../components/results-sort";
import ResultCount from "../../components/result-count";

const ResultsContainer = ({filters}) => {

    return (
        <div className={"results-container"}>
            <div className="results-container__row results-container__row--filter">
                <ResultsFilter items={filters}/>
                <ResultsSort/>
            </div>
            <div className="results-container__row">
                <ResultCount />
            </div>
        </div>
    );
};

ResultsContainer.propTypes = {
    filters: PropTypes.array,
}

ResultsContainer.defaultProps = {
    filters: [],
}

export default ResultsContainer;
