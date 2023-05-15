import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { axiosInstance } from "../axiosInstance";

const TodosList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Do laundry" },
    { id: 3, text: "Read a book" },
    { id: 4, text: "Go for a walk" },
    { id: 5, text: "Write code" },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get("/todos");
      // setTodos(response)
      console.log(response);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { id: todo.id, text: newText };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TodosList;
