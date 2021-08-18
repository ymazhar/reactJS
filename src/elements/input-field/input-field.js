import PropTypes from "prop-types";
import classNames from "classnames";
import "./input-field.scss";

const InputField = ({ id, className, onChange, ...attrs }) => {
  const classes = classNames(`input-field`, className);
  return <input id={id} className={classes} onChange={onChange} {...attrs} />;
};

InputField.proptypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  className: "",
  onChange: () => {},
};

export default InputField;
