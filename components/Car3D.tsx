"use client";

import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

// Detect if device is mobile for performance optimization
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return isMobile;
}

function BMWM3Model() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Auto-rotate animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
    // Subtle floating animation
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0, Math.PI * 0.15, 0]}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <group>
          {/* === BODY STRUCTURE === */}
          
          {/* Lower body/chassis - aggressive and wide */}
          <mesh position={[0, 0.35, 0]} castShadow>
            <boxGeometry args={[3.2, 0.5, 1.65]} />
            <meshStandardMaterial
              color="#0d0d0d"
              metalness={0.95}
              roughness={0.08}
              envMapIntensity={2}
            />
          </mesh>

          {/* Upper body - sleek profile */}
          <mesh position={[0, 0.75, 0]} castShadow>
            <boxGeometry args={[2.8, 0.4, 1.55]} />
            <meshStandardMaterial
              color="#0d0d0d"
              metalness={0.95}
              roughness={0.08}
              envMapIntensity={2}
            />
          </mesh>

          {/* Roof/Cabin - M3 coupe style */}
          <mesh position={[-0.1, 1.15, 0]} castShadow>
            <boxGeometry args={[1.6, 0.55, 1.45]} />
            <meshStandardMaterial
              color="#0d0d0d"
              metalness={0.95}
              roughness={0.08}
              envMapIntensity={2}
            />
          </mesh>

          {/* === BMW SIGNATURE FEATURES === */}

          {/* Front bumper - aggressive M3 style */}
          <mesh position={[1.5, 0.3, 0]} castShadow>
            <boxGeometry args={[0.3, 0.4, 1.7]} />
            <meshStandardMaterial
              color="#0a0a0a"
              metalness={0.9}
              roughness={0.15}
            />
          </mesh>

          {/* BMW Kidney Grille - Left */}
          <mesh position={[1.62, 0.45, -0.25]} castShadow>
            <boxGeometry args={[0.08, 0.35, 0.25]} />
            <meshStandardMaterial
              color="#1a1a1a"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>

          {/* BMW Kidney Grille - Right */}
          <mesh position={[1.62, 0.45, 0.25]} castShadow>
            <boxGeometry args={[0.08, 0.35, 0.25]} />
            <meshStandardMaterial
              color="#1a1a1a"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>

          {/* M3 Badge area - Yellow accent */}
          <mesh position={[1.55, 0.28, 0]} castShadow>
            <boxGeometry args={[0.05, 0.08, 0.3]} />
            <meshStandardMaterial
              color="#e4ff54"
              emissive="#e4ff54"
              emissiveIntensity={0.5}
              metalness={0.4}
              roughness={0.2}
            />
          </mesh>

          {/* Headlights - Left */}
          <mesh position={[1.55, 0.55, -0.6]} castShadow>
            <boxGeometry args={[0.12, 0.18, 0.35]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.6}
              metalness={0.1}
              roughness={0.1}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Headlights - Right */}
          <mesh position={[1.55, 0.55, 0.6]} castShadow>
            <boxGeometry args={[0.12, 0.18, 0.35]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.6}
              metalness={0.1}
              roughness={0.1}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Windshield - front */}
          <mesh position={[0.6, 1.18, 0]} rotation={[0, 0, -0.15]} castShadow>
            <boxGeometry args={[0.5, 0.5, 1.4]} />
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.1}
              roughness={0.02}
              transparent
              opacity={0.25}
            />
          </mesh>

          {/* Rear windshield */}
          <mesh position={[-0.8, 1.1, 0]} rotation={[0, 0, 0.2]} castShadow>
            <boxGeometry args={[0.4, 0.45, 1.4]} />
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.1}
              roughness={0.02}
              transparent
              opacity={0.25}
            />
          </mesh>

          {/* Side windows - Left */}
          <mesh position={[0, 1.15, 0.73]} castShadow>
            <boxGeometry args={[1.4, 0.4, 0.02]} />
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.1}
              roughness={0.02}
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* Side windows - Right */}
          <mesh position={[0, 1.15, -0.73]} castShadow>
            <boxGeometry args={[1.4, 0.4, 0.02]} />
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.1}
              roughness={0.02}
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* === WHEELS - M3 Performance Style === */}

          {/* Front Left Wheel */}
          <mesh position={[1.1, 0.2, 0.95]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Rim - Front Left */}
          <mesh position={[1.1, 0.2, 0.95]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.36, 32]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* Front Right Wheel */}
          <mesh position={[1.1, 0.2, -0.95]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Rim - Front Right */}
          <mesh position={[1.1, 0.2, -0.95]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.36, 32]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* Rear Left Wheel */}
          <mesh position={[-1.1, 0.2, 0.95]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Rim - Rear Left */}
          <mesh position={[-1.1, 0.2, 0.95]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.36, 32]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* Rear Right Wheel */}
          <mesh position={[-1.1, 0.2, -0.95]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.15} />
          </mesh>
          {/* Rim - Rear Right */}
          <mesh position={[-1.1, 0.2, -0.95]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.36, 32]} />
            <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.1} />
          </mesh>

          {/* === M3 BRANDING & DETAILS === */}

          {/* M3 Side stripe - Left (Yellow accent) */}
          <mesh position={[0.2, 0.7, 0.83]} castShadow>
            <boxGeometry args={[2.2, 0.06, 0.08]} />
            <meshStandardMaterial
              color="#e4ff54"
              emissive="#e4ff54"
              emissiveIntensity={0.4}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>

          {/* M3 Side stripe - Right (Yellow accent) */}
          <mesh position={[0.2, 0.7, -0.83]} castShadow>
            <boxGeometry args={[2.2, 0.06, 0.08]} />
            <meshStandardMaterial
              color="#e4ff54"
              emissive="#e4ff54"
              emissiveIntensity={0.4}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>

          {/* Rear spoiler - M3 style */}
          <mesh position={[-1.5, 1.0, 0]} castShadow>
            <boxGeometry args={[0.15, 0.08, 1.5]} />
            <meshStandardMaterial
              color="#0a0a0a"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Rear diffuser */}
          <mesh position={[-1.5, 0.15, 0]} castShadow>
            <boxGeometry args={[0.2, 0.25, 1.6]} />
            <meshStandardMaterial
              color="#1a1a1a"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Exhaust tips - Left */}
          <mesh position={[-1.55, 0.18, 0.5]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
            <meshStandardMaterial
              color="#4a4a4a"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>

          {/* Exhaust tips - Right */}
          <mesh position={[-1.55, 0.18, -0.5]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
            <meshStandardMaterial
              color="#4a4a4a"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>

          {/* Side mirrors - Left */}
          <mesh position={[0.7, 1.15, 0.85]} castShadow>
            <boxGeometry args={[0.15, 0.12, 0.08]} />
            <meshStandardMaterial
              color="#0d0d0d"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Side mirrors - Right */}
          <mesh position={[0.7, 1.15, -0.85]} castShadow>
            <boxGeometry args={[0.15, 0.12, 0.08]} />
            <meshStandardMaterial
              color="#0d0d0d"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Rear lights - Left */}
          <mesh position={[-1.55, 0.5, 0.65]} castShadow>
            <boxGeometry args={[0.12, 0.22, 0.25]} />
            <meshStandardMaterial
              color="#ff0000"
              emissive="#ff0000"
              emissiveIntensity={0.3}
              metalness={0.2}
              roughness={0.2}
              transparent
              opacity={0.8}
            />
          </mesh>

          {/* Rear lights - Right */}
          <mesh position={[-1.55, 0.5, -0.65]} castShadow>
            <boxGeometry args={[0.12, 0.22, 0.25]} />
            <meshStandardMaterial
              color="#ff0000"
              emissive="#ff0000"
              emissiveIntensity={0.3}
              metalness={0.2}
              roughness={0.2}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[6, 2.5, 6]} fov={45} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate={false}
        rotateSpeed={0.5}
      />

      {/* Premium lighting setup for BMW M3 */}
      <ambientLight intensity={0.4} />
      
      {/* Main directional light (Sun) */}
      <directionalLight
        position={[15, 12, 8]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill light from the back */}
      <directionalLight
        position={[-10, 8, -10]}
        intensity={0.8}
        color="#ffffff"
      />
      
      {/* Accent lights for highlights */}
      <pointLight position={[5, 3, 5]} intensity={1.2} color="#e4ff54" distance={15} />
      <pointLight position={[-5, 2, -5]} intensity={0.6} color="#ffffff" distance={12} />
      
      {/* Rim light for edge definition */}
      <spotLight
        position={[0, 8, -8]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        color="#ffffff"
        castShadow
      />
      
      {/* Environment lighting for realistic reflections */}
      <Environment preset="city" environmentIntensity={1.2} />

      <BMWM3Model />

      {/* Ground plane with realistic shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.4} />
      </mesh>

      {/* Subtle ground reflection effect */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
          opacity={0.15}
          transparent
        />
      </mesh>
    </>
  );
}

export default function Car3D() {
  const isMobile = useIsMobile();
  
  return (
    <div className="h-full w-full">
      <Canvas
        shadows={!isMobile} // Disable shadows on mobile for better performance
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower pixel ratio on mobile
        performance={{ min: 0.5 }} // Allow frame rate to drop if needed
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
