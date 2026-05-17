import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      // Faster rotation
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      
      // Faster mouse follow
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mouse.x * 0.5,
        0.04
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mouse.y * 0.3,
        0.04
      );
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
      <MeshDistortMaterial
        color="#3B82F6"
        attach="material"
        distort={0.5}
        speed={3}
        roughness={0.15}
        metalness={0.9}
      />
    </Sphere>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      // Faster particle rotation
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8B5CF6"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const GlowRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      // Faster ring rotation
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.4;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(clock.getElapsedTime() * 0.6) * 0.15;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.5, 0.03, 16, 100]} />
      <meshBasicMaterial color="#8B5CF6" transparent opacity={0.6} />
    </mesh>
  );
};

const HeroOrb = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#8B5CF6" intensity={0.5} />
        <pointLight position={[10, 10, 5]} color="#3B82F6" intensity={0.5} />
        
        <AnimatedSphere />
        <FloatingParticles />
        <GlowRing />
      </Canvas>
    </div>
  );
};

export default HeroOrb;
