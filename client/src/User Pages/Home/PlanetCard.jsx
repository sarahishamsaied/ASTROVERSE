import React from "react";
import style from "./home.module.css";
export default function PlanetCard({
  planetName,
  imgSrc,
  text,
  background,
  linearGradient,
}) {
  return (
    <div
      className={style.card}
      style={{ background: background, linearGradient: linearGradient }}
    >
      <h1>{planetName}</h1>
      <p>{text}</p>
      <img
        style={{
          width: planetName === "Saturn" ? 400 : 250,
          right: planetName === "Saturn" ? "-40%" : "-10%",
        }}
        src={imgSrc}
        alt={planetName}
      />
    </div>
  );
}
