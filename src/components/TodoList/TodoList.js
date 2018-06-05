import React from 'react';

import Todo from '../Todo/Todo';

import './TodoList.css';

function TodoList({ todos }) {
    return (
        <ul className="todo-list">
            {todos.map( (todo, id) => <Todo key={id} todo={todo} />)}
        </ul>
        );
}

export default TodoList;