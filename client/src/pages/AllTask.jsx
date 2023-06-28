import { useEffect, useState } from "react";
import Task from "../Components/Single Task/Task";
import axios from "axios";

export const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  // Data Fetch function
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tasks");
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Delete handler
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/delete/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div
      style={{
        width: "75%",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        marginTop: "20px",
      }}
    >
      {tasks.length > 0 ? (
        tasks.map((item) => {
          return (
            <Task
              refreshFun={fetchTasks}
              onDelete={handleDelete}
              data={item}
              key={item._id}
            />
          );
        })
      ) : (
        <h1>Not Task available</h1>
      )}
    </div>
  );
};
