/* eslint-disable react/prop-types */
import "../Single Task/Task.css";

const Task = ({ data, onDelete }) => {
  function formatDateTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    return `${formattedDate} `;
  }

  return (
    <div className="task">
      <h3 className="task-title">{data.title}</h3>
      <p className="task-due">Due Date: {formatDateTime(data.dueDate)}</p>
      <button className="task-complete">
        {data.completed ? "Completed" : "Mark as Completed"}
      </button>
      <button className="task-delete" onClick={() => onDelete(data._id)}>
        Delete Task
      </button>
    </div>
  );
};

export default Task;
