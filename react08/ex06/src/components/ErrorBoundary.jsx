import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    if (this.props.onReport) {
      try { this.props.onReport({ error, info, componentStack: info.componentStack }); } catch (e) {}
    }
  }

  reset = () => this.setState({ hasError: false, error: null, info: null });

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{ padding: 20 }}>
          <h2>문제가 발생했습니다.</h2>
          <p>일시적인 문제일 수 있습니다. 새로고침하거나 아래 버튼을 눌러보세요.</p>
          <button onClick={() => window.location.reload()}>전체 새로고침</button>
          <button onClick={this.reset} style={{ marginLeft: 8 }}>이 섹션만 재시도</button>
        </div>
      );
    }
    return this.props.children;
  }
}
