import React, { useState } from "react";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <h1>TypeScript Todo List</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos removeTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
