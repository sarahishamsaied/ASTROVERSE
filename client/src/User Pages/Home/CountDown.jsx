import React from "react";
import Countdown from "react-countdown";
import style from "./home.module.css";
export default function CountDown() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return <span>Complete!</span>;
    else
      return (
        <div className={style.countDown}>
          <span className={style.timeContainer}>
            {days} <p>DAYS</p>
          </span>
          :
          <span className={style.timeContainer}>
            {hours} <p>HOURS</p>
          </span>
          :
          <span className={style.timeContainer}>
            {minutes} <p>MINUTES</p>{" "}
          </span>
          :
          <span className={style.timeContainer}>
            {seconds} <p>SECONDS</p>{" "}
          </span>
        </div>
      );
  };
  return <Countdown date={Date.now() + 10000000} renderer={renderer} />;
}
