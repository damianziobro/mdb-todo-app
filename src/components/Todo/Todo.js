import React from 'react';

import './Todo.css';

function Todo({ todo }) {
    return <li className="todo">{todo}</li>;
}

export default Todo;