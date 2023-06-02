/** @format */

import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleDelete, handleEdit, handleCompleted }) {
  return (
    <>
      <ul className='lists'>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleCompleted={handleCompleted}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
