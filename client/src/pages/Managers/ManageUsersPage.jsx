import React, { useState } from "react";
import { Button, Header } from "arwes";
import AssignRoles from "../Dashboard/Users/AssignRoles";
import AddUser from "../Dashboard/Users/AddUser";
import styles from "./managers.module.css";
export default function ManageUsersPage() {
  const [selectedTab, setSelectedTab] = useState("general");
  let renderTab = {
    general: <AssignRoles />,
    assignRoles: <AssignRoles />,
    addUser: <AddUser />,
  };
  return (
    <div className={styles.managerContainer}>
      <Header className={styles.managerContainerTitle}>Manage Users</Header>
      <div className={styles.options}>
        <button
          className={styles.optionbutton}
          onClick={() => setSelectedTab("assignRoles")}
        >
          Assign Roles
        </button>
        <button
          className={styles.optionbutton}
          onClick={() => setSelectedTab("addUser")}
        >
          Add User
        </button>
      </div>
      {renderTab[selectedTab]}
    </div>
  );
}
