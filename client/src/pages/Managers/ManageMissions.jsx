import React from "react";
import { Button, Header } from "arwes";

import styles from "./managers.module.css";
import { useNavigate } from "react-router-dom";
export default function ManageMissions() {
  const navigate = useNavigate();
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
      </div>
    </div>
  );
}
