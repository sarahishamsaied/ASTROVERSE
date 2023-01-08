import { Button, Header } from "arwes";
import React, { useState } from "react";
import AssignTasks from "../Dashboard/Tasks/AssignTasks";
import ViewAllTasks from "../Dashboard/Tasks/ViewAllTasks";
import ViewTasks from "../Dashboard/Tasks/ViewTasks";
import styles from "./managers.module.css";
export default function TasksPage() {
  const [selectedTab, setSelectedTab] = useState("assignTasks");
  let renderTab = {
    assignTasks: <AssignTasks />,
    viewMyTasks: <ViewTasks />,
    viewAllTasks: <ViewAllTasks />,
  };
  const handleClick = (e) => {
    setSelectedTab(e.target.name);
  };
  return (
    <div className={styles.managerContainer}>
      <Header className={styles.header}>Manage Tasks</Header>
      <div className={styles.options}>
        <button
          name="assignTasks"
          className={styles.optionbutton}
          onClick={handleClick}
        >
          Assign Tasks
        </button>
        <button
          name="viewMyTasks"
          className={styles.optionbutton}
          onClick={handleClick}
        >
          View My Tasks
        </button>
        <button
          name="viewAllTasks"
          className={styles.optionbutton}
          onClick={handleClick}
        >
          View All Tasks Tasks
        </button>
        <button
          name="viewAllCompletedTasks"
          className={styles.optionbutton}
          onClick={handleClick}
        >
          View All Completed Tasks
        </button>
      </div>
      {renderTab[selectedTab]}
    </div>
  );
}
