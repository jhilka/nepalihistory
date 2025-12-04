# Image Download Script

## Usage

When adding a new timeline with remote images:

```bash
npm run download-images data/your-timeline.tsx
```

To re-download and override existing images:

```bash
npm run download-images data/your-timeline.tsx -- --force
```

This will:
1. Download all remote images from URLs in the timeline file
2. Convert them to **AVIF format** (80% quality) for optimal performance
3. Save them to `public/downloaded/` with unique filenames
4. Add `filename` field to each media object
5. The component will use `filename` if available, otherwise fallback to `url`

## Example

Before:
```tsx
media: [{
  url: "https://example.com/image.jpg",
  alt: "Description"
}]
```

After:
```tsx
media: [{
  src: "/downloaded/a1b2c3d4.avif",
  sourceUrl: "https://example.com/image.jpg",
  alt: "Description"
}]
```

The component will render: `/downloaded/a1b2c3d4.avif`

## Benefits

- **50% smaller** file sizes compared to JPEG/PNG
- **Better quality** at same file size
- **Faster loading** for users
- **Automatic** conversion during download
