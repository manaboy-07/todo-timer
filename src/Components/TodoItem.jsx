/** @format */

import React, { useEffect, useState } from "react";
import { AiTwotoneEdit, AiFillDelete , AiOutlineCheck} from "react-icons/ai";
function TodoItem({ todo, handleDelete, handleCompleted, handleEdit }) {
  const { id, text, completed } = todo;
  const [color, setColor] = useState("");
  const colors = [
    "red",
    "purple",
    "white",
    "green",
    "blue",
    "brown",
    "pink",
    "crimson",
    "coral",
  ];

  const myStyle = {
    borderLeftColor: color,
  };
  useEffect(() => {
    let getRandomNumber = Math.floor(Math.random() * colors.length);

    let selectedColor = colors[getRandomNumber];
    setColor((prevState) => selectedColor);
    console.log(getRandomNumber);
    console.log(selectedColor);
  }, []);

  return (
    <li
      style={myStyle}
      className='flex items-center justify-between mx-12 my-2 rounded-md p-2 bg-slate-800 listsItems'
      key={id}>
      <div className='text-xl m-2 text-white'>
        <h2 className={completed ? "strike" : null}>{text}</h2>
      </div>
      <div>
        <button
          className='bg-error btn text-white hover:bg-error'
          onClick={() => handleDelete(id)}>
          {" "}
          <AiFillDelete />
        </button>
        <button
          className='btn bg-info text-white'
          onClick={() => handleCompleted(id)}>
          <AiOutlineCheck />
        </button>
        <button
          className='btn bg-success text-white'
          onClick={() => handleEdit(id)}>
          <AiTwotoneEdit />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
