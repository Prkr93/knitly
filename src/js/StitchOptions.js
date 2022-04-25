import { Component } from 'react';

class StitchOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '',
      stitchOption: ''
    }
  }

  setActiveStitchType = (e) => {
    let type = e.target.classList[1];
    console.log(type)
    this.setState({stitchOption: type})
    this.props.setStitchType(type)
  }

  setActiveColor = (e) => {
    let color = e.target.classList[1];
    this.setState({backgroundColor: color});
    this.props.setStitchColor(color);
  }

  render() {
    return (
      <div>
        <section onClick={this.setActiveStitchType} className='stitch-types' >
          <h2>Stitch Type:</h2>
          <div className='row'>
            <article className='stitch knit'></article>
            <article className='stitch purl'></article>
            <article className='stitch k2tog'></article>
            <article className='stitch ssk'></article>
            <article className='stitch yo'></article>
          </div>
        </section>
        <section onClick={this.setActiveColor} className='stitch-colors' >
          <h2>Background Color:</h2>
          <div className='row'>
            <article className='stitch red'></article>
            <article className='stitch orange'></article>
            <article className='stitch yellow'></article>
            <article className='stitch green'></article>
            <article className='stitch blue'></article>
            <article className='stitch indigo'></article>
            <article className='stitch violet'></article>
          </div>
        </section>
      </div>
    )
  }
}

export default StitchOptions;
