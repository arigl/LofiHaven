import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "./Model";
import { Environment } from "@react-three/drei";
import { StringLights } from "./Lights/StringLights";
import Rain from "./Rain";
import { IconContext } from "react-icons"; // for customizing the icons
import { RiFullscreenFill } from "react-icons/ri";
import { useControls } from "leva";

export default function Experience(props) {
  const { ambientIntensity } = useControls({ ambientIntensity: 1.5 });
  const { directionalIntensity } = useControls({ directionalIntensity: 3 });

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
      <StringLights />
      {/* (props.isEnvironment && <Rain />) */}
      <Rain isWeather={props.isWeather} />
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
