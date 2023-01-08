import React from "react";
import MyGlobe from "../../components/MyGlobe";
import { Button } from "arwes";
export default function Carmen({ onClickSound }) {
  return (
    <div>
      <h1>CARMEN FARID</h1>
      <Button onClick={onClickSound}>PLAY EL MALEKA</Button>
      <MyGlobe
        globeImageUrl={"/img/carmen.jpeg"}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
    </div>
  );
}
