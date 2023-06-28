import "../Single Task/Task.css";

const Task = ({ title, dueDate, completed, onComplete, onDelete }) => {
  const complted = false;
  return (
    <div className="task">
      <h3 className="task-title">Krishan</h3>
      <p className="task-due">Due Date: 22/03/2023</p>
      <button className="task-complete" onClick={onComplete}>
        {completed ? "Completed" : "Mark as Completed"}
      </button>
      <button className="task-delete" onClick={onDelete}>
        Delete Task
      </button>
    </div>
  );
};

export default Task;
