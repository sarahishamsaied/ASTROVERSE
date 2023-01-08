import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Globe2 from "../../components/Globe2";
import MyGlobe from "../../components/MyGlobe";

export default function PlanetView() {
  const { id } = useParams();
  const [globeUrl, setGlobeUrl] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [missionLandings, setMissionLandings] = useState([]);
  const [mass, setMass] = useState([]);
  const [planet, setPlanet] = useState({});
  const getPlanetData = async () => {
    const res = await axios.get("http://localhost:8282/api/planets/" + id);
    setGlobeUrl(res.data.map_image);
    setPlanetName(res.data.planet_name);
    setMissionLandings(res.data.positions);
    setMass(res.data.mass);
    setPlanet(res.data);
  };
  useEffect(() => {
    getPlanetData();
  }, []);
  return (
    <div style={{ color: "white" }}>
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "3%",
          zIndex: 100,
        }}
      >
        <h1 style={{ fontSize: "6rem", color: "white" }}>Satellite View</h1>
        <h1>{planetName}</h1>
        <p>Mass: {mass}</p>
        <p>GRAVITY: {planet.gravity}</p>
        <p>TEMPERATURE: {planet.temperature}</p>
        <p>DIST FROM EARTH: {planet.distance_from_earth}</p>
        <p>ROT. DUR.: {planet.rotation_duration}</p>
        <p>NO. OF MOONS: {planet.no_of_moons}</p>
        <p>STRUCT: {planet.structure}</p>
      </div>

      <Globe2
        landingData={missionLandings}
        width={window.innerWidth}
        height={window.innerHeight}
        globeImageUrl={globeUrl}
      />
    </div>
  );
}
