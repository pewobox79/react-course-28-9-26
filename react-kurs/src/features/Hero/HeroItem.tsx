type HeroImageProps = {
    src: string
    alt: string
    className: string
    width: string
    height: string
}

export default function HeroItem({ src, alt, width, height, className }: HeroImageProps) {

    return <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
    />
}