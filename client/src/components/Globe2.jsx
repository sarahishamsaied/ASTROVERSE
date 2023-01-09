import Globe from "react-globe.gl";
// import arcsData from "./data";
import { useRef, useState, useEffect } from "react";
import { Blockquote, Button } from "arwes";
import Popup from "./Popup";
import { Text } from "@arwes/core";
export default function Globe2({ landingData, width, height, globeImageUrl }) {
  const [showPopup, setShowPopup] = useState(false);
  const [latitdue, setLatitude] = useState(-5.6);
  const [longitude, setLongitude] = useState(800);
  const [duration, setDuration] = useState(5000);

  console.log(landingData);
  const globeEl = useRef();
  const arcsData = landingData.map((landing) => {
    return {
      startLat: 31.791702,
      startLng: -7.09262,
      endLat: landing.lat,
      endLng: landing.lng,
      color: "#FF1654",
      arcDashLength: 0.5,
      arcDashGap: 0.5,
      arcDashInitialGap: 0,
      arcStroke: 1,
      arcCurveResolution: 50,
      arcCircularResolution: 2,
      arcDashAnimateTime: 1000,
    };
  });
  return (
    <div className="App">
      <Button
        style={{
          position: "absolute",
          top: "10%",
          right: "2%",
          zIndex: 1000,
        }}
        onClick={() => {
          globeEl.current.pointOfView(
            { lat: latitdue, lng: longitude },
            duration
          );
        }}
      >
        ARC SHOT
      </Button>
      <Blockquote>
        <Text
          style={{ position: "absolute", top: "15%", zIndex: 100, right: "2%" }}
        >
          lat:{latitdue} lng: {longitude}
        </Text>
      </Blockquote>

      <Button
        style={{ position: "absolute", top: "10%", zIndex: 100, right: "10%" }}
        onClick={() => setShowPopup(!showPopup)}
      >
        Camera Settings
      </Button>
      {showPopup && (
        <Popup
          setDuration={setDuration}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          setShowPopup={setShowPopup}
        />
      )}
      <Globe
        pointOfView
        ref={globeEl}
        globeImageUrl={globeImageUrl}
        backgroundImageUrl="/img/night-sky.png"
        // edges
        arcsData={arcsData}
        arcColor={"color"}
        //arcDashLength={() => 0.5}
        arcDashGap={(d) => 1 - (d.stroke - 0.1)}
        arcDashAnimateTime={(d) => 5000}
        arcStroke={"stroke"}
        //arcCircularResolution={64}
        // arcLabel={() => "test"}
        // labels
        labelsData={landingData}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.mission_name}
        labelSize={1}
        labelDotRadius={1}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        labelResolution={2}
        // bars
        hexBinPointsData={landingData}
        hexBinPointWeight="size"
        hexAltitude={0.2}
        hexBinResolution={4}
        hexBinMerge={true}
        enablePointerInteraction={false}
      />
    </div>
  );
}
