import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

let camera,
  renderer,
  flash,
  rain,
  rainGeo,
  rainCount = 15000;

const Rain = (props) => {
  //   const rainCount = 1000; // Number of raindrops
  const rainRef = useRef(); // Reference for rain particles
  const { scene } = useThree(); // Access the scene

  useEffect(() => {
    if (props.isWeather) {
      const positions = [];
      const velocities = [];

      // Create raindrop vertices
      for (let i = 0; i < rainCount; i++) {
        positions.push(Math.random() * 400 - 200); // x position
        positions.push(Math.random() * 500 - 250); // y position
        positions.push(Math.random() * 400 - 200); // z position

        velocities.push(0); // x velocity
        velocities.push(0); // y velocity
        velocities.push(0); // z velocity
      }

      const rainGeo = new THREE.BufferGeometry();
      rainGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      rainGeo.setAttribute(
        "velocity",
        new THREE.Float32BufferAttribute(velocities, 3)
      );

      const material = new THREE.PointsMaterial({
        color: 0x697a8c,
        size: 0.3,
        transparent: true,
      });

      // Create rain particles
      const rain = new THREE.Points(rainGeo, material);
      rainRef.current = rain;

      // Add rain particles to the scene
      scene.add(rain);

      // Animate
      const animate = () => {
        rainGeo.attributes.position.array.forEach((p, i) => {
          if (i % 3 === 1) {
            rainGeo.attributes.position.array[i] -= 0.25 + Math.random() * 0.1;
            if (rainGeo.attributes.position.array[i] < -250) {
              rainGeo.attributes.position.array[i] = 250;
            }
          }
        });
        rainGeo.attributes.position.needsUpdate = true;
        rain.rotation.y += 0.002;

        requestAnimationFrame(animate);
      };

      animate();
      // Cleanup function to remove rain particles on unmount
      return () => {
        scene.remove(rain);
      };
    } else {
    }
  }, [props.isWeather]);

  return null;
};

// function animate() {
//   rainGeo.vertices.forEach((p) => {
//     p.velocity -= 0.1 + Math.random() * 0.1;
//     p.y += p.velocity;
//     if (p.y < -200) {
//       p.y = 200;
//       p.velocity = 0;
//     }
//   });
//   rainGeo.verticesNeedUpdate = true;
//   rain.rotation.y += 0.002;

//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

export default Rain;
