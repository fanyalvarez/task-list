import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // console.log("paginacargada");
    async function loadTasks() {
      const resp = await getAllTasks();

      //obtengo all informacion de tareas
      setTasks(resp.data);
      console.log(resp.data);
    }
    loadTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </>
  );
}
