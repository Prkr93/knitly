import React, { Component } from 'react';


class Pattern extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const [thisX, thisY] = this.props.dimensions.split('x');
    for (let x = 1; x <= thisX; x++) {
      let row = new Map();
      for (let y = 1; y <= thisY; y++) {
        row.set(y, 'knit')
      }
      this.setState({[x]: row})
    }
  }

  getMatchingStitch = () => {
    const legend = {
      knit: 'knit',
      purl: 'purl',
      k2tog: 'ssk',
      ssk: 'k2tog',
      yo: 'yo'
    }
    return legend[this.props.stitchType];
  }

  mirrorStitch = (newRow, x) => {
    let dimensions = this.props.dimensions.split('x');
    let numRows = parseInt(dimensions[0]);
    let mirrorX = numRows - x + 1;
    let stitchType = this.getMatchingStitch();
    newRow.set(parseInt(mirrorX), `${stitchType} ${this.props.stitchColor}`);
  }

  toggleStitch = (e) => {
    let [y, x] = e.target.id.split('x');
    x = parseInt(x);
    y = parseInt(y);
    let newRow = new Map(this.state[y])
    newRow.set(parseInt(x), `${this.props.stitchType} ${this.props.stitchColor}`)
    if(this.props.mirrorMode) {
      console.log(newRow, x)
      this.mirrorStitch(newRow, x);
    }
    this.setState({[y]: newRow});
  }

  createPattern = () => {
    let pattern = [];
    for (const row in this.state) {
      let rowContainer = [];
      for (const [column, stitch] of this.state[row]) {
        let patternStitch = React.createElement('article', { id: `${row}x${column}`, className: `stitch ${stitch}`, key: column, onClick: this.toggleStitch })
        rowContainer.push(patternStitch);
      }
      let patternRow = React.createElement('section', { className: `row ${row}`, key: row }, rowContainer)
      pattern.push(patternRow);
    }
    return pattern;
  }

  savePattern = () => {
    let pattern = {};
    for (const row in this.state) {
      let stitches = [];
      for (const [column, stitch] of this.state[row]) {
        stitches.push(stitch);
      }
      pattern = {...pattern, [`'${row}'`]: [...stitches]}
    }
    this.props.addInspiration(pattern);
  }

  render() {
    let pattern = this.createPattern();

    return (
      <section className='pattern-container'>
        <h3>Mirror Mode: {this.props.mirrorMode ? 'ON' : 'OFF'}</h3>
        <section className='pattern'>{pattern}</section>
        <button className='save-pattern' onClick={this.savePattern}>Save Pattern</button>
      </section>
    )
  }
}


export default Pattern;
