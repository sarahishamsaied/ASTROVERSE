import React from "react";
import { Button, Header } from "arwes";

import styles from "./managers.module.css";
export default function ManageMaintenancePage() {
  return (
    <div className={styles.managerContainer}>
      <Header>Manage Maintenace Operations</Header>
      <div className={styles.options}>
        <button className={styles.optionbutton}>
          New Maintenance Operation
        </button>
        <button className={styles.optionbutton}>Edit Operation</button>
        <button className={styles.optionbutton}>Delete Operation</button>
        <button className={styles.optionbutton}>Maintenance History</button>
      </div>
    </div>
  );
}
