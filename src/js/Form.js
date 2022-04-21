import {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  createGrid = (e) => {
    e.preventDefault();
    this.props.createPattern(parseInt(this.state.x), parseInt(this.state.y))
  }

  render() {
    return (
      <form onSubmit={this.createGrid}>
        <h2>What dimensions would you like for your pattern?</h2>
        <div className='label-input x-val'>
          <label>X-Value: </label>
          <input className='x-val' name='x' val={this.state.x} onChange={this.handleChange} />
        </div>
        <div className='label-input y-val'>
          <label>Y-Value: </label>
          <input className='y-val' name='y' val={this.state.y} onChange={this.handleChange} />
        </div>
        <button>Create Pattern</button>
      </form>
    )
  }
}

export default Form;
