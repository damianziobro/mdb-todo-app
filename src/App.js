import React, { Component } from 'react';

import TodoList from './components/TodoList/TodoList';
import ControlButtons from './components/ControlButtons/ControlButtons';

import './App.css';

class App extends Component {

  state = {
    todos: []
  };

  handleAddBtnClick = (event) => {
    const todos = [...this.state.todos];
    const todoNumber = todos.length + 1;
    todos.push({
      body: `Task number ${todoNumber}`,
      id: todoNumber
    });
    this.setState({ todos });
  };

  handleRemoveBtnClick = (event) => {
    const todos = [...this.state.todos];
    todos.splice(-1, 1);
    this.setState({ todos });
  };

  handlClearBtnClick = (event) => {
    this.setState({ todos: [] });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <ControlButtons
          onAddBtnClick={this.handleAddBtnClick}
          onRemoveBtnClick={this.handleRemoveBtnClick}
          onClearBtnClick={this.handlClearBtnClick}
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
