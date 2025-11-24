import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import GarmentModel from './GarmentModel';
import FallbackModel from './FallbackModel';
import { Eye, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

const VIEW_PRESETS = {
  front: { position: [0, 0, 5], rotation: [0, 0, 0], label: 'Front' },
  back: { position: [0, 0, -5], rotation: [0, Math.PI, 0], label: 'Back' },
  left: { position: [-5, 0, 0], rotation: [0, Math.PI / 2, 0], label: 'Left' },
  right: { position: [5, 0, 0], rotation: [0, -Math.PI / 2, 0], label: 'Right' },
  top: { position: [0, 5, 0], rotation: [-Math.PI / 2, 0, 0], label: 'Top' },
};

export default function ModelCanvas({
  modelPath,
  showControls = true,
  enableAutoRotate = false,
  enableOrbitControls = true,
  enableZoom = true,
  enablePan = false
}) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentView, setCurrentView] = useState('front');
  const [autoRotate, setAutoRotate] = useState(enableAutoRotate);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  const handleError = (error) => {
    console.error('ModelCanvas error:', error);
    setErrorMessage(error.message);
    setHasError(true);
  };

  useEffect(() => {
    console.log('ModelCanvas mounted with modelPath:', modelPath);
  }, [modelPath]);

  if (hasError) {
    console.log('Showing fallback due to error:', errorMessage);
    return <FallbackModel />;
  }

  return (
    <div className="w-full h-full relative">
      {/* View Controls */}
      {showControls && (
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {/* View Selector */}
          <div className="bg-black/40 backdrop-blur-md rounded-lg border border-white/10 p-2">
            <div className="flex items-center gap-2 mb-2 px-2">
              <Eye className="w-4 h-4 text-white/60" />
              <span className="text-xs text-white/60 font-medium">View</span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {Object.entries(VIEW_PRESETS).map(([key, view]) => (
                <button
                  key={key}
                  onClick={() => setCurrentView(key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-all ${
                    currentView === key
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>

          {/* Auto-rotate Toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
              autoRotate
                ? 'bg-white text-black border-white'
                : 'bg-black/40 text-white/70 border-white/10 hover:bg-white/10'
            } backdrop-blur-md`}
          >
            <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} />
            <span className="text-xs font-medium">Rotate</span>
          </button>

          {/* Zoom Controls */}
          <div className="bg-black/40 backdrop-blur-md rounded-lg border border-white/10 p-2">
            <div className="flex items-center gap-2 mb-2 px-2">
              <ZoomIn className="w-4 h-4 text-white/60" />
              <span className="text-xs text-white/60 font-medium">Zoom</span>
            </div>
            <div className="flex flex-col gap-1">
              <button
                onClick={handleZoomIn}
                disabled={zoom >= 3}
                className="flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium rounded transition-all bg-white/10 text-white/70 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>In</span>
              </button>
              <button
                onClick={handleResetZoom}
                className="px-3 py-1 text-xs font-medium rounded transition-all bg-white/10 text-white/70 hover:bg-white/20"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
                className="flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium rounded transition-all bg-white/10 text-white/70 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ZoomOut className="w-3.5 h-3.5" />
                <span>Out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <Canvas
        camera={{ position: [1, 0, 2], fov: 45 }}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          console.log('Canvas created successfully');
          gl.setClearColor('#000000', 0);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <GarmentModel
            modelPath={modelPath}
            onError={handleError}
            viewRotation={VIEW_PRESETS[currentView].rotation}
            autoRotate={autoRotate}
            zoom={zoom}
            enableControls={enableOrbitControls}
            enableZoom={enableZoom}
            enablePan={enablePan}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
