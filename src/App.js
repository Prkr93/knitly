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
    return (
      <main>
        {!this.state.x && <Form createPattern={this.createPattern} />}
        {!!this.state.x && <Pattern pattern={[this.state.x, this.state.y]} />}
      </main>
    )
  }
}

export default App;
