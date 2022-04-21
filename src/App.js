// import logo from './logo.svg';
import React, { Component } from 'react';
import './css/style.css';
import Pattern from './js/Pattern';
import Form from './js/Form';

class App extends Component {
  constructor() {
    super();
    this.createPattern = this.createPattern.bind(this);
    this.state = {
      dimensions: []
    }
  }

  createPattern = (x, y) => {
    this.setState({dimensions: [x, y]});
  }

  render() {
    return (
      <main>
        {!this.state.dimensions[0] && <Form createPattern={this.createPattern} />}
        {!!this.state.dimensions[0] && <Pattern dimensions={this.state.dimensions} />}
      </main>
    )
  }
}

export default App;
