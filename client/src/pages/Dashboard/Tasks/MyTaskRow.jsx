import React from "react";
import * as TbIcons from "react-icons/tb";
import * as IoIcons from "react-icons/io5";
import style from "./tasks.module.css";
import useTasks from "../../../hooks/useTasks";
export default function MyTaskRow({ task }) {
  const [doneClicked, setDoneClicked] = React.useState(task.is_completed);
  const [message, setMessage] = React.useState("");
  const { completeTask, unCompleteTask } = useTasks();
  const handleDoneClicked = async () => {
    setDoneClicked(!doneClicked);
    if (doneClicked) {
      setMessage("Loading...");
      const res = await unCompleteTask(task.id);
      setMessage("completed...");

      console.log(res);
    } else {
      setMessage("Loading...");
      const res = await completeTask(task.id);
      setMessage("completed...");
      console.log(res);
    }
  };
  return (
    <tr
      style={{
        backgroundColor: doneClicked
          ? "rgba(0, 255, 213, 0.308)"
          : "transparent",
      }}
    >
      <td>
        {message}
        <TbIcons.TbListDetails style={{ marginRight: "10px" }} />
        {doneClicked ? (
          <IoIcons.IoCheckmarkDoneCircleSharp
            className={style.doneIcon}
            onClick={handleDoneClicked}
          />
        ) : (
          <IoIcons.IoCheckmarkDoneCircleOutline
            className={style.doneIcon}
            onClick={handleDoneClicked}
          />
        )}
      </td>
      <td style={{ color: doneClicked ? "yellow" : "turquoise" }}>
        {task.task_name}
      </td>
      <td style={{ color: doneClicked ? "yellow" : "turquoise" }}>
        {task.priority}
      </td>
      <td style={{ color: doneClicked ? "yellow" : "turquoise" }}>
        {task.mission_id}
      </td>
    </tr>
  );
}
