# Home Section Components

## Available Animation Components

### `<MatrixRain />`
- **Purpose**: Animated matrix-style falling characters background
- **Props**: `className?: string`
- **Usage**: `<MatrixRain className="custom-styles" />`

### `<BackgroundOverlay />`
- **Purpose**: Gradient overlay for better text readability
- **Props**: `className?: string`
- **Usage**: `<BackgroundOverlay />`

### `<ProfileImage />`
- **Purpose**: Animated profile image with glow effects
- **Props**: 
  - `src: string` (required)
  - `className?: string`
  - `size?: "sm" | "md" | "lg"`
- **Usage**: `<ProfileImage src={image} size="md" className="mb-6" />`

### `<AnimatedTitle />`
- **Purpose**: Fade-in animated title text
- **Props**:
  - `children: React.ReactNode` (required)
  - `className?: string`
  - `delay?: number`
- **Usage**: `<AnimatedTitle delay={0.5}>Your Title</AnimatedTitle>`

## Keywords for Quick Access

- **Matrix**: Use `MatrixRain` component
- **Background**: Use `BackgroundOverlay` component  
- **Profile**: Use `ProfileImage` component
- **Title**: Use `AnimatedTitle` component
- **Glow**: Built into `ProfileImage` component
- **Fade**: Built into `AnimatedTitle` component
- **Responsive**: All components are responsive by default

## File Structure

```
src/components/Home/
├── Home.tsx          # Main component (clean, keyword-based)
├── Animation.tsx     # All animation logic and components
└── README.md         # This reference file
```