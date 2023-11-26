import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTask = () => {
  return (
    <div className="card card-body my-3">
      <input type="text" className="form-control" placeholder="New Todo" />
      <button type="submit" className="btn btn-light mt-3">
        Add new Task
      </button>
    </div>
  );
};

export default AddTask;
