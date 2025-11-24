# Download a Sample 3D garment Model

Since you need to add your own 3D garment model, here are the steps:

## Option 1: Use Your Own Model
1. Export your garment from your 3D software (Blender, CLO3D, Marvelous Designer, etc.)
2. Save as `.glb` format
3. Place it in `/public/models/garment.glb`

## Option 2: Download a Free Sample

### From Sketchfab (Free CC Models):
1. Go to https://sketchfab.com/search?q=clothing&type=models&features=downloadable
2. Find a model with "Download 3D Model" button
3. Select "glTF" format when downloading
4. Extract and place the `.glb` file in `/public/models/garment.glb`

### Recommended Free Models:
- Search "t-shirt 3d model free glb"
- Search "dress 3d model free download"
- Search "jacket 3d model glb"

### Quick Test Model:
For testing purposes, you can use this command to download a simple shirt model:

```bash
# Example: Download from a free CDN (update URL with actual free model)
# Note: Replace with your actual model URL
curl -o public/models/garment.glb "YOUR_MODEL_URL_HERE"
```

## Model Requirements:
- Format: `.glb` or `.gltf`
- Size: < 5MB recommended
- Centered at origin (0,0,0)
- Upright orientation (Y-up preferred)

## After Adding Your Model:
1. Refresh your browser
2. The model should appear on the left side of the hero section
3. It will auto-rotate and be interactive with mouse controls
