import React from 'react';

import './Todo.css';

function Todo({ body }) {
    return <li className="todo">{body}</li>;
}

export default Todo;