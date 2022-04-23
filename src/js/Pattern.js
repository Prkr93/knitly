import React, { Component } from 'react';

class Pattern extends Component {
  constructor(props) {
    //console.log(props.match.params)
    //this.props.dimensions = props.match.params;
    super(props);
    console.log(props)
    this.state = {}
  }

  // componentDidMount() {
  // }

  // render () {
  //   return (
  //     <div>hello</div>
  //   )
  // }

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
    }
    return legend[this.props.stitchType];
  }

  mirrorStitch = (newRow, x) => {
    let maxX = this.props.dimensions[0];
    let mirrorX = maxX - x + 1;
    let stitchType = this.getMatchingStitch();
    newRow.set(parseInt(mirrorX), `${stitchType} ${this.props.stitchColor}`);
  }

  toggleStitch = (e) => {
    const [y, x] = e.target.id.split('x');
    let newRow = new Map(this.state[y])
    newRow.set(parseInt(x), `${this.props.stitchType} ${this.props.stitchColor}`)
    if(this.props.mirrorMode) {
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

  render() {
    let pattern = this.createPattern();

    return (
      <section className='pattern'>{pattern}</section>
    )
  }
}


export default Pattern;
