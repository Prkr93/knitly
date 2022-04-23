import { Component } from 'react';

class MirrorMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mirrorMode: false,
      mirrors: 0
    }
  }

  toggleMirrorMode = () => {
    this.setState({mirrorMode: this.state.mirrorMode ? false : true});
    this.props.setMirrorMode(this.state.mirrorMode);

  }

  render() {
    return (
      <article>
        <h2>Mirror Mode</h2>
        <button onClick={this.toggleMirrorMode}>
          <div className='on'>ON</div>
          <div className='off'>OFF</div>
        </button>
        <input 
          type='number' 
          disabled={!this.state.mirrorMode} 
          placeholder={this.state.mirrors} 
          min={1} 
          max={this.props.rows / 2} 
          onClick={(e) => { this.setState({ mirrors: e.target.value})}} />
      </article>
    )
  }
}

export default MirrorMode;