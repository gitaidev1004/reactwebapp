import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Captured error', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{ padding: 24 }}>
          <h2>문제가 발생했습니다</h2>
          <p>잠시 후 다시 시도해 주세요.</p>
          <button onClick={() => window.location.reload()}>새로고침</button>
        </div>
      );
    }
    return this.props.children;
  }
}
