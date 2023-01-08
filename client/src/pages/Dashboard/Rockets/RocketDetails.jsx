import React from "react";
import { Button, Frame } from "arwes";
import style from "./rocketstable.module.css";

export default function RocketDetails({ rocket, setDetailsPopup }) {
  return (
    <Frame className={style.detailsPopup}>
      <button
        onClick={() => setDetailsPopup(false)}
        className={style.exitButton}
      >
        x
      </button>
      <h1>{rocket.rocket_name}</h1>
      <p>Capacity: {rocket.capacity}</p>
      <p>Mass: {rocket.mass}</p>
      <p>Fuel: {rocket.fuel}</p>
      <p>Wight: {rocket.weight}</p>
      <p>Thrust: {rocket.thrust}</p>
      <p>Momentum: {rocket.momentum}</p>
      <p>Velocity: {rocket.velocity}</p>
      <p>Type: {rocket.rocket_type}</p>
      <p>Added At: {rocket.createdAt}</p>
    </Frame>
  );
}
