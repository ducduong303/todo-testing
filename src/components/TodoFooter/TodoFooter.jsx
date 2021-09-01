import React from 'react';

function TodoFooter({ numberOfIncompleteTasks }) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "công việc" : "công việc"} còn lại</p>
        </div>

    );
}

export default TodoFooter;