import React from "react";
import PropTypes from "prop-types";
import "./input-field.scss"

const InputField = ({placeholder, className = ''}) => <input type={"text"} placeholder={placeholder} className={`input-field ${className}`}/>

InputField.prototypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string
}


export default InputField;

