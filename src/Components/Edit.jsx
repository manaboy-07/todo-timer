/** @format */

import React from "react";

function Edit({ editText, closeEdit, handleEditText }) {
  return (
    <section className='overlay '>
      <div className='my-modal p-5 m-3 flex flex-col bg-base-100 rounded-md shadow-stone-50'>
        <input
          type='text'
          value={editText}
          onChange={handleEditText}
          className='edit-input my-5 p-2'
        />
        <button onClick={closeEdit} className='btn text-white bg-success hover:bg-success'>
          Confirm
        </button>
      </div>
    </section>
  );
}

export default Edit;
