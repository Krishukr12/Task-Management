import { useState } from "react";
import "./TaskForm.css";

const TaskForm = () => {
  const [task, setTask] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here

    // const newTask = {
    //   ...task,
    //   completed: false,
    // };

    // onAddTask(newTask);

    // Reset the form fields after submitting
    setTask({});
  };

  console.log(task);
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={task.dueDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn-submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
