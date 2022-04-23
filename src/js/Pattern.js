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

  toggleStitch = (e) => {
    const [y, x] = e.target.id.split('x');
    let newRow = new Map(this.state[y])
    newRow.set(parseInt(x), `${this.props.stitchType} ${this.props.stitchColor}`)
    if(this.props.mirrorMode) {
      // let mirrors = 1;
      // let mirrorPosition = column / mirrors;
      let maxX = this.props.dimensions[0];
      let mirrorX = maxX - x + 1;
      newRow.set(parseInt(mirrorX), `${this.props.stitchType} ${this.props.stitchColor}`)
    }
    this.setState({[y]: newRow});
  }

  createPattern = () => {
    let pattern = [];
    // let mirrors = 1;
    for (const row in this.state) {
      let rowContainer = [];
      for (const [column, stitch] of this.state[row]) {
        // let mirrorPosition = column / mirrors;
        // console.log(mirrorPosition)
        let patternStitch = React.createElement('article', { id: `${row}x${column}`, className: `stitch ${stitch}`, key: column, onClick: this.toggleStitch })
        rowContainer.push(patternStitch);
      }
      let patternRow = React.createElement('section', { className: `row ${row}`, key: row }, rowContainer)
      pattern.push(patternRow);
    }
    return pattern;
  }

  render() {
    let pattern = this.createPattern();

    return (
      <section className='pattern'>{pattern}</section>
    )
  }
}


export default Pattern;
