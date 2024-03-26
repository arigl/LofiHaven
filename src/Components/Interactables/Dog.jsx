import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";

export function Dog(props) {
  const { nodes, materials, animations } = useGLTF("/Dog.glb");
  const { ref, actions, names } = useAnimations(animations);
  const [playbackSpeed, setPlaybackSpeed] = useState(0.2);

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(actions);
  console.log(animations);

  useEffect(() => {
    // Play animation with slower speed when component mounts
    if (actions && names && names.length > 0) {
      actions[names[0]].setEffectiveTimeScale(playbackSpeed);
      actions[names[0]].play();
    }
  }, [actions, names, playbackSpeed]);

  const clickHandler = () => {
    console.log("clicked dog");
    console.log([names]);
    // if (actions && Array.isArray(actions)) {
    //   // Start playing the animations
    //   actions.forEach((action) => {
    //     action.play();
    //   });
    // } else {
    //   console.error("No animations available or actions is not an array");
    // }
    if (isPlaying == false) {
      const sound = new Howl({
        src: "/sounds/dog.mp3",
        autoplay: false,
        volume: 0.3,
        onplay: () => {
          setIsPlaying(true);
          //requestAnimationFrame(step);
          // console.log(isPlaying);
          // console.log("on play");
          // requestAnimationFrame(step);
        },
        onend: () => {
          setPlaybackSpeed(0.2);
          setIsPlaying(false);
        },
      });
      sound.play();

      setSound(sound);
      setPlaybackSpeed(1.5);
    }
  };

  return (
    <group ref={ref} {...props} dispose={null} onClick={clickHandler}>
      {isPlaying && (
        <Sparkles
          count={100}
          scale={2}
          size={100}
          speed={2}
          color={"#FF69B4"}
          position={[5, 1, -2]}
        />
      )}
      <group name="Scene">
        <group name="skeleton_#0" position={[5, 0, -2]} scale={5.5}>
          <group name="Object_0" />
          <skinnedMesh
            name="Object_0001"
            geometry={nodes.Object_0001.geometry}
            material={materials.mat_0}
            skeleton={nodes.Object_0001.skeleton}
            morphTargetDictionary={nodes.Object_0001.morphTargetDictionary}
            morphTargetInfluences={nodes.Object_0001.morphTargetInfluences}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.Pelvis} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Dog.glb");
