import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { OrbitControls } from "@react-three/drei";

export function Journal(props) {
  const { nodes, materials } = useGLTF("/Journal.glb");
  const { camera } = useThree();

  const { position } = useControls({
    position: {
      value: {
        x: 2.1854207345931416,
        y: 4.522136416019444,
        z: 1.2298233854575975,
      },
      step: 0.01,
    },
  });

  const clickHandler = () => {
    console.log("clicked journal");
    // Calculate position to look at
    //const positionToLookAt = new THREE.Vector3(-0.814, 1.791, 1.356);

    // change min distance for orbit controls to 5 when u click on it
    const positionToLookAt = new THREE.Vector3(
      position.x,
      position.y,
      position.z
    );
    // Update camera position and look at the object
    // 2.480389002089786 4.40414756524218 1.1471373633335114
    // 2.1854207345931416 4.522136416019444 1.2298233854575975

    camera.position.copy(positionToLookAt);
    camera.lookAt(positionToLookAt);
  };

  const pointerEnterHandler = () => {
    //console.log("pointer enter journal");
    //console.log(camera.position);
  };

  return (
    <group
      {...props}
      dispose={null}
      onClick={clickHandler}
      onPointerOver={pointerEnterHandler}
      onPointerEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "default";
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials.Black}
        position={[-0.814, 1.791, 1.356]}
        scale={0.7}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027.geometry}
          material={nodes.Plane027.material}
          position={[-0.002, 0.097, 0]}
          scale={0.7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028.geometry}
          material={materials.White}
          position={[-0.002, 0.136, 0]}
          scale={0.7}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Journal.glb");
