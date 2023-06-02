/** @format */

import React from "react";

function Todo({ edit, inputValue, handleInput, handleAddTodo }) {
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <div className='todo-name flex flex-col items-center justify-center'>
          <div className='my-4'>
            <label
              htmlFor='todo'
              className='text-white font-bold text-3xl w-full'>
              <h1>New todo?</h1>
            </label>
          </div>
          <div className='flex items-center justify-center'>
            <input
              type='text'
              autoFocus={edit ? true : false}
              className='input-field text-white'
              value={inputValue}
              placeholder='e.g buy fish'
              onChange={handleInput}
            />
            <button type='submit' className='mx-3 bg-warning btn text-white'>
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Todo;
