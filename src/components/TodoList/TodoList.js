import React from 'react';

import Todo from '../Todo/Todo';

function TodoList({ todos }) {
    return todos.map( (todo, id) => <Todo key={id} todo={todo} />);
}

export default TodoList;