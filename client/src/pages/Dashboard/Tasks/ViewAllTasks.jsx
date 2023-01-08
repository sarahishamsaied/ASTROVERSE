import React, { useState } from "react";
import useTasks from "../../../hooks/useTasks";
import style from "./tasks.module.css";
export default function ViewAllTasks() {
  const { tasks } = useTasks();
  console.log(tasks);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <h1>All Tasks</h1>
      <label htmlFor="" style={{ marginRight: "30px" }}>
        Search Rockets
      </label>
      <input
        type="text"
        placeholder="Search Tasks"
        className="inputControl"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <table className={style.tasksTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Priority</th>
            <th>Mission #ID</th>
            <th>Asignee</th>
          </tr>
        </thead>
        <tbody>
          {tasks
            .filter((task) =>
              task.task_name.match(new RegExp(searchValue, "i"))
            )
            .map((task) => {
              return (
                <tr>
                  <td>{task.task_name}</td>
                  <td>{task.priority}</td>
                  <td>{task.mission_id}</td>
                  <td>
                    {task.first_name} {task.last_name}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
