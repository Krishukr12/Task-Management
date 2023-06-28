import { Route, Routes } from "react-router-dom";
import TaskForm from "../Components/TaskForm";
import { AllTask } from "../pages/AllTask";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllTask />}></Route>
        <Route path="/createtask" element={<TaskForm />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
