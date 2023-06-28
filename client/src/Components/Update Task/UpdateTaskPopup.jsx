/* eslint-disable react/prop-types */
import { useState } from "react";
import "./UpdateTaskPopup.css";

const UpdateTaskPopup = ({ task, onUpdate, onCancel }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updatedTask.title || !updatedTask.dueDate) {
      setError("Title and due date are required");
      return;
    }
    onUpdate(updatedTask);
  };

  return (
    <div className="update-task-popup">
      <div className="popup-content">
        <h3>Update Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={updatedTask.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              id="description"
              name="description"
              value={updatedTask.description}
              onChange={handleChange}
              placeholder="Enter description"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Due Date:</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={updatedTask.dueDate}
              onChange={handleChange}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="popup-buttons">
            <button type="submit" className="btn-submit">
              Update
            </button>
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskPopup;
