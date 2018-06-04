import React from 'react';

import Todo from '../Todo/Todo';

function TodoList({ todos }) {
    return todos.map( todo => <Todo todo={todo} />);
}

export default TodoList;