import "./style.css";
import ReactDOM from "react-dom/client";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience.jsx";
import Player from "./Components/Player.jsx";
import { IconContext } from "react-icons"; // for customizing the icons
import { RiFullscreenFill } from "react-icons/ri";
import { BiExitFullscreen } from "react-icons/bi";
import { IoMdSunny } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { Leva } from "leva";
import { Loader } from "@react-three/drei";

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
  const [isWeather, setWeather] = useState(true);
  const [isEnvironment, setEnvironment] = useState(false);
  const [isLoading, setLoading] = useState(true); // State for tracking loading

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
      <Leva hidden />
      <div
        style={
          !isFullscreen
            ? normalPlayerContainerStyle
            : fullscreenPlayerContainerStyle
        }
      >
        {<Player isFullscreen={isFullscreen} />}
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
            <Experience isEnvironment={isEnvironment} isWeather={isWeather} />
          </Suspense>
        </Canvas>
        <Loader />
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
