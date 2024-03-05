import "./style.css";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience.jsx";
import Player from "./Components/Player.jsx";
import { IconContext } from "react-icons"; // for customizing the icons
import { RiFullscreenFill } from "react-icons/ri";
import { BiExitFullscreen } from "react-icons/bi";
import { IoMdSunny } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

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
  zIndex: 9999, // Ensure canvas is above everything else
};

const normalCanvasStyle = {
  flex: "1", // Fill its container completely
  width: "50vw",
};

const normalPlayerContainerStyle = {
  width: "50%", // Half of the viewport width
  height: "100%", // Adjust as needed
};

function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isWeather, setWeather] = useState(true);
  const [isEnvironment, setEnvironment] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleWeather = () => {
    console.log("toggle enivornment");
    setWeather(!isWeather);
  };

  const toggleEnvironment = () => {
    console.log("toggle enivornment");
    setEnvironment(!isEnvironment);
  };

  return (
    <div style={containerStyle}>
      <div
        style={!isFullscreen ? normalPlayerContainerStyle : { display: "none" }}
      >
        {<Player />}
      </div>
      <div style={isFullscreen ? fullSizeCanvasStyle : normalCanvasStyle}>
        <Canvas
          style={isFullscreen ? fullSizeCanvasStyle : normalCanvasStyle}
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [8, 13, 13],
          }}
        >
          <Experience isEnvironment={isEnvironment} isWeather={isWeather} />
        </Canvas>
        <button
          style={{
            position: "absolute ",
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
