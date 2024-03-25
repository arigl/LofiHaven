import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { String } from "./String";

export function StringLights(props) {
  let pointLightIntensity = 15;
  let pointLightDistance = 0.2;
  return (
    <group>
      <String />
      <pointLight
        position={[-0.66, 6.19, -3.31]}
        intensity={pointLightIntensity}
        color="#ff0000"
        distance={pointLightDistance}
      />
      <pointLight
        position={[-0.06, 6.19, -3.31]}
        intensity={pointLightIntensity}
        color="#ff7f00"
        distance={pointLightDistance}
      />
      <pointLight
        position={[0.52, 6.26, -3.31]}
        intensity={pointLightIntensity}
        color="#ffff00"
        distance={pointLightDistance}
      />
      <pointLight
        position={[1.11, 6.26, -3.29]}
        intensity={pointLightIntensity}
        color="#7fff00"
        distance={pointLightDistance}
      />
      <pointLight
        position={[1.67, 6.16, -3.32]}
        intensity={pointLightIntensity}
        color="#00ff00"
        distance={pointLightDistance}
      />
      <pointLight
        position={[2.42, 6.07, -3.29]}
        intensity={pointLightIntensity}
        color="#00ff7f"
        distance={pointLightDistance}
      />
      <pointLight
        position={[3.02, 6.23, -3.33]}
        intensity={pointLightIntensity}
        color="#00ffff"
        distance={pointLightDistance}
      />
      <pointLight
        position={[3.66, 6.46, -3.3]}
        intensity={pointLightIntensity}
        color="#007fff"
        distance={pointLightDistance}
      />
      <pointLight
        position={[4.2, 6.31, -3.33]}
        intensity={pointLightIntensity}
        color="#0000ff"
        distance={pointLightDistance}
      />
      <pointLight
        position={[4.92, 6.21, -3.29]}
        intensity={pointLightIntensity}
        color="#7f00ff"
        distance={pointLightDistance}
      />

      {/* <pointLight
          position={[position.x, position.y, position.z]}
          intensity={10}
          color="#0000ff"
          distance={0.2}
        /> */}
    </group>
  );
}
