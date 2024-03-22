import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useHelper, OrbitControls, SoftShadows } from "@react-three/drei";

import {
  Sphere,
  useGLTF,
  ContactShadows,
  RandomizedLight,
} from "@react-three/drei";
import { useControls } from "leva";

export function CozyLights(props) {
  const { ambientIntensity } = useControls({
    ambientIntensity: 2,
    step: 0.3,
  });
  const { directionalIntensity } = useControls({ directionalIntensity: 3 });
  const { dlPosition } = useControls({
    dlPosition: {
      value: { x: 5.4, y: 4.9, z: 1.3 },
      step: 0.1,
    },
  });
  const { slPosition } = useControls({
    slPosition: {
      value: { x: 1, y: 2, z: 3 },
      step: 0.01,
    },
  });
  const { plPosition } = useControls({
    plPosition: {
      value: { x: 1, y: 2, z: 3 },
      step: 0.01,
    },
  });
  // const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  return (
    <group>
      <directionalLight
        position={[dlPosition.x, dlPosition.y, dlPosition.z]}
        intensity={directionalIntensity}
        color="#FFA500"
        castShadow
        // shadow-mapSize={[1024, 1024]}
        // shadow-camera-near={1}
        // shadow-camera-far={10}
        // shadow-camera-top={5}
        // shadow-camera-right={5}
        // shadow-camera-bottom={-5}
        // shadow-camera-left={-5}
      />
      {/* <SoftShadows /> */}
      {/* <spotLight
        position={[slPosition.x, slPosition.y, slPosition.z]}
        intensity={10}
        color="#fff"
        penumbra={0.5}
        castShadow={false}
      /> */}
      {/* <planeGeometry position={[0, 0.1, 0]} /> */}
      {/* <ContactShadows position={[0, 0.1, 0]} scale={10} /> */}
      <spotLight
        position={[-1.59, 2.77, -0.15]}
        intensity={10}
        color="#FFA500"
        distance={10}
        decay={5}
        angle={0.6}
        penumbra={0.8}
      />
      {/* <Sphere
        position={[plPosition.x, plPosition.y, plPosition.z]}
        scale={0.1}
      /> */}

      <ambientLight intensity={ambientIntensity} color="#ffffff" />
    </group>
  );
}