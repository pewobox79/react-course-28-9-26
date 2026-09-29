import { useState } from "react"

type HeroImageProps = {
    src: string
    alt: string
    className: string
    width: string
    height: string
    uid:string | number
}

export default function HeroItem({uid, src, alt, width, height, className }: HeroImageProps) {

    const [hasBorder, setHasBorder] = useState(false);
    const [isVisible, setIsVisible] = useState(true)
        
    function toggleBorder(){
        setHasBorder(!hasBorder)
        console.log("inner function", hasBorder, uid)
        
    }
    function toggleVisibility(){
        setIsVisible(!isVisible)
    }
    
    console.log("hasBorder outside", hasBorder, uid)
    return <div style={{display: "flex", flexDirection: "column"}}>
        <img
            onClick={toggleBorder}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={{ border: `${hasBorder ? "1" : "0"}px solid red`, padding: 10, margin: 4, opacity: `${isVisible ? 1 : 0}` }}
        />
        <button onClick={toggleVisibility}>Bild {isVisible ? "Ausblenden": "Einblenden"}</button></div>
}