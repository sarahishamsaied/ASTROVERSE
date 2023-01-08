import React, { useState } from "react";
import { Footer, Button, Project, Image } from "arwes";
import MyGlobe from "../../components/MyGlobe";
import style from "./home.module.css";
import PlanetCard from "./PlanetCard";
import CountDown from "./CountDown";
export default function UserHomePage() {
  let width = 500;
  return (
    <section className={style.sectionOneContainer}>
      <div className={style.content}>
        <h1>ASTROVERSE</h1>
        <p>
          <i>"THAT’S ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR MANKIND."</i>
        </p>
        <p className={style.neilArmstrong}>
          <i>-Neil Armstrong</i>
        </p>
        <Button>EXPLORE</Button>
      </div>
      <div className={style.globeContainer}>
        <MyGlobe
          backgroundColor={true}
          globeImageUrl={"/img/earth-blue-marble.jpg"}
          width={1456}
          height={900}
        />
      </div>
      <div className={style.sectionTwoContainer}>
        <h1>NEXT LAUNCH IN</h1>
        <CountDown />
        <h1 className={style.planetsTitle}>Planets</h1>
        <PlanetCard
          planetName={"Mercury"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/mercury.png"
        />
        <PlanetCard
          planetName={"Venus"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/venus.png"
        />

        <PlanetCard
          planetName={"Earth"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/earth.png"
        />
        <PlanetCard
          planetName={"Mars"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/mars.png"
        />
        <PlanetCard
          planetName={"Jupiter"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/jupiter.png"
        />

        <PlanetCard
          planetName={"Saturn"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/saturn.png"
        />
        <PlanetCard
          planetName={"Uranus"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/uranus.png"
        />
        <PlanetCard
          planetName={"Neptune"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/neptune.png"
        />

        <PlanetCard
          planetName={"Pluto"}
          text={"lorem ipsum dolor"}
          imgSrc="/img/pluto.png"
        />
      </div>
    </section>
  );
}
