import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 }; 
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="task-card">
        <h2>Interactive Counter</h2>
        <p>Current Count: <strong>{this.state.count}</strong></p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


export default Counter;