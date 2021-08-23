import PropTypes from "prop-types";
import "./label.scss";

const Label = ({ id, children }) => (
  <label className={"label"} htmlFor={id}>
    {children}
  </label>
);

Label.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

Label.defaultProps = {
  id: "",
  children: {}
}

export default Label;
