import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './css/style.css';
import Pattern from './js/Pattern';
import Form from './js/Form';
import SideBar from './js/SideBar';
import {servePattern, serveInspiration} from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    this.setState({ stitchColor: color});
  }

  setMirrorMode = (bool) => {
    this.setState({mirrorMode: bool});
  }

  addInspiration = (pattern) => {
    servePattern(pattern);
  }


  render() {
    return (
      <main>
        <Switch>
          <Route exact path={'/create'} render={() => {
            return (
              <Form createPattern={this.createPattern} />
            )
          }} />

          <Route path={'/create/:dimensions'} render={({match}) => {
            let dimensions = match.params.dimensions;
            let [x, y] = dimensions.split('x');
            if (x == '0' || y == '0') {
              return (<Redirect to={'/create'} />)
            }
            return (
              <section>
                <Pattern
                  stitchType={this.state.stitchType}
                  stitchColor={this.state.stitchColor}
                  mirrorMode={this.state.mirrorMode}
                  dimensions={match.params.dimensions}
                  postPattern={this.postPattern}
                  addInspiration={this.addInspiration}
                />
                <SideBar
                  setStitchType={this.setStitchType}
                  setStitchColor={this.setStitchColor}
                  setMirrorMode={this.setMirrorMode}
                  divAndConq={this.divAndConq}
                />
              </section>
            )
          }} />


        </Switch>
      </main>
    )
  }
}

export default App;
