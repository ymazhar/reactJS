import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./input-field.scss"

const InputField = ({id, className, label, ...attrs}) => {
    const classes = classNames(
        `input-field`, className
    )
    return (
        <div className={"input-field-wrapper"}>
            {label &&
            <label className={"input-field-label"} htmlFor={id}>{label}</label>
            }
            <input id={id} className={classes} {...attrs} />
        </div>
    )
}

InputField.prototypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string
}

InputField.defaultProps = {
    className: '',
}

export default InputField;

