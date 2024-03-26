import React, { useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { Text3D, OrbitControls } from "@react-three/drei";

// might be worth using buttons instead of input fields due to responsiveness

export function Clock(props) {
  const { nodes, materials } = useGLTF("/Alarm2.glb");
  const { camera } = useThree();
  const clockRef = useRef();
  //const [timerText, setTimerText] = useState("00:00:00");

  const [inputFocused, setInputFocused] = useState(false);

  const clickHandler = () => {
    console.log("clicked");
    props.setIsFocused(true);
  };

  const pointerEnterHandler = () => {
    //console.log("pointer enter journal");
    //console.log(props.isFocused);
    //console.log(camera.position);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("submit");

    // Get all input fields by their class name
    const inputs = document.querySelectorAll(".timerInput");

    // Initialize an array to store input values
    const inputValues = [];

    // Iterate through all input fields
    inputs.forEach((input) => {
      console.log(input.value);
      if (input.value != "") {
        if (input.value != null) {
          inputValues.push(input.value); // Push input values to the array
        }
      } else {
        inputValues.push("0");
      }
    });

    console.log(inputValues);

    // Concatenate all input values with a colon separator
    const concatenatedText = inputValues.join(":");

    // Set the concatenated text to the timerText state
    props.setClockTimes(
      parseInt(inputValues[0], 10),
      parseInt(inputValues[1], 10),
      parseInt(inputValues[2], 10)
    );
    props.setClockActive(true);

    //props.setTimerText(inputValues[0], inputValues[1], inputValues[2]);
    props.setIsFocused(false);
  };

  const delayAction = () => {
    setTimeout(() => {
      if (props.isFocused && !inputFocused) {
        console.log("You missed!");
        props.setIsFocused(false);
      }
    }, 500); // Delay in milliseconds
  };

  return (
    <group {...props} dispose={null} scale={0.1} position={[3.4, 2.8, -3.4]}>
      {!props.isFocused && (
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          position={[-3.5, -0.5, 2]}
        >
          {props.timerText}
        </Text3D>
      )}
      {props.isFocused && (
        <Html center>
          <form className="timerForm" onSubmit={handleSubmit}>
            <div className="timerDiv">
              <div className="timerDigits">
                <input
                  className="timerInput"
                  type="text"
                  id="hours"
                  name="hours"
                  onFocus={() => {
                    setInputFocused(true);
                    console.log("Input field focused");
                  }}
                  onBlur={() => {
                    setInputFocused(false);
                    console.log("Input field blurred");
                  }}
                ></input>
                <h1 className="timerText">:</h1>
                <input
                  className="timerInput"
                  type="text"
                  id="minutes"
                  name="minutes"
                  onFocus={() => {
                    setInputFocused(true);
                    console.log("Input field focused");
                  }}
                  onBlur={() => {
                    setInputFocused(false);
                    console.log("Input field blurred");
                  }}
                ></input>
                <h1 className="timerText">:</h1>
                <input
                  className="timerInput"
                  type="text"
                  id="seconds"
                  name="seconds"
                  onFocus={() => {
                    setInputFocused(true);
                    console.log("Input field focused");
                  }}
                  onBlur={() => {
                    setInputFocused(false);
                    console.log("Input field blurred");
                  }}
                ></input>
                <input type="submit" value="Submit"></input>
              </div>
              <h1 className="timerText">h : m : s</h1>
            </div>
          </form>
        </Html>
      )}

      <group
        position={[-0.022, 0.054, -0.034]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.05}
        onClick={clickHandler}
        onPointerOver={pointerEnterHandler}
        onPointerMissed={delayAction}
        ref={clockRef}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box005.geometry}
          material={materials["Material #3"]}
          position={[-5.485, -5.703, -102.042]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001.geometry}
          material={materials["Material #2"]}
          position={[-5.485, -5.703, -102.042]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001001.geometry}
          material={materials["Material #3"]}
          position={[-5.485, -5.703, -102.042]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object002001.geometry}
          material={materials["Material #3.001"]}
          position={[-5.485, -5.703, -102.042]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object004001.geometry}
          material={materials["Material #3.001"]}
          position={[-5.485, -5.703, -102.042]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.003"]}
        position={[-0.059, 0.153, 2.094]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.888, 1, 1.836]}
      />
    </group>
  );
}

useGLTF.preload("/Alarm2.glb");
