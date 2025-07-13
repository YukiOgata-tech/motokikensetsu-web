"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";

const texturePaths = [
  "/images/textures/wood.png",
  "/images/textures/concrete.png",
  "/images/textures/metal.png",
  "/images/textures/grass.png"
];
const blockLabels = ["木材", "コンクリ", "鉄", "芝"];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function FloatingBlock({ idx, texture, label }) {
  const ref = useRef();
  const x = getRandom(-8, 8);
  const y = getRandom(-6, 6);
  const z = getRandom(-6, -2);
  const size = getRandom(0.8, 1.5);
  const speed = useRef(0.001 + Math.random() * 0.003).current;
  const phase = useRef(Math.random() * Math.PI * 2).current;

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += speed * 1.1;
      ref.current.rotation.y += speed * 0.7;
      ref.current.position.y = y + Math.sin(state.clock.elapsedTime * speed * 2 + idx + phase) * 0.7;
    }
  });

  return (
    <mesh ref={ref} position={[x, y, z]} castShadow>
      {/* 立方体に！ */}
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      {/* <Html center style={{fontSize: '10px', color:'#000'}}>{label}</Html> */}
    </mesh>
  );
}

export default function BackgroundBlocks() {
  const textures = useLoader(TextureLoader, texturePaths);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 65 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 15]} intensity={0.4} />
        {[...Array(17)].map((_, i) => {
          const typeIdx = Math.floor(Math.random() * textures.length);
          return (
            <FloatingBlock
              key={i}
              idx={i}
              texture={textures[typeIdx]}
              label={blockLabels[typeIdx]}
            />
          );
        })}
      </Canvas>
      <style jsx>{`
        div {
          filter: blur(0.001px) brightness(1);
          opacity: 0.98;
        }
      `}</style>
    </div>
  );
}
