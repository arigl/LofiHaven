import { Howl } from "howler";
import {
  FaCloudRain,
  FaRegSnowflake,
  FaMusic,
  FaEarlybirds,
} from "react-icons/fa";
import { useState } from "react";
import { IconContext } from "react-icons";

import "../Styles/Menus.css";

export default function SoundEffects() {
  const [isPlaying, setIsPlaying] = useState(false);

  const [expand, setExpand] = useState(false);

  const [rain, setRain] = useState(null);
  const [nature, setNature] = useState(null);

  const [rainVolume, setRainVolume] = useState(0);
  const [natureVolume, setNatureVolume] = useState(0);

  function playRain() {
    if (!rain) {
      const sound = new Howl({
        src: "/sounds/rain.mp3",
        autoplay: true,
        volume: rainVolume,
        onload: () => {
          ///
        },
        onplay: () => {
          //
        },
      });

      setRain(sound);
      //setRainVolume(0.3);
      console.log("rain");
    } else {
      rain.pause();
    }
  }

  function playNature() {
    if (!nature) {
      const sound = new Howl({
        src: "/sounds/nature.mp3",
        autoplay: true,
        volume: natureVolume,
        onload: () => {
          ///
        },
        onplay: () => {
          //
        },
      });

      setNature(sound);
      //setNatureVolume(0.3);
      console.log("nature");
    } else {
      nature.pause();
    }
  }

  function expandMenu() {
    setExpand((prev) => !prev);
  }

  function handleRainVolumeChange(event) {
    if (!rain) {
      const sound = new Howl({
        src: "/sounds/rain.mp3",
        autoplay: true,
        volume: rainVolume,
        onload: () => {
          ///
        },
        onplay: () => {
          //
        },
      });

      setRain(sound);
    }
    setRainVolume(parseFloat(event.target.value)); // Assuming the input range value is between 0 and 10
    if (rain) {
      rain.volume(parseFloat(event.target.value));
    }
  }

  // Function to handle change in nature volume
  function handleNatureVolumeChange(event) {
    if (!nature) {
      const sound = new Howl({
        src: "/sounds/nature.mp3",
        autoplay: true,
        volume: natureVolume,
        onload: () => {
          ///
        },
        onplay: () => {
          //
        },
      });

      setNature(sound);
      //setNatureVolume(0.3);
      console.log("nature");
    }
    setNatureVolume(parseFloat(event.target.value));
    if (nature) {
      nature.volume(parseFloat(event.target.value));
    }
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "140px",
          background: "#070F2B",
          // padding: "10px",
          borderRadius: "5px",
          zIndex: 10000, // Ensure dropdown is above canvas
        }}
      >
        <button
          onClick={() => expandMenu()}
          style={{
            background: "#070F2B",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            // margin: "5px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
            <FaMusic />
          </IconContext.Provider>
        </button>
      </div>
      {expand && (
        <div className="soundMenuExpand">
          <div className="rainControls">
            <button
              className="soundButton"
              onClick={() => playRain()}
              style={{
                background: "#070F2B",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                // margin: "5px",
                padding: "10px",
              }}
            >
              <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
                <FaCloudRain />
              </IconContext.Provider>
            </button>
            <input
              type="range"
              id="rainVolume"
              name="rainVolume"
              min="0"
              max="1"
              step="0.1"
              value={rainVolume} // Convert volume to a range between 0 and 10
              onChange={handleRainVolumeChange}
            />
          </div>
          <div className="natureControls">
            <button
              className="soundButton"
              onClick={() => playNature()}
              style={{
                background: "#070F2B",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                // margin: "5px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
                <FaEarlybirds />
              </IconContext.Provider>
            </button>
            <input
              type="range"
              id="natureVolume"
              name="natureVolume"
              min="0"
              max="1"
              step="0.1"
              value={natureVolume} // Convert volume to a range between 0 and 10
              onChange={handleNatureVolumeChange}
            />
          </div>
        </div>
      )}
    </>
  );
}
