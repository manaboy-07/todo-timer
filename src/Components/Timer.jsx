/** @format */

import React from "react";

function Timer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
         <h2 className='text-white text-2xl'>Select Category</h2>
      </div>
      <div>
        <form className=''>
          <div id='options' className=' flex '>
            <label className="bg-white cursor-pointer options p-2 m-1 rounded-md ">
              <input type='radio' name='category' id='' value='business' />
              <span className='bubble birthday mx-8'></span>
              <div className="my-2 text-center text-secondary">BIRTHDAY</div>
            </label>

            <label className="bg-white cursor-pointer options shadow-slate-400 p-2 m-1 rounded-md">
              <input type='radio' name='category' id='' value='personal' />
              <span className='bubble other mx-8'></span>
              <div className="my-2 text-center  text-secondary"> OTHER</div>
            </label>
            
          </div>
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    </div>
  );
}

export default Timer;
