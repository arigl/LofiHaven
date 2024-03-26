/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 GamingRoom.glb --transform 
Files: GamingRoom.glb [30.19MB] > C:\Users\alexr\Documents\Development\Lofi site\public\GamingRoom-transformed.glb [2.01MB] (93%)
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { GameLights } from "../Lights/GameLights";
import * as THREE from "three";

import { VideoTexture } from "three";
import { Stormtrooper } from "../Interactables/Stormtrooper";

export function GamingRoom(props) {
  const { nodes, materials } = useGLTF("/Gaming-transformed.glb");
  const { size, camera } = useThree();
  const videoTexture = useRef(null);
  const video = document.createElement("video");
  const [showVideo, setShowVideo] = useState(true);

  // camera.setViewOffset(
  //   size.width,
  //   size.height,
  //   0,
  //   -140,
  //   size.width,
  //   size.height
  // );

  camera.position.set(100, 0, 100);

  const loadVideoTexture = () => {
    //const video = document.createElement("video");
    console.log("load video texture");
    if (videoTexture.current) {
      console.log("current");
    }
    video.src = "/Videos/Fireplace10.mp4";
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.play();
    videoTexture.current = new VideoTexture(video);
    videoTexture.current.minFilter = THREE.LinearFilter;
    videoTexture.current.magFilter = THREE.LinearFilter;
    videoTexture.current.format = THREE.RGBAFormat;
    videoTexture.current.flipY = false;
  };

  useEffect(() => {
    console.log("use effect");
    if (showVideo == true) {
      loadVideoTexture();
    }
  }, [videoTexture]);

  const clickHandler = () => {
    // console.log("click TV");
    // if (showVideo == true) {
    //   video.pause();
    //   setShowVideo(false);
    //   videoTexture.current = null; // Reset video texture
    // } else {
    //   loadVideoTexture();
    // }
  };

  return (
    <group {...props} dispose={null}>
      <GameLights />
      <OrbitControls
        makeDefault
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        enableZoom={true}
        enablePan={true}
        zoomSpeed={0.3}
      />
      <Stormtrooper />
      <primitive object={nodes.spine} />
      <lineSegments
        geometry={nodes.Xbox_Series_X.geometry}
        material={materials.PaletteMaterial001}
        position={[3.021, 0.126, -3.391]}
        scale={2}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials.PaletteMaterial001}
        position={[-3.297, 1.285, 0.117]}
        rotation={[0, -0.028, 0]}
        scale={[0.224, 0.151, 0.244]}
        castShadow
        receiveShadow
      />
      <group position={[2.068, 0, 1.241]} scale={[3.46, 3.58, 3.28]}>
        <mesh
          geometry={nodes.Mesh_tableCoffeeGlass.geometry}
          material={materials.PaletteMaterial002}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh_tableCoffeeGlass_1.geometry}
          material={materials.PaletteMaterial003}
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
        position={[1.636, 0.003, 1.381]}
        scale={[2.05, 1, 2.45]}
        receiveShadow
      />
      <group position={[-3.153, 0, 3.033]} scale={[0.754, 0.864, 0.894]}>
        <mesh
          geometry={nodes.Plane050.geometry}
          material={materials["screen-arcade"]}
        />
        <mesh
          geometry={nodes.Plane050_1.geometry}
          material={materials["arcade-header"]}
        />
        <mesh
          geometry={nodes.Plane050_2.geometry}
          material={materials.PaletteMaterial005}
        />
      </group>
      <mesh
        geometry={nodes.Poster.geometry}
        material={materials.poster1}
        position={[-1.398, 2.228, -4]}
      />
      <group position={[1.352, 0.18, -2.98]} scale={0.2}>
        <mesh
          geometry={nodes.Plane034.geometry}
          material={materials.PaletteMaterial008}
        />
        <mesh
          geometry={nodes.Plane034_1.geometry}
          material={materials["Material.032"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials.screen}
        position={[-3.341, 2.357, 0.117]}
        rotation={[0, -0.005, 0]}
        scale={[0.15, 0.3, 0.3]}
      />
      <mesh
        geometry={nodes.Plane033.geometry}
        material={materials.PaletteMaterial004}
        position={[-3.153, 0, 3.033]}
        scale={[0.754, 0.864, 0.894]}
      />
      <group
        position={[0.786, 0.816, 0.563]}
        rotation={[-1.695, 0.034, 1.875]}
        scale={[2.587, 2.042, 2.41]}
      >
        <mesh
          geometry={nodes.book_cover005_1.geometry}
          material={materials["book_cover.005"]}
        />
        <mesh
          geometry={nodes.book_cover005_2.geometry}
          material={materials.book_paper}
        />
      </group>
      <mesh
        geometry={nodes.book_cover006.geometry}
        material={materials["book_cover.006"]}
        position={[0.786, 0.873, 0.563]}
        rotation={[-1.631, 0.024, 1.715]}
        scale={[2.613, 2.009, 2.41]}
      />
      <mesh
        geometry={nodes.book_cover007.geometry}
        material={materials["book_cover.007"]}
        position={[2.413, 0.872, 1.094]}
        rotation={[-1.785, -0.044, -0.527]}
        scale={[2.154, 2.494, 2.411]}
      />
      {/* {loadVideoTexture()} */}
      <group
        position={[1.492, 2.084, -3.444]}
        scale={[2.66, 2.41, 2.62]}
        onClick={clickHandler}
      >
        <mesh
          geometry={nodes.TV_1.geometry}
          //material={materials["Screen (tv)"]}
          material={new THREE.MeshBasicMaterial({ map: videoTexture.current })}
        />
        <mesh
          geometry={nodes.TV_2.geometry}
          material={materials.PaletteMaterial006}
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials.PaletteMaterial007}
        position={[1.352, 0.18, -2.98]}
        scale={0.2}
      />
      <mesh
        geometry={nodes.BaseBoolean.geometry}
        material={nodes.BaseBoolean.material}
        position={[0.098, 0.245, -3.153]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.954}
      />
      <group
        position={[0.098, 0.601, -3.154]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={2}
      >
        <mesh
          geometry={nodes.MainFrame004.geometry}
          material={materials.PaletteMaterial009}
        />
        <mesh
          geometry={nodes.MainFrame004_1.geometry}
          material={materials.PaletteMaterial010}
        />
      </group>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.PaletteMaterial011}
        position={[3.03, 0.627, -3.337]}
        scale={2}
      />
      {/* <skinnedMesh
        geometry={nodes.Circle011.geometry}
        material={materials.PaletteMaterial001}
        skeleton={nodes.Circle011.skeleton}
        position={[-3.206, -0.05, -2.935]}
        rotation={[0, 1.025, 0]}
        scale={2.064}
        castShadow
        receiveShadow
      /> */}
      {/* <skinnedMesh
        geometry={nodes.Circle012.geometry}
        material={materials.PaletteMaterial001}
        skeleton={nodes.Circle012.skeleton}
        position={[-3.206, -0.05, -2.935]}
        rotation={[0, 1.025, 0]}
        scale={2.064}
        castShadow
        receiveShadow
      /> */}
      <group
        position={[-3.206, -0.05, -2.935]}
        rotation={[0, 1.025, 0]}
        scale={2.064}
        castShadow
        receiveShadow
      >
        {/* <skinnedMesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Mesh_1.skeleton}
          castShadow
          receiveShadow
        />
        <skinnedMesh
          geometry={nodes.Mesh_2.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Mesh_2.skeleton}
          castShadow
          receiveShadow
        /> */}
      </group>
      <mesh
        geometry={nodes.Plane_1.geometry}
        material={materials["Wood Floor"]}
        receiveShadow
      />
      <mesh
        geometry={nodes.Plane_2.geometry}
        material={materials["Sci-Fi Panel"]}
        c
        receiveShadow
      />
      <instancedMesh
        args={[nodes.Plane012.geometry, materials.PaletteMaterial001, 5]}
        instanceMatrix={nodes.Plane012.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Plane012_1.geometry, materials.PaletteMaterial001, 5]}
        instanceMatrix={nodes.Plane012_1.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("/Gaming-transformed.glb");
