import React, { useState, useEffect } from "react";

function Timer(props) {
  const totalSeconds = props.hours * 3600 + props.minutes * 60 + props.seconds;
  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timer);
          // play sound effect
          // different sound for each scene
          props.setClockActive(false);
          return 0;
        }
      });

      // SET THE NEW CLOCK TEXT
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const remainingSeconds = time % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    props.setTimerText(
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0")
    );
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      <p>{formatTime(seconds)}</p>
    </div>
  );
}

export default Timer;
