import { Button } from "arwes";
import React from "react";
import MyGlobe from "../../components/MyGlobe";

export default function GhadaShehata({ onClickSound }) {
  return (
    <div>
      <h1>GHADA SHEHATA PLANET</h1>
      <Button onClick={onClickSound}>PLAY GHADA SHEHATA</Button>
      <MyGlobe
        globeImageUrl={"/img/ghadaShehata.jpeg"}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
    </div>
  );
}
