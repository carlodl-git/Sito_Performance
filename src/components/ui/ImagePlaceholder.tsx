type ImagePlaceholderProps = {
  width?: number;
  height?: number;
  label?: string;
  className?: string;
  aspect?: "hero" | "card" | "square" | "video";
};

const aspectClasses = {
  hero: "aspect-hero",
  card: "aspect-card",
  square: "aspect-square",
  video: "aspect-video",
};

export function ImagePlaceholder({
  width = 1200,
  height = 600,
  label = "Immagine",
  className = "",
  aspect,
}: ImagePlaceholderProps) {
  const aspectClass = aspect ? aspectClasses[aspect] : "";
  return (
    <div
      className={`image-placeholder overflow-hidden rounded-lg ${aspectClass} ${className}`}
      style={!aspect ? { width, height } : undefined}
    >
      <span className="text-center px-4">{label}</span>
    </div>
  );
}
