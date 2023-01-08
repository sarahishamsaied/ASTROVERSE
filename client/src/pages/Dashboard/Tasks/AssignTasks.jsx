import { Blockquote, Button } from "arwes";
import React from "react";
import CrewPopup from "../../../Launch Page/CrewPopup";
import crew from "../../../Launch Page/crew";
import useAdmins from "../../../hooks/useAdmins";
import useLaunches from "../../../hooks/useLaunches";
import useTasks from "../../../hooks/useTasks";
export default function AssignTasks() {
  const { admins } = useAdmins();
  const { launches } = useLaunches();
  const { addTask } = useTasks();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [asignee, setAssignee] = React.useState(
    admins[0] ? admins[0].uid : "1"
  );

  const [priority, setPriority] = React.useState("high");
  const [chosenMission, setChosenMission] = React.useState("51");
  console.log({
    task_name: title,
    task_description: description,
    astronaut_id: asignee,
    priority,
    mission_id: chosenMission,
  });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(title, description, asignee, priority, chosenMission);
      setMessage("Loading");
      const res = await addTask({
        task_name: title,
        task_description: description,
        astronaut_id: asignee,
        priority,
        mission_id: chosenMission,
      });
      setMessage(res.message);
      console.log(res);
    } catch (error) {
      setMessage("An error occured");
      console.log(error);
    }
  };
  console.log(admins);
  return (
    <div className="formContainer">
      {/* <Blockquote>Assign Tasks</Blockquote> */}
      <label htmlFor="">Task Name</label>
      <input
        type="text"
        className="inputControl"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">Task Description</label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        className="inputControl"
        cols={121}
        rows={6}
      ></textarea>
      <label htmlFor="">Assign to</label>
      <select
        name=""
        id=""
        value={asignee}
        className="inputControl"
        onChange={(e) => setAssignee(e.target.value)}
      >
        {admins.map((admin) => (
          <option value={admin.id}>
            {admin.first_name} {admin.last_name}
          </option>
        ))}
      </select>
      <label htmlFor="">Priority</label>
      <select
        name=""
        id=""
        value={priority}
        className="inputControl"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <label htmlFor="">Mission ID</label>
      <select
        value={chosenMission}
        name=""
        id=""
        className="inputControl"
        onChange={(e) => setChosenMission(e.target.value)}
      >
        {launches.map((launch) => (
          <option value={launch.id}>
            {launch.mission_name} #{launch.id}
          </option>
        ))}
      </select>
      <Button style={{ marginTop: "10px" }} onClick={handleSubmit} animate>
        Assign Task
      </Button>
      <p>{message}</p>
    </div>
  );
}
