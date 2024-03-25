/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 String.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function String(props) {
  const { nodes, materials } = useGLTF("/String.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Vert012.geometry}
        material={materials["Black.003"]}
        position={[-1.074, 6.459, -3.454]}
      >
        <mesh
          geometry={nodes.Circle019.geometry}
          material={materials["Metal.002"]}
          position={[-0.014, -0.086, -0.029]}
        />
        <mesh
          geometry={nodes.Circle020.geometry}
          material={materials["Metal.002"]}
          position={[6.529, -0.168, -0.029]}
        />
        <mesh
          geometry={nodes.Circle021.geometry}
          material={materials["Metal.002"]}
          position={[4.762, 0.066, -0.029]}
        />
        <mesh
          geometry={nodes.Circle022.geometry}
          material={materials["Metal.002"]}
          position={[2.185, -0.034, -0.029]}
        />
        <group
          position={[0.451, -0.152, 0]}
          rotation={[2.214, 0, 0]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_2.geometry}
            material={nodes.Mesh_2.material}
          />
        </group>
        <group
          position={[1.044, -0.161, 0]}
          rotation={[2.244, -0.274, 0.212]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_3.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_4.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_5.geometry}
            material={nodes.Mesh_5.material}
          />
        </group>
        <group
          position={[1.643, -0.071, 0]}
          rotation={[2.262, -0.346, 0.274]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_6.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_7.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_8.geometry}
            material={nodes.Mesh_8.material}
          />
        </group>
        <group
          position={[2.205, 0.019, 0]}
          rotation={[2.239, 0.251, -0.193]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_9.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_10.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_11.geometry}
            material={nodes.Mesh_11.material}
          />
        </group>
        <group
          position={[2.816, -0.125, 0]}
          rotation={[2.248, -0.291, 0.227]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_12.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_13.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_14.geometry}
            material={nodes.Mesh_14.material}
          />
        </group>
        <group
          position={[3.508, -0.201, 0]}
          rotation={[2.242, 0.266, -0.206]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Sphere002_1.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Sphere002_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Sphere002_3.geometry}
            material={nodes.Sphere002_3.material}
          />
        </group>
        <group
          position={[4.124, -0.058, 0]}
          rotation={[2.214, 0, 0]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_15.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_16.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_17.geometry}
            material={nodes.Mesh_17.material}
          />
        </group>
        <group
          position={[4.731, 0.114, 0]}
          rotation={[2.23, 0.201, -0.153]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_18.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_19.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_20.geometry}
            material={nodes.Mesh_20.material}
          />
        </group>
        <group
          position={[5.316, -0.004, 0]}
          rotation={[2.246, -0.283, 0.22]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_21.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_22.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_23.geometry}
            material={nodes.Mesh_23.material}
          />
        </group>
        <group
          position={[5.985, -0.125, 0]}
          rotation={[2.228, 0.191, -0.146]}
          scale={0.603}
        >
          <mesh
            geometry={nodes.Mesh_24.geometry}
            material={materials["Metal.002"]}
          />
          <mesh
            geometry={nodes.Mesh_25.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Mesh_26.geometry}
            material={nodes.Mesh_26.material}
          />
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload("/String.glb");
