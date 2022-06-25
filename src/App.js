import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/header/header";
import TodoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container ">
      <div className="app-wrapper">
         <div>
             <Header />
             <TodoForm
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
             />
         </div>
          <div>
              <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  setEditTodo={setEditTodo}
                  editTodo={editTodo}
                  setInput={setInput}
              />
          </div>
      </div>
    </div>
  );
}

export default App;
