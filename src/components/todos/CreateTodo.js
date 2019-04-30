import React, { Component } from 'react'

class CreateTodo extends Component {
  render() {
    return(
      <div>
        Create Todo Component
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch(<some action>)
  }
}

export default CreateTodo;
