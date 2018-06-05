import React from 'react';

import Todo from '../Todo/Todo';

import './TodoList.css';

function TodoList({ todos }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => <Todo key={todo.id} body={todo.body} />)}
        </ul>
        );
}

export default TodoList;