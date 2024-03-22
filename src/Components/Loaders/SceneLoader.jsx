import { useProgress } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { useState } from "react";

export default function SceneLoader(props) {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [hidden, set] = useState();

  return (
    <Html
      fullscreen
      center
      style={{
        transition: "all 0.5s",
        opacity: hidden ? 0 : 1,
        transform: `scale(${hidden ? 0.5 : 1})`,
      }}
    >
      <div className="startLoader">
        <h1>Welcome to Lofi Haven</h1>
        <p>{progress.toFixed(2)}</p>
        <p>{active}</p>
      </div>
    </Html>
  );
}

// return <Html center>{progress} % loaded</Html>;
