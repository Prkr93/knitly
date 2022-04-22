import { Component } from 'react';

class MirrorMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mirrorMode: false
    }
  }

  toggleMirrorMode = () => {
    this.setState({mirrorMode: this.state.mirrorMode ? false : true});
    this.props.setMirrorMode(this.state.mirrorMode);
  }

  render() {
    console.log('mirrormode proprs', this.props.dimensions)
    return (
      <article>
        <h2>Mirror Mode</h2>
        <button onClick={this.toggleMirrorMode}>
          <div className='on'>ON</div>
          <div className='off'>OFF</div>
        </button>
      </article>
    )
  }
}

export default MirrorMode;