import React, { Component } from 'react';

class Pattern extends Component {
  constructor() {
    super();
    this.state = {
      pattern: {
        
      }
    }
  }

  componentDidMount() {
    
  }

  render() {
    const stitches = Object.keys(this.state.pattern);
    const pattern = stitches.map(stitch => {
      return (
        <div className={stitch} key={stitch}></div>
      )
    });
    return (
      <div>{ pattern }</div>
    )

  }
}


export default Pattern;
