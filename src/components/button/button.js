import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = ({children, onClick, inverted}) => {
    return(
        <button className={`button button--primary ${inverted ? "button--inverted" : ""}`}
                onClick={onClick}>{children}</button>
    )
};

Button.prototypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    inverted: PropTypes.bool
}

Button.defaultTypes = {
    children: "Button",
    onClick: () => {
    },
    inverted: false
}

export default Button;