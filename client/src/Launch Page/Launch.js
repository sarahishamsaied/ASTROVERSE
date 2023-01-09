import { useMemo, useState } from "react";
import { Appear, Blockquote, Button, Header, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";
import style from "./launch.module.css";
import RocketPreview from "../pages/Rocket Form/RocketPreview";
import SolidRocket from "../pages/Rocket Form/SolidRocket";
import * as FaIcons from "react-icons/fa";
import crew from "./crew";
import CrewPopup from "./CrewPopup";
import * as AiIcons from "react-icons/ai";
const Launch = (props) => {
  console.log(props.planets);
  const today = new Date().toISOString().split("T")[0];
  const [selectedCrew, setSelectedCrew] = useState([]);
  const [missionName, setMissionName] = useState("");
  const [rocketId, setrocketId] = useState("");
  const [selectedPlanetId, setselectedPlanetId] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [objective, setObjective] = useState("");
  const [phase, setPhase] = useState("");
  const [adminId, setAdminId] = useState("");
  const [launch_date, setLaunchDate] = useState(today);
  const [crewPopupClicked, setCrewPopupClicked] = useState(false);
  const [message, setMessage] = useState("");
  const selectorBody = useMemo(() => {
    return props.planets?.map((planet) => (
      <option value={planet.id} key={planet.id}>
        {planet.planet_name}
      </option>
    ));
  }, [props.planets]);
  const rocketsBody = useMemo(() => {
    console.log(props);
    return props.rockets?.map((rocket) => (
      <option value={rocket.id} key={rocket.id}>
        {rocket.rocket_name}
      </option>
    ));
  }, [props]);
  const planetsBody = useMemo(() => {
    console.log(props);
    return props.planets?.map((planet) => (
      <option value={planet.id} key={planet.id}>
        {planet.planet_name}
      </option>
    ));
  }, [props]);
  const adminsBody = useMemo(() => {
    return props.admins?.map((admin) => (
      <option value={admin.id} key={admin.id}>
        {admin.first_name} {admin.last_name} #{admin.id}
      </option>
    ));
  }, [props.admins]);
  const handleDelete = (element) => {
    let filteredCrew = selectedCrew.filter((member) => member !== element);
    setSelectedCrew(filteredCrew);
  };
  const handleSubmit = async () => {
    try {
      console.log(adminId);
      setMessage("Loading...");
      const launchData = {
        mission_name: missionName,
        rocket_id: rocketId,
        planet_id: selectedPlanetId,
        lat,
        lng,
        objective,
        launch_date,
        crew: selectedCrew,
        phase,
        admin_id: adminId,
      };
      const response = await props.submitLaunch(launchData);
      setMessage("Mission Requested Successfully");
    } catch (error) {
      console.log(error);
      setMessage("An error occurred");
    }
  };

  return (
    <section
      id="launch"
      animate
      show={props.entered}
      className={style.launchFormContainer}
    >
      <section>
        <Header>
          <h1>Launch a mission</h1>
        </Header>
        <Paragraph>
          Schedule a mission launch for interstellar travel to one of the Kepler
          Exoplanets.
        </Paragraph>
        <Paragraph>
          Only confirmed planets (by the admins) matching the following criteria
          will be launched
        </Paragraph>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "inline-grid",
            gridTemplateColumns: "auto auto",
            gridGap: "10px 20px",
          }}
        >
          <Blockquote className={style.formLabel}>Launch Date</Blockquote>
          <input
            type="date"
            id="launch_date"
            name="launch_date"
            min={today}
            max="2040-12-31"
            defaultValue={today}
            className="inputControl"
            onChange={(e) => setLaunchDate(e.target.value)}
          />
          <Blockquote className={style.formLabel}>Mission Name</Blockquote>
          <input
            type="text"
            id="mission_name"
            name="mission_name"
            className="inputControl"
            placeholder="Mission Name"
            onChange={(e) => setMissionName(e.target.value)}
          />
          <Blockquote className={style.formLabel}>Mission Phase</Blockquote>
          <select
            className="inputControl"
            onChange={(e) => setPhase(e.target.value)}
          >
            <option value={"Pre-Flight"}>Pre-Flight</option>
            <option value={"Flight Phase"}>Flight Phase</option>
            <option value={"Arrival to Destination Phase"}>
              Arrival to Destination Phase
            </option>
            <option value={"Extended Operations Phase"}>
              Extended Operations Phase
            </option>
            <option value={"Returned To Location"}>Returned To Location</option>
          </select>
          <Blockquote className={style.formLabel}>Rocket</Blockquote>
          <select
            className="inputControl"
            onChange={(e) => setrocketId(e.target.value)}
          >
            {rocketsBody}
          </select>
          <Blockquote className={style.formLabel}>Assign to Admin</Blockquote>
          <select
            className="inputControl"
            onChange={(e) => {
              console.log("hi");
              console.log(e.target.value);
              setAdminId(e.target.value);
            }}
          >
            {adminsBody}
          </select>
          <Blockquote className={style.formLabel}>
            Destination Exoplanet
          </Blockquote>
          <select
            id="planet_name"
            name="planet_name"
            className="inputControl"
            onChange={(e) => setselectedPlanetId(e.target.value)}
          >
            {planetsBody}
          </select>
          <Blockquote className={style.formLabel}>Crew</Blockquote>
          <button
            className={style.crewButton}
            onClick={() => setCrewPopupClicked(!crewPopupClicked)}
          >
            <FaIcons.FaUser />
          </button>
          {crewPopupClicked && (
            <CrewPopup list={crew} setSelectedCrew={setSelectedCrew} />
          )}
          <Header className={style.launchSiteTitle}>Launch Site</Header>
          <br />
          {/* <label htmlFor="rocket-name">Launch Site</label> */}
          <Blockquote className={style.formLabel}>Latitude</Blockquote>
          <input
            type="text"
            id="lat"
            name="lat"
            className="inputControl"
            onChange={(e) => setLat(e.target.value)}
          />
          <Blockquote className={style.formLabel}>Longitude</Blockquote>
          <input
            type="text"
            id="lng"
            name="lng"
            className="inputControl"
            onChange={(e) => setLng(e.target.value)}
          />
          <Blockquote className={style.formLabel}>Objective</Blockquote>
          <input
            type="text"
            id="objective"
            name="objective"
            className="inputControl"
            onChange={(e) => setObjective(e.target.value)}
          />
          <Clickable>
            <Button
              animate
              show={props.entered}
              type="submit"
              layer="success"
              disabled={props.isPendingLaunch}
              className={style.launchMissionButton}
              onClick={handleSubmit}
            >
              Launch Mission ✔
            </Button>
          </Clickable>
          {props.isPendingLaunch && <Loading animate small />}
          <div className={style.selectedCrewContainer}>
            {[...new Set(selectedCrew)].map((element) => (
              <span className={style.selectedCrew}>
                {element}
                <AiIcons.AiOutlineClose
                  onClick={() => handleDelete(element)}
                  className={style.closeButton}
                />
              </span>
            ))}
          </div>
          <p>{message}</p>
        </form>
      </section>
    </section>
  );
};

export default Launch;
