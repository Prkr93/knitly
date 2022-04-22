import React, { Component } from 'react';

class Pattern extends Component {
  constructor(props) {
    super();
    this.state = {}
  }

  componentDidMount() {
    const [thisX, thisY] = this.props.dimensions;
    for (let x = 1; x <= thisX; x++) {
      let row = new Map();
      for (let y = 1; y <= thisY; y++) {
        row.set(y, 'knit')
      }
      this.setState({[x]: row})
    }
  }

  render() {
    let pattern = [];
    for (const row in this.state) {
      let rowContainer = [];
      for (const [column, stitch] of this.state[row]) {
        let patternStitch = React.createElement('article', {className: `stitch ${stitch}`, key: column})
        rowContainer.push(patternStitch);
      }
      let patternRow = React.createElement('section', {className: `row ${row}`, key: row}, rowContainer)
      pattern.push(patternRow);
    }

    return (
      <section className='pattern'>{pattern}</section>
    )
  }
}


export default Pattern;
