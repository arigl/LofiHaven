import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "./Model";
import { Environment } from "@react-three/drei";
import Rain from "./Rain";
import { IconContext } from "react-icons"; // for customizing the icons
import { RiFullscreenFill } from "react-icons/ri";

export default function Experience(props) {
  console.log(props);
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls
        makeDefault
        minDistance={10}
        maxDistance={25}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Model />
      {/* (props.isEnvironment && <Rain />) */}
      <Rain isWeather={props.isWeather} />
      {props.isEnvironment && (
        <Environment files="evangelion-1-HDR.hdr" background />
      )}
      {/* <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
    </>
  );
}
