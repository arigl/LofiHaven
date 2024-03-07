import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "./Model";
import { Environment } from "@react-three/drei";
import Rain from "./Rain";
import { IconContext } from "react-icons"; // for customizing the icons
import { RiFullscreenFill } from "react-icons/ri";
import { useControls } from "leva";

export default function Experience(props) {
  const { ambientIntensity } = useControls({ ambientIntensity: 1.5 });
  const { directionalIntensity } = useControls({ directionalIntensity: 3 });

  console.log(props);
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls
        makeDefault
        minDistance={10}
        maxDistance={25}
        maxPolarAngle={Math.PI / 2}
        // enablePan={false}
      />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={directionalIntensity}
      />
      <ambientLight intensity={ambientIntensity} />
      <Model />
      {/* (props.isEnvironment && <Rain />) */}
      <Rain isWeather={props.isWeather} />
      {props.isEnvironment && (
        <Environment
          files="rainforest_trail_4k.hdr"
          background
          near={1}
          far={5}
          resolution={2000}
          // ground={{
          //   height: 15, // Height of the camera that was used to create the env map (Default: 15)
          //   radius: 60, // Radius of the world. (Default 60)
          //   scale: 1000, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
          // }}
        />
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
