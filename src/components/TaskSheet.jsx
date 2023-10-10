import React from "react";
import dustbin from "../images/delete.png";

const TaskSheet = (props) => {
  return (
    <li className='mt-2 text-blac  break-words'>
      <span className='p-2 w-[50%]'>{props.todo}</span>
      <button
        className=' h-7 bg-blue-200 rounded-full'
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
