import React from "react";
import style from "./rocketform.module.css";
export default function SolidRocket() {
  return (
    <div class={style.sketchfab}>
      {" "}
      <iframe
        className={style.sketchfab}
        title="Sputnik and Sputnik Rocket"
        frameborder="0"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/1031d4788b0a4330bb15502c7f0eb849/embed"
      >
        {" "}
      </iframe>{" "}
      <p
        style={{
          fontSize: " 13px",
          fontWeight: " normal",
          margin: "5px",
          color: " #4A4A4A",
        }}
      >
        {" "}
        <a
          href="https://sketchfab.com/3d-models/sputnik-and-sputnik-rocket-1031d4788b0a4330bb15502c7f0eb849?utm_medium=embed&utm_campaign=share-popup&utm_content=1031d4788b0a4330bb15502c7f0eb849"
          target="_blank"
          style={{ fontWeight: " bold", color: "#1CAAD9" }}
          rel="noreferrer"
        >
          {" "}
          Sputnik and Sputnik Rocket{" "}
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/msanjurj?utm_medium=embed&utm_campaign=share-popup&utm_content=1031d4788b0a4330bb15502c7f0eb849"
          target="_blank"
          style={{ fontWeight: " bold", color: "#1CAAD9" }}
          rel="noreferrer"
        >
          {" "}
          msanjurj{" "}
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1031d4788b0a4330bb15502c7f0eb849"
          target="_blank"
          style={{ fontWeight: " bold", color: "#1CAAD9" }}
          rel="noreferrer"
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
}
