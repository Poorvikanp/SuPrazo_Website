import * as React from "react"

const FORMAT_PRIORITY = ["avif", "webp"]
const WIDTHS = [320, 640, 1024, 1920]

function toOptimizedPath(src) {
  if (!src || typeof src !== "string") return null
  const match = src.match(/^(\/images\/)(.+?\.(png|jpe?g))$/i)
  if (!match) return null
  return { base: match[1], name: match[2].replace(/\.[a-z0-9]+$/i, "") }
}

export function buildSrcSet(base, name, format, widths) {
  return widths.map((w) => `${base}optimized/${name}-${w}.${format} ${w}w`).join(", ")
}

export function buildSizes(sizes) {
  return sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
}

const ImageWrapper = React.forwardRef(({ aspectRatio, className, style, children }, ref) => (
  <span
    ref={ref}
    className={className ? `block relative ${className}` : "block relative"}
    style={aspectRatio ? { aspectRatio, ...style } : style}
  >
    {children}
  </span>
))
ImageWrapper.displayName = "ImageWrapper"

const OptimizedImage = React.forwardRef(
  ({ src, alt, aspectRatio, sizes, className, style, loading = "lazy", decoding = "async", fetchPriority, onLoad, objectFit = "cover", ...props }, ref) => {
    const imgRef = React.useRef(null)
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)

    React.useImperativeHandle(ref, () => imgRef.current)

    const parsed = toOptimizedPath(src)
    const fallbackSrc = hasError ? src : null
    const effectiveSrc = fallbackSrc || src

    if (!effectiveSrc) return null

    const img = (
      <img
        ref={imgRef}
        src={effectiveSrc}
        alt={alt || ""}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={className || "w-full h-full object-cover"}
        style={style}
        onLoad={(e) => { setIsLoaded(true); onLoad?.(e) }}
        onError={() => setHasError(true)}
        {...props}
      />
    )

    if (!parsed || hasError) {
      return <ImageWrapper aspectRatio={aspectRatio}>{img}</ImageWrapper>
    }

    const srcSetEntries = FORMAT_PRIORITY.map((format) => ({
      type: `image/${format}`,
      srcSet: buildSrcSet(parsed.base, parsed.name, format, WIDTHS),
    }))

    const blurSrc = `${parsed.base}optimized/${parsed.name}-blur.webp`

    return (
      <ImageWrapper aspectRatio={aspectRatio}>
        {!isLoaded && (
          <img
            src={blurSrc}
            alt=""
            aria-hidden="true"
            className="w-full h-full inset-0 absolute"
            style={{ objectFit, filter: "blur(10px)", transform: "scale(1.1)" }}
          />
        )}
        <picture>
          {srcSetEntries.map((entry) => (
            <source
              key={entry.type}
              type={entry.type}
              srcSet={entry.srcSet}
              sizes={buildSizes(sizes)}
            />
          ))}
          {img}
        </picture>
      </ImageWrapper>
    )
  }
)
OptimizedImage.displayName = "OptimizedImage"

export default OptimizedImage
