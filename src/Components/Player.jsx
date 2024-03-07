import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import qala from "/music/lofisong.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi"; // icons for next and previous track
import { FiVolume2 } from "react-icons/fi";
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
    width: "35vw", // Adjusted to 50%
    margin: "0 auto", // Center horizontally
  };

  const imageHeaderStyle = {
    maxWidth: "30px",
    maxHeight: "30px",
  };

  const seperatorStyle = {
    opacity: "20%",
  };

  return (
    <div className="component" style={containerStyle}>
      {/* <h2>Playing Now</h2> */}
      <div className="header">
        <button className="header--menu--button">
          <img
            className="menu--button--icon"
            src="/Menu.png"
            style={imageHeaderStyle}
          ></img>
        </button>
        <h1 className="header--title">Lofi Haven</h1>
        <h1 style={seperatorStyle}>|</h1>
        <p className="header--subtitle">Now Playing</p>
      </div>
      <div className="overlay-container">
        <img className="musicCover" src="/Lofi.jpg" />

        <div className="timeline--container">
          <div className="time">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            defaultValue="0"
            value={seconds}
            className="timeline"
            onChange={(e) => {
              sound.seek(e.target.value);
            }}
          />
        </div>
        <div>
          <h3 className="title">Mixed Emotions</h3>
          <p className="subTitle">samtrax</p>
        </div>
      </div>

      <div className="controls">
        <button className="volumeButton">
          <IconContext.Provider value={{ size: "2.0em", color: "#ffffff" }}>
            <FiVolume2 />
          </IconContext.Provider>
        </button>
        <button className="prevButton">
          <IconContext.Provider value={{ size: "2.5em", color: "#ffffff" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3.5em", color: "#ffffff" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3.5em", color: "#ffffff" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="nextButton">
          <IconContext.Provider value={{ size: "2.5em", color: "#ffffff" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
        <button className="shuffleButton">
          <IconContext.Provider value={{ size: "2.0em", color: "#ffffff" }}>
            <BiShuffle />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
