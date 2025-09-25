import React from 'react';
export default class TimerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sec: 0 };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.id = setInterval(() => this.setState(s => ({ sec: s.sec + 1 })), 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.start !== this.props.start) {
      console.log('start prop changed:', this.props.start);
    }
  }
  componentWillUnmount() {
    clearInterval(this.id);
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return <div>경과: {this.state.sec}s</div>;
  }
}