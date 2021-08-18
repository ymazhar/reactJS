import { Component } from "react";

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

export default ErrorBoundary;
