import React, { Component } from 'react';

import TodoList from './components/TodoList/TodoList';

import './App.css';

class App extends Component {

  state = {
    todos: []
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
