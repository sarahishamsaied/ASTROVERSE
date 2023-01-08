import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Frame, Header } from "arwes";
import BarChart from "./BarChart";
import MyGlobe from "../../components/MyGlobe";
import styles from "./dashboard.module.css";
import Sidebar from "./Sidebar";
import TasksPage from "../Managers/TasksPage";
import ManageUsersPage from "../Managers/ManageUsersPage";
import ManageMissions from "../Managers/ManageMissions";
import ManageMaintenancePage from "../Managers/ManageMaintenancePage";
import ManageRocket from "../Managers/ManageRocket";
import LineChart from "./LineChart";
import ManagePlanets from "../Managers/ManagePlanets";

export default function Dashboard() {
  const [chosenPage, setChosenPage] = useState("general");
  let renderTab = {
    general: <TasksPage />,
    tasksPage: <TasksPage />,
    manageUsersPage: <ManageUsersPage />,
    manageMissionsPage: <ManageMissions />,
    maintenancesPage: <ManageMaintenancePage />,
    manageRocketPage: <ManageRocket />,
    managePlanetsPage: <ManagePlanets />,
  };
  return (
    <section className={styles.dashboard}>
      <Sidebar setChosenPage={setChosenPage} />
      {renderTab[chosenPage]}
      <div className={styles.content}>
        <div className={styles.charts}>
          <BarChart title={"Users / Month"} />
          {/* <BarChart
            title={"Maintanences / Month"}
            dataset={[50, 200, 200, 30, 200]}
          /> */}
          <LineChart title={"Users / Month"} />
        </div>
        {/* <div className={styles.globeContainer}>
          <Header>
            <h1>Our Planet</h1>
          </Header>
          <MyGlobe
            className={styles.globe}
            width={800}
            height={500}
            globeImageUrl={"/img/earth-night.jpg"}
            backgroundImageUrl="/img/night-sky.png"
          />
        </div> */}
      </div>
    </section>
  );
}
