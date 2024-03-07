import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function StringLights(props) {
  return (
    <group>
      <pointLight
        position={[-0.66, 6.19, -3.31]}
        intensity={10}
        color="#ff0000"
        distance={0.2}
      />
      <pointLight
        position={[-0.06, 6.19, -3.31]}
        intensity={10}
        color="#ff7f00"
        distance={0.2}
      />
      <pointLight
        position={[0.52, 6.26, -3.31]}
        intensity={10}
        color="#ffff00"
        distance={0.2}
      />
      <pointLight
        position={[1.11, 6.26, -3.29]}
        intensity={10}
        color="#7fff00"
        distance={0.2}
      />
      <pointLight
        position={[1.67, 6.16, -3.32]}
        intensity={10}
        color="#00ff00"
        distance={0.2}
      />
      <pointLight
        position={[2.42, 6.07, -3.29]}
        intensity={10}
        color="#00ff7f"
        distance={0.2}
      />
      <pointLight
        position={[3.02, 6.23, -3.33]}
        intensity={10}
        color="#00ffff"
        distance={0.2}
      />
      <pointLight
        position={[3.66, 6.46, -3.3]}
        intensity={10}
        color="#007fff"
        distance={0.2}
      />
      <pointLight
        position={[4.2, 6.31, -3.33]}
        intensity={10}
        color="#0000ff"
        distance={0.2}
      />
      <pointLight
        position={[4.92, 6.21, -3.29]}
        intensity={10}
        color="#7f00ff"
        distance={0.2}
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