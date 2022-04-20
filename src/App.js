// import logo from './logo.svg';
import React, { Component } from 'react';
import './css/style.css';
import Pattern from './js/Pattern';
import Form from './js/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0
    }
  }

  createPattern = (x, y) => {
    console.log('woot')
    this.setState({x: x, y: y});
  }

  render() {
    let pattern = this.state.x.length ? [this.state.x, this.state.y] : '';

    return (
      <main>
        <Form createPattern={this.createPattern} />
        <Pattern pattern={pattern} />
      </main>
    )
  }
}

export default App;
