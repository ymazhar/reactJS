import React from "react";
import SelectField from "../select-field";
import "./results-sort.scss";

const ResultsSort = () => {
    return(
        <div className={"result-sort"}>
            <span className={"result-sort__title"}>Sort by</span>
            <SelectField/>
        </div>
    )
}

export default ResultsSort;