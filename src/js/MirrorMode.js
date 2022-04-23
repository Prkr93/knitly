import { Component } from 'react';

class MirrorMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mirrorMode: false,
      mirrors: 1
    }
  }

  toggleMirrorMode = () => {
    let bool = this.state.mirrorMode ? false : true;
    this.setState({mirrorMode: bool });
    this.props.setMirrorMode(bool);
  }

  updateMirrors = (e) => {
    let numMirrors = e.target.value;
    this.setState({ mirrors: numMirrors });
    this.props.divAndConq(numMirrors);
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
          onClick={ this.updateMirrors } /> 
      </article>
    )
  }
}

export default MirrorMode;