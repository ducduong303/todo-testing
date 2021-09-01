import React, { useState } from 'react';
import Header from '../Header/Header';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';

function Todo(props) {
    const [todos, setTodos] = useState([])
    return (
        <div className="todo">
            <Header title="Quản lý công việc"></Header>
            <AddTodo
                setTodos={setTodos}
                todos={todos}
            ></AddTodo>
            <TodoList
                setTodos={setTodos}
                todos={todos}
            >
            </TodoList>
        </div>
    );
}

export default Todo;