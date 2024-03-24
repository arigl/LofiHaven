import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useGLTF, useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Journal } from "../Interactables/Journal";
import { Clock } from "../Interactables/Clock";
import { PerspectiveCamera } from "@react-three/drei";
import { useState } from "react";

import { CozyLights } from "../Lights/CozyLights";
export function ChillRoom(props) {
  const { nodes, materials } = useGLTF("/Chillroom-transformed.glb");
  const { size } = useThree();
  const aspect = size.width / size.height;

  const [isFocused, setIsFocused] = useState(false);

  const { position } = useControls({
    position: {
      value: { x: -0.76, y: 6.19, z: -3.31 },
      step: 0.01,
    },
  });

  const clockCameraProps = {
    fov: 75,
    aspect,
    near: 0.1,
    far: 1000,
    position: [3.4, 2.7, -2.3], // Adjust camera position as needed
  };

  const handleFocus = (bool) => {
    console.log("handle focus");
    setIsFocused(bool);
    console.log(isFocused);
  };
  return (
    <group {...props} dispose={null}>
      <CozyLights />
      <Journal />
      <Clock
        isFocused={isFocused}
        setIsFocused={handleFocus}
        clockActive={props.clockActive}
        setClockActive={props.setClockActive}
        clockTimes={props.clockTimes}
        setClockTimes={props.setClockTimes}
        timerText={props.timerText}
        setTimerText={props.setTimerText}
      />
      {!isFocused && (
        <OrbitControls
          // makeDefault
          // minDistance={1}
          // // originally 10 for min
          // maxDistance={50}
          // maxPolarAngle={Math.PI / 2}
          // // enablePan={false}
          makeDefault
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableZoom={true}
          enablePan={true}
          zoomSpeed={0.3}
        />
      )}

      {/* <BakeShadows /> */}
      {/* <SoftShadows size={ 25 } samples={ 10 } focus={ 0 } /> */}

      {isFocused && <PerspectiveCamera makeDefault {...clockCameraProps} />}
      <mesh
        geometry={nodes.Roundcube.geometry}
        material={materials["Wood.006"]}
        position={[-0.619, 1.313, 2.467]}
        scale={0.7}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Plane018.geometry}
        material={materials.PaletteMaterial001}
        position={[-1.791, 1.821, 2.546]}
        rotation={[0, 0.255, 0]}
        scale={0.6}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Wood.009"]}
        position={[1.92, 3.96, -3.7]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Plane010.geometry}
        material={materials["Material.012"]}
        position={[-2.229, 4.723, 0.291]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.PaletteMaterial003}
        position={[1.99, 5.37, -3.635]}
        castShadow
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={nodes.Circle004.material}
        position={[-1.09, 1.822, 2.977]}
        rotation={[-Math.PI, 1.536, -Math.PI]}
        scale={0.4}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials["Wood wall"]}
        position={[-2.33, 3.353, 0.098]}
        scale={[0.596, 1, 2.28]}
        receiveShadow
      />
      <mesh
        geometry={nodes.Bean_Bag.geometry}
        material={materials.Test}
        position={[4.39, 0, 2.24]}
        rotation={[0, -0.733, 0]}
        scale={2.2}
        castShadow
        receiveShadow
      />
      <group
        position={[-2.17, 4.77, 2.83]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 2.26, 1]}
      >
        <mesh geometry={nodes.Cube023.geometry} material={materials.Carvalho} />
        <mesh
          geometry={nodes.Cube023_1.geometry}
          material={materials.quadro_figura}
        />
      </group>
      <mesh
        geometry={nodes.Plane019.geometry}
        material={materials.PaletteMaterial002}
        position={[-1.791, 1.821, 2.546]}
        rotation={[0, 0.255, 0]}
        scale={0.6}
      />
      <group
        position={[-0.623, 6.308, -3.454]}
        rotation={[2.214, 0, 0]}
        scale={0.603}
      >
        {/* <mesh
          geometry={nodes.Mesh_4.geometry}
          material={materials.PaletteMaterial004}
        /> */}
        {/* <mesh
          geometry={nodes.Mesh_5.geometry}
          material={materials.PaletteMaterial005}
        /> */}
      </group>
      {/* <instancedMesh
        args={[nodes.Mesh_3.geometry, materials.PaletteMaterial001, 8]}
        instanceMatrix={nodes.Mesh_3.instanceMatrix}
      /> */}
    </group>
  );
}

useGLTF.preload("/Chillroom-transformed.glb");
