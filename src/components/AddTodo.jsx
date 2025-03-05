import React, { useState } from "react";
import styles from "./AddTodo.module.css"; // Import module CSS

export default function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row justify-content-center align-items-center g-3">
        <div className="col-lg-6 col-md-8 col-12">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
            className="form-control shadow-sm border-2"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            className="form-control shadow-sm border-2"
          />
        </div>
        {todoName && dueDate && (
          <div className="col-lg-2 col-md-12 col-12 text-center">
            <button
              type="button"
              className={styles.addBtn}
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
