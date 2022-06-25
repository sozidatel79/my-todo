import React from "react";

const Todo = ({todo, handleComplete, handleEdit, handleDelete}) => {
    return (
        <li className="todo-list" key={todo.id}>
            <input
                type="text"
                value={todo.title}
                className={`list ${todo.completed ? "complete" : ""}`}
                onChange={ (event) => event.preventDefault() }
            />
            <div className="buttons-container">
                <button
                    className="button-complete task-button"
                    onClick={() => handleComplete(todo)}>
                    <i className="fa fa-check-circle" />
                </button>
                <button
                    className="button-edit task-button"
                    onClick={() => handleEdit(todo)}>
                    <i className="fa fa-edit" />
                </button>
                <button
                    className="button-delete task-button"
                    onClick={() => handleDelete(todo)}>
                    <i className="fa fa-trash"/>
                </button>
            </div>
        </li>
    )
}

export default Todo;