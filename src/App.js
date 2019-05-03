import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
         <ul>
          {todos}
         </ul>
      </div>
    );
  }
}

export default App;
