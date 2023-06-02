/** @format */

import React from "react";

function TodoItem({ todo, handleDelete, handleCompleted, handleEdit }) {
  const { id, text, completed } = todo;
  return (
    <li
      className='flex items-center justify-between mx-12 my-2 rounded-md p-2 bg-slate-800'
      key={id}>
      <div className='text-xl m-2 text-white'>
        <h2 className={completed ? "strike" : null}>{text}</h2>
      </div>
      <div>
        <button
          className='bg-error btn text-white hover:bg-error'
          onClick={() => handleDelete(id)}>
          {" "}
          DELETE
        </button>
        <button
          className='btn bg-info text-white'
          onClick={() => handleCompleted(id)}>
          Completed
        </button>
        <button
          className='btn bg-success text-white'
          onClick={() => handleEdit(id)}>
          Edit
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
