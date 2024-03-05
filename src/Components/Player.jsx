import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import qala from "/music/lofisong.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(qala);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
      min: min,
      sec: secRemain,
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Adjusted to 100%
    width: "50vw", // Adjusted to 50%
    margin: "0 auto", // Center horizontally
  };

  const imageStyle = {
    maxWidth: "50%",
    maxHeight: "50%",
  };

  return (
    <div className="component" style={containerStyle}>
      {/* <h2>Playing Now</h2> */}
      <img className="musicCover" src="/Lofi.jpg" style={imageStyle} />
      <div>
        <h3 className="title">Mixed Emotions</h3>
        <p className="subTitle">samtrax</p>
      </div>
      <div className="controls">
        <div className="time">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          {/* <p>
            {time.min}:{time.sec}
          </p> */}
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
        <div>
          <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="playButton">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}
