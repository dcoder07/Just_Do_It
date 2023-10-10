import React from "react";
import TaskSheet from "./TaskSheet";

const InputField = () => {
  const [item, setItem] = React.useState("");
  const [itemArray, setItemArray] = React.useState([]);

  function handleClick() {
    setItemArray((preVal) => {
      return [...preVal, item];
    });
    setItem("");
  }
  function handleChange(e) {
    const { value } = e.target;
    setItem(value);
  }
  function handleDelete(id) {
    setItemArray((preItem) => {
      return preItem.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className='w-full'>
      <div className='relative mx-6 sm:mx-auto max-w-md'>
        <input
          className='px-4 py-2 rounded-full w-full'
          onChange={handleChange}
        />
        <button
          className='min-w-[100px] bg-[#c70039] p-2 rounded-full absolute right-0 text-white'
          onClick={handleClick}
        >
          Add
        </button>
      </div>

      <div className='flex justify-center items-center mt-8 max-w-3xl mx-auto px-12 w-full'>
        <div className='taskbg mb-10 rounded-2xl w-[80vw] max-w-auto m-5 min-h-[80vh] p-4 sm:px-12'>
          <ul className='text-3xl ml-12 mt-8 list-disc'>
            {itemArray.map((items, index) => {
              return (
                <TaskSheet
                  key={index}
                  id={index}
                  deleteItem={handleDelete}
                  todo={items}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InputField;
