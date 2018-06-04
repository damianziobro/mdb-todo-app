import React, { Component } from 'react';

import TodoList from './components/TodoList/TodoList';
import ControlButtons from './components/ControlButtons/ControlButtons';

import './App.css';

class App extends Component {

  state = {
    todos: []
  };

  handleAddBtnClick = (event) => {
  };

  handleRemoveBtnClick = (event) => {
  };

  handlClearBtnClick = (event) => {
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
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
