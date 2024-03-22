/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Jazz.glb --transform 
Files: Jazz.glb [22.54MB] > C:\Users\alexr\Documents\Development\Lofi site\public\Jazz-transformed.glb [2.07MB] (91%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Jazz-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.PaletteMaterial001} position={[1.75, 5.31, 0]} scale={[1.075, 18.47, 1]} />
      <mesh geometry={nodes.trumpet_Circle006.geometry} material={materials.PaletteMaterial002} position={[5.616, 3.733, 3.822]} rotation={[Math.PI / 2, 0, 0]} scale={0.15} />
      <mesh geometry={nodes.Desk_Top.geometry} material={materials['Desk wood']} position={[-0.076, 1.21, -2.925]} scale={[1.43, 2.366, 2.364]} />
      <mesh geometry={nodes.Cube089.geometry} material={materials.Glass} position={[5.941, 2.987, 0.391]} rotation={[0, Math.PI / 2, 0]} scale={[4.091, 8559757, 0.184]} />
      <mesh geometry={nodes.Floor.geometry} material={materials['Tiling Floor']} position={[1.413, -0.291, 0.16]} scale={[4.35, 0.1, 4.16]} />
      <mesh geometry={nodes.Picture_Frame.geometry} material={materials.poster} position={[5.582, 4.472, -2.028]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={nodes.Picture_Frame001.geometry} material={materials.Material} position={[5.582, 2.795, -2.028]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={nodes.ground001.geometry} material={nodes.ground001.material} position={[-2.457, -0.18, -2.86]} scale={2.5} />
      <mesh geometry={nodes.plant001.geometry} material={materials.PaletteMaterial001} position={[-2.457, -0.18, -2.86]} scale={[2.5, 2.25, 2.5]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.screen} position={[-0.075, 2.36, -3.15]} rotation={[0, -Math.PI / 2, 0]} scale={[0.241, 0.265, 0.289]} />
    </group>
  )
}

useGLTF.preload('/Jazz-transformed.glb')