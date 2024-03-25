/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Books.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Books(props) {
  const { nodes, materials } = useGLTF("/Books.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane044.geometry}
        material={materials["Material.003"]}
        position={[-1.392, 3.149, -2.906]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.691, 0.863, 0.691]}
      >
        <mesh geometry={nodes.Plane043.geometry} material={materials.White} />
      </mesh>
      <mesh
        geometry={nodes.Plane042.geometry}
        material={materials["BASE POT.001"]}
        position={[-1.367, 2.771, -2.906]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.691, 0.863, 0.691]}
      >
        <mesh geometry={nodes.Plane041.geometry} material={materials.White} />
      </mesh>
      <mesh
        geometry={nodes.Plane040.geometry}
        material={materials["Material.004"]}
        position={[-1.585, 1.369, -2.2]}
        scale={0.606}
      >
        <mesh geometry={nodes.Plane039.geometry} material={materials.White} />
      </mesh>
      <mesh
        geometry={nodes.Plane038.geometry}
        material={materials["Material.007"]}
        position={[-1.774, 1.388, -3.054]}
        rotation={[0.159, 0, 0]}
        scale={0.62}
      >
        <mesh geometry={nodes.Plane037.geometry} material={materials.White} />
      </mesh>
      <mesh
        geometry={nodes.Plane036.geometry}
        material={materials["Material.008"]}
        position={[-1.735, 1.369, -2.59]}
        scale={0.691}
      >
        <mesh geometry={nodes.Plane035.geometry} material={materials.White} />
      </mesh>
      <mesh
        geometry={nodes.Plane034.geometry}
        material={materials["Black.001"]}
        position={[-1.715, 3.792, -2.897]}
        scale={0.62}
      >
        <mesh geometry={nodes.Plane033.geometry} material={materials.White} />
      </mesh>
      <mesh
        geometry={nodes.Plane032.geometry}
        material={materials["BASE POT.001"]}
        position={[-1.631, 3.798, -2.34]}
        rotation={[0.159, 0, 0]}
        scale={0.62}
      >
        <mesh geometry={nodes.Plane031.geometry} material={materials.White} />
      </mesh>
      <mesh
        geometry={nodes.Plane030.geometry}
        material={materials["bg.001"]}
        position={[-1.501, 3.792, -1.881]}
        scale={0.691}
      >
        <mesh geometry={nodes.Plane029.geometry} material={materials.White} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Books.glb");
