import { Header } from "arwes";
import React from "react";
import styles from "./managers.module.css";
import PlanetForm from "../Planet Form/PlanetForm";
import { useNavigate } from "react-router-dom";
import PlanetsTable from "../Dashboard/Planets/PlanetsTable";
export default function ManagePlanets() {
  const [selectedTab, setSelectedTab] = React.useState("viewAllPlanets");
  const navigate = useNavigate();
  const renderTab = {
    viewAllPlanets: <PlanetsTable />,
    addPlanet: <PlanetForm />,
  };
  const handleSelect = (e) => {
    setSelectedTab(e.target.name);
  };
  return (
    <div className={styles.managerContainer}>
      <Header>Manage Planets</Header>
      <div className={styles.options}>
        <button
          name="viewAllPlanets"
          onClick={handleSelect}
          className={styles.optionbutton}
        >
          View All Planets
        </button>
        <button
          name="addPlanet"
          onClick={() => navigate("/planetsform")}
          className={styles.optionbutton}
        >
          Add Planet
        </button>
      </div>
      {renderTab[selectedTab]}
    </div>
  );
}
