import React from "react";
import style from "./rocketform.module.css";
export default function RocketPreview() {
  return (
    <div>
      <div className={style.sketchfab}>
        <iframe
          className={style.sketchfab}
          title="Saturn V rocket"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/4e33a2eb32d04f7c8d7556003040358f/embed"
        ></iframe>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: " 5px",
            color: "#4A4A4A",
          }}
        >
          <a
            href="https://sketchfab.com/3d-models/saturn-v-rocket-4e33a2eb32d04f7c8d7556003040358f?utm_medium=embed&utm_campaign=share-popup&utm_content=4e33a2eb32d04f7c8d7556003040358f"
            target="_blank"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
            rel="noreferrer"
          >
            {" "}
            Saturn V rocket{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/TAIGA-ZOE?utm_medium=embed&utm_campaign=share-popup&utm_content=4e33a2eb32d04f7c8d7556003040358f"
            target="_blank"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
            rel="noreferrer"
          >
            {" "}
            TAIGA-ZOE{" "}
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4e33a2eb32d04f7c8d7556003040358f"
            target="_blank"
            style={{ fontWeight: "bold", color: "#1CAAD9" }}
            rel="noreferrer"
          >
            Sketchfab
          </a>
        </p>
      </div>
    </div>
  );
}
