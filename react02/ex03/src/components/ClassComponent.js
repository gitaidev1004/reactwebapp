import React, { Component } from 'react';
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { name } = this.props;
    return (
      <div style={styles.container}>
        <h2>클래스형 컴포넌트</h2>
        <p>안녕하세요, {name}!</p>
        <p>클릭 횟수: {this.state.count}</p>
        <button onClick={this.handleClick}>+1 증가</button>
      </div>
    );
  }
}
const styles = {
  container: {
    border: '1px solid #e67e22',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: '#fff4e6'
  }
};
export default ClassComponent;