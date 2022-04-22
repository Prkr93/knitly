// import logo from './logo.svg';
import React, { Component } from 'react';
import './css/style.css';
import Pattern from './js/Pattern';
import Form from './js/Form';
import SideBar from './js/SideBar';

class App extends Component {
  constructor() {
    super();
    this.createPattern = this.createPattern.bind(this);
    this.state = {
      dimensions: [],
      stitchType: 'purl',
      backgroundColor: ''
    }
  }

  createPattern = (x, y) => {
    this.setState({dimensions: [x, y]});
  }

  setStitchType = (selectedType) => {
    this.setState({stitchType: selectedType});
  }

  render() {
    return (
      <main>
        {!this.state.dimensions[0] && <Form createPattern={this.createPattern} />}
        {!!this.state.dimensions[0] && <Pattern dimensions={this.state.dimensions} stitchType={this.state.stitchType} backgroundColor={this.state.backgroundColor} />}
        {!!this.state.dimensions[0] && <SideBar setStitchType={this.setStitchType} />}
      </main>
    )
  }
}

export default App;
