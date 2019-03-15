import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    text: '',
  };

  handleChange(event) {
    // event.persist()
    this.setState({
      text: event.target.value
    });
  };

  // handleChange = (event) => {
  //   this.setState({
  //     text: event.target.value
  //   });
  // };

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addTodo(this.state)
  }

  render() {
    // debugger
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addTodo: formdata => ({type: 'ADD_TODO', payload: formdata})})(CreateTodo);
