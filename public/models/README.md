# 3D Models Directory

## How to Add Your GLTF garment Model

1. **Save your 3D model file** (`.glb` or `.gltf` format) in this directory
2. **Rename it to** `garment.glb` OR update the path in the HeroSection component

### File Location
Place your model file here: `/public/models/garment.glb`

### Supported Formats
- `.glb` (recommended - single binary file)
- `.gltf` (JSON format with separate texture files)

### Recommended Model Specifications
- **File size**: Keep under 5MB for best performance
- **Polygons**: 10k-50k triangles for optimal loading
- **Textures**: Use compressed textures (max 2048x2048)
- **Scale**: Model will be auto-scaled, but ideally centered at origin

### If Using a Different Filename
Update the model path in `/src/features/home/HeroSection.jsx`:
```jsx
<ModelCanvas modelPath="/models/your-filename.glb" />
```

### 3D Model Controls
- **Auto-rotation**: The model rotates automatically
- **Mouse interaction**: Users can drag to rotate and zoom
- **Lighting**: Configured with ambient and spot lights

### Getting Free 3D garment Models
- [Sketchfab](https://sketchfab.com) - Search for "clothing" or "garment"
- [CGTrader](https://www.cgtrader.com) - Free 3D models section
- [TurboSquid](https://www.turbosquid.com) - Free models available
- [Poly Pizza](https://poly.pizza) - CC0 3D models

### Troubleshooting
If the model doesn't appear:
1. Check browser console for errors
2. Verify file path is correct
3. Ensure model is in `.glb` or `.gltf` format
4. Try viewing the model in a GLTF viewer first
5. Check that the file size isn't too large
