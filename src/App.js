import React, { Component } from 'react';
import './css/style.css';
import Pattern from './js/Pattern';
import Form from './js/Form';
import SideBar from './js/SideBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dimensions: [],
      stitchType: 'purl',
      stitchColor: 'white',
      mirrorMode: false
    }
  }

  createPattern = (x, y) => {
    this.setState({dimensions: [x, y]});
  }

  setStitchType = (selectedType) => {
    this.setState({stitchType: selectedType});
  }

  setStitchColor = (color) => {
    this.setState({ stitchColor: color})
  }

  setMirrorMode = (bool) => {
    this.setState({mirrorMode: bool});
  }


  render() {
    return (
      <main>
        {!this.state.dimensions[0] && <Form createPattern={this.createPattern} />}

        {!!this.state.dimensions[0] && 
          <Pattern 
            dimensions={this.state.dimensions} 
            stitchType={this.state.stitchType} 
            stitchColor={this.state.stitchColor} 
            mirrorMode={this.state.mirrorMode}
          />}

        {!!this.state.dimensions[0] && 
          <SideBar 
            setStitchType={this.setStitchType} 
            setStitchColor={this.setStitchColor}
            setMirrorMode={this.setMirrorMode}
            rows={this.state.dimensions[0]}
            divAndConq={this.divAndConq}
          />}

      </main>
    )
  }
}

export default App;
