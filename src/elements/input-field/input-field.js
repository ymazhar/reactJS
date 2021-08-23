import PropTypes from "prop-types";
import classNames from "classnames";
import "./input-field.scss";

const InputField = (props) => {
  const { id, className, onChange, ...attrs } = props;
  const classes = classNames(`input-field`, className);
  return <input id={id} className={classes} onChange={onChange} {...attrs} />;
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  id: 'inputField',
  className: "",
  onChange: () => {},
};

export default InputField;
