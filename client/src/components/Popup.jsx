import { Button } from "arwes";
import React from "react";

export default function Popup({
  setLatitude,
  setLongitude,
  setDuration,
  setShowPopup,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "30%",
        width: "300px",
        height: "400px",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "white",
        zIndex: 1000000,
        borderRadius: "10px",
        padding: "40px",
        border: "1px solid white",
      }}
    >
      <label htmlFor="">END LAT.</label> :
      <input
        type="number"
        className="inputControl"
        onChange={(e) => setLatitude(e.target.value)}
      />
      <label htmlFor="">LNG LAT.</label> :
      <input
        type="number"
        className="inputControl"
        onChange={(e) => setLongitude(e.target.value)}
      />
      <label htmlFor="">DURA.</label> :
      <input
        type="number"
        className="inputControl"
        onChange={(e) => setDuration(e.target.value)}
      />
      <Button
        onClick={() => {
          setShowPopup(false);
        }}
      >
        EXIT
      </Button>
    </div>
  );
}
