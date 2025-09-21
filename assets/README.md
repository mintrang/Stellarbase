# Assets Folder

This folder contains static assets for the Stellarbase project.

## Structure

```
assets/
├── images/          # Product images
│   ├── boots/       # Boot product images
│   ├── thumbnails/  # Thumbnail images
│   └── ...
├── videos/          # Product videos
│   ├── sample_video.mp4  # Sample video file
│   └── ...
└── README.md        # This file
```

## Video Files

Place your sample video files in the `videos/` folder. The current setup expects:
- `sample_video.mp4` - Main sample video file

## Image Files

Place your product images in the `images/` folder. You can organize them by:
- Product type (boots, shoes, etc.)
- Image type (thumbnails, full-size, etc.)
- Color variants

## Usage

The application will automatically load assets from these folders using relative paths:
- Videos: `./assets/videos/sample_video.mp4`
- Images: `./assets/images/filename.jpg`

## Supported Formats

- **Videos**: MP4, WebM, OGG
- **Images**: JPG, PNG, WebP, SVG
