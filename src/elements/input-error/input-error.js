import './input-error.scss';
import PropTypes from "prop-types";
const InputError = ({error}) => <div className='input-error'>{error}</div>;

InputError.propTypes = {
    error: PropTypes.string
}
export default InputError;