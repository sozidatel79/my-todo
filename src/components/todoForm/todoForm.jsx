import React, {useEffect} from "react";
import {v4 as uuid} from 'uuid';
import moment from "moment";
const TodoForm = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const onChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const updateTodo = (title, id, completed, updatedAt) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? {title, id, completed, updatedAt} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if( !editTodo ) {
            setTodos( [
                ...todos,
                {
                    id: uuid(),
                    title: input,
                    completed: false,
                    createdAt: moment().format('LLL'),
                }
                    ])
            setInput("");
        } else {
            updateTodo( input, editTodo.id, editTodo.completed)
        }

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Enter task..."
                className="task-input"
                value={input}
                required
                onChange={onChangeHandler}
            />
            <button className="button-add" type="submit">
                {editTodo ? <i className="fa fa-save"/> : <i className="fa fa-plus"/> }
            </button>
        </form>
    )
}

export default TodoForm;