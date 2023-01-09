import React from "react";
import { Button, Header } from "arwes";

import styles from "./managers.module.css";
import { useNavigate } from "react-router-dom";
import ViewAllMissions from "../Dashboard/Missions/ViewAllMissions";
export default function ManageMissions() {
  const [renderedTab, setRenderedTab] = React.useState("default");
  const navigate = useNavigate();
  const renderTab = {
    default: "",
    viewAllMissions: <ViewAllMissions />,
  };
  return (
    <div className={styles.managerContainer}>
      <Header>Manage Missions</Header>
      <div className={styles.options}>
        <button
          className={styles.optionbutton}
          onClick={() => navigate("/launch")}
        >
          Launch a Mission
        </button>
        <button
          name="viewAllMissions"
          className={styles.optionbutton}
          onClick={(e) => setRenderedTab(e.target.name)}
        >
          View All Missions
        </button>
      </div>
      {renderTab[renderedTab]}
    </div>
  );
}
