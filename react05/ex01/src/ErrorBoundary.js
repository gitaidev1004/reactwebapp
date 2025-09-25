import React from "react";
export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? (
      <p>문제가 발생했습니다.</p>
    ) : (
      this.props.children
    );
  }
}