/* eslint-disable react/prop-types */
import axios from "axios";
import "../Single Task/Task.css";

const Task = ({ data, onDelete }) => {
  function formatDateTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return `${formattedDate} `;
  }

  const handleCompletionStatus = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/tasks/updatestatus/${id}`
      );
      if (response.data.success) {
        alert("changed successfully");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="task">
      <h3 className="task-title">{data.title}</h3>
      <p className="task-due">Due Date: {formatDateTime(data.dueDate)}</p>
      <p className="task-due">
        Status : {data.completed ? "Completed" : "Not Completed"}
      </p>
      <button
        onClick={() => handleCompletionStatus(data._id)}
        className="task-complete"
      >
        {data.completed ? "Mark as Uncompleted" : "Mark as Completed"}
      </button>
      <button className="task-delete" onClick={() => onDelete(data._id)}>
        Delete Task
      </button>
    </div>
  );
};

export default Task;
