// Fallback component shown when model file is not available
export default function FallbackModel() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative w-64 h-64 mx-auto">
          {/* Wireframe cube placeholder */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-3xl animate-pulse" />
          <div className="absolute inset-4 border-2 border-white/10 rounded-2xl animate-pulse animation-delay-100" />
          <div className="absolute inset-8 border-2 border-white/5 rounded-xl animate-pulse animation-delay-200" />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-24 h-24 text-white/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        </div>

        <div className="text-white/40 text-sm max-w-xs mx-auto">
          <p className="mb-2 font-medium">3D Model Placeholder</p>
          <p className="text-xs leading-relaxed">
            Add your garment.glb file to /public/models/ to display your 3D model here
          </p>
        </div>
      </div>
    </div>
  );
}
