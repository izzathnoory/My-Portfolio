"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * ParticleField - A beautifully animated 3D particle system rendered with
 * Three.js via React Three Fiber. Creates a subtle, floating particle grid
 * that responds to time with gentle sine-wave motion.
 */

const PARTICLE_COUNT = 1200;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);

  // Generate circular texture for particles
  const circleTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d");
    if (context) {
      context.beginPath();
      context.arc(32, 32, 30, 0, Math.PI * 2);
      context.fillStyle = "#ffffff";
      context.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Generate particle positions and randomness factors
  const { positions, randoms } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const rand = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;       // x spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;   // y spread
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;   // z spread
      rand[i] = Math.random();
    }

    return { positions: pos, randoms: rand };
  }, []);

  // Animate particles with gentle floating motion
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const speed = randoms[i] * 0.3 + 0.1;
      const amplitude = randoms[i] * 0.5 + 0.2;

      // Gentle sine-wave floating
      posArray[i3 + 1] += Math.sin(time * speed + randoms[i] * 10) * 0.002 * amplitude;
      posArray[i3] += Math.cos(time * speed * 0.7 + randoms[i] * 5) * 0.001 * amplitude;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.015;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PARTICLE_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture}
        size={0.04}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        alphaTest={0.001}
      />
    </points>
  );
}

function FloatingGrid() {
  const gridRef = useRef<THREE.LineSegments>(null);

  // Create a subtle grid in the background
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const spacing = 2;
    const count = 12;

    for (let i = -count; i <= count; i++) {
      // Horizontal lines
      vertices.push(-count * spacing, 0, i * spacing);
      vertices.push(count * spacing, 0, i * spacing);
      // Vertical lines
      vertices.push(i * spacing, 0, -count * spacing);
      vertices.push(i * spacing, 0, count * spacing);
    }

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    return geo;
  }, []);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.rotation.x = -Math.PI / 2.5;
    gridRef.current.position.y = -5;
    gridRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <lineSegments ref={gridRef} geometry={geometry}>
      <lineBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.04}
        depthWrite={false}
      />
    </lineSegments>
  );
}

export default function ParticleBackground() {
  return (
    <div className="particle-canvas">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <Particles />
        <FloatingGrid />
        {/* Subtle ambient light for depth */}
        <ambientLight intensity={0.3} />
      </Canvas>
    </div>
  );
}
