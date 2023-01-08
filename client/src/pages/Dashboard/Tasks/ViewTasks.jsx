import React, { useEffect, useState } from "react";
import useTasks from "../../../hooks/useTasks";
import * as TbIcons from "react-icons/tb";
import * as IoIcons from "react-icons/io5";
import style from "./tasks.module.css";
import MyTaskRow from "./MyTaskRow";
export default function ViewTasks() {
  const [fetchedTasks, setFetchedTasks] = useState([]);
  const handleDone = (id) => {
    console.log(id);
  };
  const { tasks } = useTasks();
  let id = 2;
  useEffect(() => {
    setFetchedTasks(tasks.filter((task) => task.astronaut_id === id));
  }, [tasks]);

  return (
    <div>
      <h1>View My Tasks</h1>
      <table className={style.tasksTable}>
        <thead>
          <tr>
            <th>Operations</th>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Mission ID</th>
          </tr>
        </thead>
        <tbody>
          {fetchedTasks.map((task) => {
            return (
              <MyTaskRow task={task} handleDone={handleDone} key={task.id} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
