import React from "react";
import "./results-container.scss";
import ResultsFilter from "../../components/results-filter";
import ResultsSort from "../../components/results-sort";
import ResultCount from "../../components/result-count";

const ResultsContainer = ({mokeResultsFilter, movies}) => {
    return(
        <div className={"results-container"}>
            <div className="results-container__row results-container__row--filter">
                <ResultsFilter items={mokeResultsFilter} />
                <ResultsSort/>
            </div>
            <div className="results-container__row">
                <ResultCount count={movies.length}/>
            </div>
        </div>
    )
}

export default ResultsContainer;