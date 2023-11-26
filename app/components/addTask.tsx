import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTask = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn">
          Add new task <AiOutlinePlus className="ml-2" size={18} />
        </button>
      </div>
    </div>
  );
};

export default AddTask;
