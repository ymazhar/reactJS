import './errorIndicator.scss';
import {useSelector} from "react-redux";

const ErrorIndicator = () => {
    const error = useSelector(({error}) => error);
    return (
        <div className="error-indicator">{error}</div>
    )
}

export default ErrorIndicator;