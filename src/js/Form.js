import {Component} from 'react';
import {Link} from 'react-router-dom';

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
  }

  render() {
    return (
      <form onSubmit={(e) => this.createGrid(e)}>
        <h2>What dimensions would you like for your pattern?</h2>

        <div className='label-input x-val'>
          <label>Rows</label>
          <input className='x-val' name='x' val={this.state.x} onChange={this.handleChange} />
        </div>

        <div className='label-input y-val'>
          <label>Columns</label>
          <input className='y-val' name='y' val={this.state.y} onChange={this.handleChange} />
        </div>

        <Link to={`/create/${this.state.x}x${this.state.y}`}>
          <button>Create Pattern!</button>
        </Link>
      </form>
    )
  }
}

export default Form;
