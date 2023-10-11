import React, { useState } from "react";
import dustbin from "../images/delete.png";
import tick from "../images/right-tick.png";

const TaskSheet = (props) => {
  const [bool, setBool] = useState(false);
  function click() {
    setBool(!bool);
  }
  return (
    <li
      className='mt-2 text-blac  break-words'
      style={{ textDecoration: bool ? "line-through" : "none" }}
    >
      <span className='p-2 w-[50%]'>{props.todo}</span>
      <button className='mr-2 h-7 bg-green-300 rounded-full' onClick={click}>
        <img className='h-5' src={tick} />
      </button>
      <button
        className=' h-7 bg-red-200 rounded-full'
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
        <img className='h-5' src={dustbin} />
      </button>
    </li>
  );
};

export default TaskSheet;
