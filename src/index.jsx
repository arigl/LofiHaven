import "./style.css";
import ReactDOM from "react-dom/client";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience.jsx";
import Player from "./Components/Player.jsx";
import { IconContext } from "react-icons"; // for customizing the icons
import { RiFullscreenFill } from "react-icons/ri";
import { BiExitFullscreen } from "react-icons/bi";
import { IoSparklesSharp } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { FaCloudRain } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { Leva } from "leva";
import { Loader, BakeShadows } from "@react-three/drei";
import musicData from "./data/musicData.js";
import { Analytics } from "@vercel/analytics/react";
import Timer from "./Components/Tools/Timer.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const containerStyle = {
  display: "flex",
  height: "100vh", // 100% viewport height
};

const fullSizeCanvasStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100%",
  // zIndex: 9999, // Ensure canvas is above everything else
};

const normalCanvasStyle = {
  flex: "1", // Fill its container completely
  width: "65vw",
};

const normalPlayerContainerStyle = {
  width: "35%", // Half of the viewport width
  height: "100%", // Adjust as needed
};

const fullscreenPlayerContainerStyle = {
  position: "fixed", // Position fixed to keep it relative to the viewport
  width: "30%", // Adjust as needed
  height: "10%", // Adjust as needed
  left: "50%", // Center horizontally
  bottom: "5%", // 5% up from the bottom
  transform: "translateX(-50%)", // Adjust for horizontal centering
  zIndex: 9999, // Adjust as needed
};

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isWeather, setWeather] = useState("rain");
  const [isEnvironment, setEnvironment] = useState(false);
  const [showWeatherDropdown, setShowWeatherDropdown] = useState(false);
  // const [isLoading, setLoading] = useState(true); // State for tracking loading

  const [clockActive, setClockActive] = useState(false); // for the timer
  const [clockTimes, setClockTimes] = useState([0, 0, 0]);
  const [timerText, setTimerText] = useState("00:00:00");

  const [playList, setPlayList] = useState(musicData.chillMix);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleWeather = () => {
    console.log("toggle enivornment");
    setShowWeatherDropdown(!showWeatherDropdown);
  };

  const handleWeatherChange = (weatherType) => {
    setWeather(weatherType);
    setShowWeatherDropdown(false); // Hide dropdown after selecting an option
  };

  const toggleEnvironment = () => {
    console.log("toggle enivornment");
    setEnvironment(!isEnvironment);
  };

  const handlePlayListChange = (playlist) => {
    setPlayList(playlist);
  };

  const handleClockToggle = (bool) => {
    setClockActive(bool);
  };

  const handleClockTimes = (seconds, minutes, hours) => {
    console.log(seconds);
    console.log(minutes);
    console.log(hours);
    setClockTimes([seconds, minutes, hours]);
    console.log(clockTimes);
  };

  const handleTimerText = (seconds, minutes, hours) => {
    const timerString = seconds + ":" + minutes + ":" + hours;
    setTimerText(timerString);
  };

  return (
    <div style={containerStyle}>
      <Leva hidden />
      <Analytics />
      <div
        style={
          !isFullscreen
            ? normalPlayerContainerStyle
            : fullscreenPlayerContainerStyle
        }
      >
        {
          <Player
            isFullscreen={isFullscreen}
            currentPlaylist={playList}
            setPlayList={handlePlayListChange}
          />
        }
      </div>
      <div style={isFullscreen ? fullSizeCanvasStyle : normalCanvasStyle}>
        <Canvas
          style={isFullscreen ? fullSizeCanvasStyle : normalCanvasStyle}
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [8, 8, 15],
          }}
        >
          <Suspense>
            <Experience
              isEnvironment={isEnvironment}
              isWeather={isWeather}
              currentPlaylist={playList}
              clockActive={clockActive}
              setClockActive={handleClockToggle}
              clockTimes={clockTimes}
              setClockTimes={handleClockTimes}
              timerText={timerText}
              setTimerText={handleTimerText}
            />
            <BakeShadows />
          </Suspense>
        </Canvas>
        <Loader />
        {clockActive && (
          <Timer
            hours={clockTimes[0]}
            minutes={clockTimes[1]}
            seconds={clockTimes[2]}
            clockActive={clockActive}
            setClockActive={handleClockToggle}
            timerText={timerText}
            setTimerText={handleTimerText}
          />
        )}

        <div style={{ position: "absolute", top: "0px", right: "0px" }}>
          {/* Weather toggle button */}
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "75px",
              padding: "10px",
              background: "#070F2B",
              color: "#fff",
              borderRadius: 5,
              border: "none",
              cursor: "pointer",
              zIndex: 10000, // Ensure button is above canvas
            }}
            onClick={toggleWeather}
          >
            <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
              <IoMdSunny />
            </IconContext.Provider>
          </button>

          {/* Weather dropdown */}
          {showWeatherDropdown && (
            <div
              style={{
                position: "absolute",
                top: "55px",
                right: "75px",
                background: "#070F2B",
                // padding: "10px",
                borderRadius: "5px",
                zIndex: 10000, // Ensure dropdown is above canvas
              }}
            >
              {/* Button for each weather type */}
              <button
                onClick={() => handleWeatherChange("rain")}
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
              <button
                onClick={() => handleWeatherChange("snow")}
                style={{
                  background: "#070F2B",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  // margin: "5px",
                  padding: "10px",
                  borderBottomLeftRadius: "5px", // Set bottom left border radius
                  borderBottomRightRadius: "5px", // Set bottom right border radius
                }}
              >
                <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
                  <FaRegSnowflake />
                </IconContext.Provider>
              </button>
              <button
                onClick={() => handleWeatherChange("sparkles")}
                style={{
                  background: "#070F2B",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  // margin: "5px",
                  padding: "10px",
                  borderBottomLeftRadius: "5px", // Set bottom left border radius
                  borderBottomRightRadius: "5px", // Set bottom right border radius
                }}
              >
                <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
                  <IoSparklesSharp />
                </IconContext.Provider>
              </button>
            </div>
          )}
        </div>
        <button
          style={{
            position: "absolute ",
            top: "10px",
            right: "140px",
            padding: "10px",
            background: "#070F2B",
            color: "#fff",
            borderRadius: 5,
            border: "none",
            cursor: "pointer",
            zIndex: 10000, // Ensure button is above canvas
          }}
          onClick={toggleEnvironment}
        >
          <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
            <BiWorld />
          </IconContext.Provider>
        </button>
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "10px",
            background: "#070F2B",
            color: "#fff",
            borderRadius: 5,
            border: "none",
            cursor: "pointer",
            zIndex: 10000, // Ensure button is above canvas
          }}
          onClick={toggleFullscreen}
        >
          {isFullscreen ? (
            <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
              <BiExitFullscreen />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider value={{ size: "2em", color: "#ffffff" }}>
              <RiFullscreenFill />
            </IconContext.Provider>
          )}
        </button>
      </div>
    </div>
  );
}

root.render(<App />);
