import React, { Component } from 'react';

class Pattern extends Component {
  constructor({pattern}) {
    super();
    [this.x, this.y] = pattern;
    this.state = {}
  }

  componentDidMount() {
    for (let x = 1; x <= this.x; x++) {
      let row = new Map();
      for (let y = 1; y <= this.y; y++) {
        row.set(y, 'purl')
      }
      this.setState({[`row-${x}`]: row})
    }
  }

  render() {
    let pattern = [];
    for (const row in this.state) {
      let rowContainer = [];
      for (const [ , stitch] of this.state[row]) {
        let patternStitch = React.createElement('article', {className: `stitch ${stitch}`}, 'hello')
        rowContainer.push(patternStitch);
      }
      let patternRow = React.createElement('section', {className: `row ${row}`}, rowContainer)
      pattern.push(patternRow);
    }

    return (
      <section className='pattern'>{pattern}</section>
    )
  }
}


export default Pattern;
