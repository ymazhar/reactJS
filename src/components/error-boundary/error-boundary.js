import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null, hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    const oops = () => {
      return (
        <div className="oops">
          <h2>Oops, something went wrong...</h2>
        </div>
      );
    };
    return <>{hasError ? oops() : children}</>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

ErrorBoundary.defaultProps = {
  children: {},
};

export default ErrorBoundary;
