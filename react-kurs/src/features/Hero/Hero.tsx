import { images } from "../../utils/dummyData/imgData";
import HeroItem from "./HeroItem";

export default function Hero() {

    console.log("images", images)
    const HeroItemsToRender = images.map(image => {
        console.log("item", image)
        //ausführliche Version
        return <HeroItem 
                src={image.src} 
                alt={image.alt}
                className={image.className}
                width={image.width}
                height={image.height}
                />

        /* //destrukturierte Version
        const {src, alt, width, height, className} = image
        return <HeroItem
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
        /> */


        /* //professionelle version mit dem SPREAD OPERATOR
        //Wenn props die gleiche bezeichung haben wir die Object props aus .map!!
        
        return <HeroItem {...image}/> */


    })

    console.log("heroitemsToRender", HeroItemsToRender)

    return <div className="hero">

            {HeroItemsToRender}

    </div>
}