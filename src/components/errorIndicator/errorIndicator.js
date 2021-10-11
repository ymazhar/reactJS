import './errorIndicator.scss';
import {errorSelector} from "../../selectors/movieSelectors";

const ErrorIndicator = () => <div className="error-indicator">{errorSelector()}</div>;

export default ErrorIndicator;