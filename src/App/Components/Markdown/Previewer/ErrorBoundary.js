import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <p>Error occurs</p>
          {/* <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details> */}
          <button
            onClick={() => {
              window.location.reload();
            }}
            style={{
              background: "none",
              padding: "5px",
              borderRadius: "5px",
              boxShadow:"1px 1px 1px grey",
              outline: "none",
              cursor: "pointer"
            }}
          >
            Reload This Page
          </button>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
export default ErrorBoundary;
