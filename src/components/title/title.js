import React from "react";
import PropTypes from "prop-types";

import "./title.scss";

const Title = ({text}) => <h1 className={"h1"}>{text}</h1>

Title.prototypes = {
    text: PropTypes.string
}

export default Title;