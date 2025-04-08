import React from "react";
import TodoItem from "./TodoItems.js";
function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {" "}
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}{" "}
    </ul>
  );
}
export default TodoList;
