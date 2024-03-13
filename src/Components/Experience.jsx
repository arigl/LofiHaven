import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { PerspectiveCamera, Sparkles } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Model } from "./Scenes/Model.jsx";
import { GameRoom } from "./Scenes/GameRoom";
import { Environment } from "@react-three/drei";
import { StringLights } from "./Lights/StringLights";
import Rain from "./Weather/Rain.js";
import { IconContext } from "react-icons"; // for customizing the icons
import { RiFullscreenFill } from "react-icons/ri";
import { useControls } from "leva";
import musicData from "../data/musicData";
import React, { useRef, useState } from "react";
import Snow from "./Weather/Snow.js";

export default function Experience(props) {
  const { ambientIntensity } = useControls({ ambientIntensity: 1.5 });
  const { directionalIntensity } = useControls({ directionalIntensity: 3 });

  const { size } = useThree();
  const aspect = size.width / size.height;

  const [isFocusedOn, setIsFocused] = useState(false);
  const sparkleSize = 8;
  const amount = 500;

  // Define camera properties
  const cameraProps = {
    fov: 75,
    aspect,
    near: 0.1,
    far: 1000,
    position: [3.4, 2.7, -2.3], // Adjust camera position as needed
  };

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={directionalIntensity}
        // shadow-mapSize={[1024, 1024]}
        // shadow-camera-near={1}
        // shadow-camera-far={10}
        // shadow-camera-top={5}
        // shadow-camera-right={5}
        // shadow-camera-bottom={-5}
        // shadow-camera-left={-5}
      />
      <ambientLight intensity={ambientIntensity} />
      {props.currentPlaylist === musicData.chillMix && (
        <Model
          clockActive={props.clockActive}
          setClockActive={props.setClockActive}
          clockTimes={props.clockTimes}
          setClockTimes={props.setClockTimes}
          timerText={props.timerText}
          setTimerText={props.setTimerText}
        />
      )}
      {props.currentPlaylist === musicData.gamingMix && <GameRoom />}
      {props.currentPlaylist === musicData.jazzMix && (
        <Model
          clockActive={props.clockActive}
          setClockActive={props.setClockActive}
          clockTimes={props.clockTimes}
          setClockTimes={props.setClockTimes}
          timerText={props.timerText}
          setTimerText={props.setTimerText}
        />
      )}
      <StringLights />
      {props.isWeather == "rain" && <Rain isWeather={props.isWeather} />}
      {props.isWeather == "sparkles" && (
        <Sparkles
          count={amount}
          scale={20}
          size={6}
          speed={2.4}
          color={"#00FF00"}
          position={[1, 2, 0]}
        />
      )}
      {props.isWeather == "snow" && <Snow isWeather={props.isWeather} />}

      {props.isEnvironment && (
        <Environment
          files="rainforest_trail_4k.hdr"
          background
          near={1}
          far={5}
          resolution={2000}
        />
      )}
    </>
  );
}
