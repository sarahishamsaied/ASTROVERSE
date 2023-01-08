import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
export default function MyGlobe({
  backgroundImageUrl,
  globeImageUrl,
  width,
  height,
}) {
  const MAP_CENTER = { lat: 88.6, lng: 96.6, altitude: 1.7 };
  const globeEl = useRef();
  const N = 10;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    maxR: Math.random() * 20 + 3,
    propagationSpeed: (Math.random() - 0.5) * 20 + 1,
    repeatPeriod: Math.random() * 2000 + 200,
  }));

  const colorInterpolator = (t) => `rgba(255,100,50,${Math.sqrt(1 - t)})`;
  useEffect(() => {
    globeEl.current.pointOfView(MAP_CENTER, 4000);
    setTimeout(() =>
      globeEl.current.pointOfView({ lat: -5.6, lng: 26.6, altitude: 2 }, 5000)
    );
  });
  useEffect(() => {
    setTimeout(() => {
      // wait for scene to be populated (asynchronously)
      const directionalLight = globeEl.current
        .scene()
        .children.find((obj3d) => obj3d.type === "DirectionalLight");
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
  }, []);
  return (
    <div>
      <Globe
        ref={globeEl}
        animateIn={true}
        bumpImageUrl="/img/earth-topology.png"
        backgroundImageUrl={backgroundImageUrl ? backgroundImageUrl : null}
        backgroundColor={"rgba(0, 0, 0, 0)"}
        globeImageUrl={globeImageUrl ? globeImageUrl : "/img/earth-night.jpg"}
        ringsData={gData}
        ringColor={() => colorInterpolator}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        width={width}
        height={height}
      />
      ,
    </div>
  );
}
