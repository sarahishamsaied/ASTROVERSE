import axios from "axios";
import React, { useEffect } from "react";
import style from "./missions.module.css";
export default function ViewAllMissions() {
  const [searchValue, setSearchValue] = React.useState("");
  const [missions, setMissions] = React.useState([]);
  useEffect(() => {
    fetchMissions();
  }, []);
  const fetchMissions = async () => {
    try {
      const response = await axios.get("http://localhost:8282/api/missions");
      setMissions(response.data);
      console.log(missions);
    } catch (error) {
      console.log(error);
      console.log("fils");
    }
  };

  return (
    <div>
      <section className={style.rocketsTableSection}>
        <label htmlFor="" style={{ marginRight: "30px" }}>
          Search Rockets
        </label>
        <input
          type="text"
          placeholder="Search Missions"
          className="inputControl"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className={style.tableContainer}>
          <table className={style.rocketsTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Mission Name</th>
                <th>Rocket ID</th>
                <th>Phase</th>
                <th>Planet ID</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Approved</th>
                <th>Admin ID</th>
                <th>Launch Date</th>
              </tr>
            </thead>
            <tbody>
              {missions.length > 0 &&
                missions
                  .filter((mission) =>
                    mission.mission_name.match(new RegExp(searchValue, "i"))
                  )
                  .map((mission) => {
                    return (
                      <tr>
                        <td>{mission.id}</td>
                        <td>{mission.mission_name}</td>
                        <td>{mission.rocket_id}</td>
                        <td>{mission.phase}</td>
                        <td>{mission.planet_id}</td>
                        <td>{mission.lat}</td>
                        <td>{mission.lng}</td>
                        <td>{mission.approved.toString()}</td>
                        <td>{mission.admin_id}</td>
                        <td>{mission.launch_date}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
