import PropTypes from "prop-types";
import "./form-control.scss";

const FormControl = ({ children }) => (
  <div className="form-control">{children}</div>
);

FormControl.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}
FormControl.defaultProps = {
    children: {}
}

export default FormControl;
