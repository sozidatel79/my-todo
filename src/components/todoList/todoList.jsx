import React from "react";
import Todo from "../todo/todo";

const TodoList = ( {todos, setTodos, setEditTodo, editTodo} ) => {

    const handleDelete = ({ id }) => {
        setTodos( todos.filter( (todo) => todo.id !== id ));
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map( (item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        );
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const renderTodos = () => {
        if (todos.length > 0 ) {
            return todos.map( (todo) => {
                return <ul key={todo.id} >
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleComplete={handleComplete}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </ul>
            });
        }
        return <div className="no-todos"> There are no Todos</div>;
    }
    return renderTodos();
}

export default TodoList;