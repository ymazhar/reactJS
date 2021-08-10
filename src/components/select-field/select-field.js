import React from "react";
import "./select-field.scss"

const SelectField = () => {
    return(
        <div className={"select-field"}>
            <select value={"Release Date"} onChange={()=>""} >
                <option value="1">Release Date</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>

    )
}


export default SelectField;

