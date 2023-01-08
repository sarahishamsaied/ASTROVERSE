import { Button, Frame } from "arwes";
import React from "react";
import MyGlobe from "../../../components/MyGlobe";
import style from "./planets.module.css";
export default function PlanetDetails({ planet, setDetailsPopup }) {
  return (
    <div className={style.detailsPopup}>
      <div>
        <h1>Planet Details</h1>
        <p>NAME: {planet.planet_name}</p>

        <p>TEMP.: {planet.temperature}</p>
        <p>STRUCT.: {planet.structure}</p>
        <p>MASS: {planet.mass}</p>
        <p>GRAVITY: {planet.gravity}</p>
        <p>DIST. FROM EARTH: {planet.distance_from_earth}</p>
        <p>ROT. DUR.: {planet.rotation_duration}</p>
        <p>REV. DUR.: {planet.revolution_duration}</p>
        <p>NO. OF MOONS: {planet.no_of_moons}</p>
      </div>

      <MyGlobe globeImageUrl={planet.map_image} width={500} height={500} />
      <div className={style.exitButtonContainer}>
        <Button
          className={style.exitButton}
          onClick={() => setDetailsPopup(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
