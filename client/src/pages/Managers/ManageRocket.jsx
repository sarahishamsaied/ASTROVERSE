import React, { useState } from "react";
import { button, Header } from "arwes";
import styles from "./managers.module.css";
import RocketsTable from "../Dashboard/Rockets/RocketsTable";
import useRockets from "../../hooks/useRockets";
import ModifyRocket from "../Dashboard/Rockets/ModifyPopup";
import { useNavigate } from "react-router-dom";
export default function ManageRocket() {
  const navigate = useNavigate();
  const rockets = useRockets();
  console.log(rockets);
  const [selectedTab, setSelectedTab] = useState("viewAllRockets");
  const renderTab = {
    viewAllRockets: <RocketsTable rockets={rockets} />,
    addRocket: <div>Add Rocket</div>,
  };
  const handleSelect = (e) => {
    setSelectedTab(e.target.name);
  };
  return (
    <div className={styles.managerContainer}>
      <Header>Manage Rockets</Header>
      <div className={styles.options}>
        <button
          name="viewAllRockets"
          onClick={handleSelect}
          className={styles.optionbutton}
        >
          View All Rockets
        </button>
        <button
          name="addRocket"
          onClick={() => navigate("/rocketform")}
          className={styles.optionbutton}
        >
          Add Rocket
        </button>
      </div>
      {renderTab[selectedTab]}
    </div>
  );
}
