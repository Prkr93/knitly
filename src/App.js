import React, { Component } from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom';
import './css/style.css';
import Pattern from './js/Pattern';
import Form from './js/Form';
import SideBar from './js/SideBar';
import Inspirations from './js/Inspirations';
import {servePattern, serveInspiration} from './apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stitchType: 'purl',
      stitchColor: 'white',
      mirrorMode: false,
      inspirations: []
    }
  }

  // componendDidUpdate() {
  //   this.getInspired();
  // }

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

  getInspired = () => {
    serveInspiration().then(patterns => this.setInspo(patterns));
  }

  setInspo = (patterns) => {
    this.setState({inspirations: patterns})
  }


  render() {
    return (
      <main>
        <header>
          <NavLink to={'/inspirations'}>Get Inspired</NavLink>
        </header>
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

          <Route path={'/inspirations'} render={() => {
            return (
              <Inspirations
                inspirations={this.state.inspirations}
                getInspired={this.getInspired}
              />
            )
          }} />

          <Route default render={() => {
            return <Redirect to={'/create'} />
          }}/>

        </Switch>
      </main>
    )
  }
}

export default App;
