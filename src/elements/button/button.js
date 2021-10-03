import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.scss";

const Button = ({ children, onClick, secondary, primary, className }) => {
  const classes = classNames('button', className, {
    "button-primary" : primary,
    "button-secondary" : secondary,
  })
  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultTypes = {
  children: '',
  onClick: () => {},
  secondary: false,
  primary: false,
  className: '',
};

export default Button;
