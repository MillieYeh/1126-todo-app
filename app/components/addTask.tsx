import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";

const AddTask = () => {
  const [items, setItems] = useState<
    { id: any; title: string; completed: boolean }[]
  >([]);
  const [item, setItem] = useState("");
  const [id, setId] = useState(uuidv4());
  const [editItem, setEditItem] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newItem = {
      id,
      title: item,
      completed: false,
    };

    if (item.length > 0) {
      setItems([...items, newItem]);
      setId(uuidv4());
      setItem("");
      setEditItem(false);
    }
  };
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" placeholder="New Todo" />
        <button type="submit" className="btn btn-light mt-3">
          Add new Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
