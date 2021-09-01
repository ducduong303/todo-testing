import React, { useState } from 'react';
import "./AddTodo.css"
import { v4 as uuidv4 } from 'uuid';
import { AiOutlinePlus } from 'react-icons/ai';
function AddTodo({ setTodos, todos }) {
    const [todo, setTodo] = useState("")

    const addTodo = () => {
        if (!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }
    return (
        <div className="input-container">
            <input
                className="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Thêm công việc mới..."
            />
            <button
                className="add-btn"
                onClick={addTodo}
            >
                <AiOutlinePlus size={20} />Thêm
        </button>
        </div>
    );
}

export default AddTodo;