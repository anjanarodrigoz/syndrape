import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';

export default function GarmentModel({
  modelPath = '/models/garment.glb',
  onError,
  viewRotation = [0, 0, 0],
  autoRotate = false,
  zoom = 1,
  enableControls = true,
  enableZoom = true,
  enablePan = false,
  minDistance = 2,
  maxDistance = 10
}) {
  const meshRef = useRef();
  const groupRef = useRef();
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load the model - wrapped in error boundary
  const { scene } = useGLTF(modelPath, true, true, (loader) => {
    loader.manager.onError = (url) => {
      console.error('Error loading 3D model:', url);
      if (onError) onError(new Error(`Failed to load model: ${url}`));
    };
  });

  useEffect(() => {
    if (scene) {
      console.log('Model loaded successfully:', scene);
      setHasLoaded(true);
    } else if (onError && !hasLoaded) {
      console.error('Model scene is null');
      onError(new Error('Model failed to load - scene is null'));
    }
  }, [scene, onError, hasLoaded]);

  if (!scene) {
    return null;
  }

  // Auto-rotate animation
  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      {enableControls && (
        <OrbitControls
          enableZoom={enableZoom}
          enablePan={enablePan}
          enableRotate={!autoRotate}
          minDistance={minDistance}
          maxDistance={maxDistance}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          dampingFactor={0.05}
          enableDamping
        />
      )}
      <Stage environment="city" intensity={1} contactShadow={false}>
        <group ref={groupRef} rotation={viewRotation}>
          <primitive
            ref={meshRef}
            object={scene}
            scale={1.8 * zoom}
            position={[0, 0, 0]}
          />
        </group>
      </Stage>
    </>
  );
}

// Preload the model
useGLTF.preload('/models/garment.glb');
