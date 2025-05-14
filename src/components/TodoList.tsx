import React, { useState } from "react";

type TodoType = {
  id: number;
  name: string;
  completed: boolean;
};

const TodoList = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);

  function addTodo(task: string) {
    const newTodo: TodoType = {
      id: todo.length + 1,
      name: task,
      completed: false,
    };
    setTodo((prev) => [...prev, newTodo]);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={() => addTodo("new Todo")}>Add Todo</button>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.name} {todo.completed ? "✔" : "✖"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
