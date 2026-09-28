type TypographyProps ={
    title: string
    variant?: "h1" | "h2" | "p" | "blockquote"
}

function Typography({ title, variant }:TypographyProps){
    
    //const { title, variant } = props // destructuring Object

    //early return wenn title nicht vorhanden => dann soll nichts ausgegeben werden!
    if(!title) {
        console.warn("title fehlt")
        return 
    }

    const Tag = variant || "h1";
    return <Tag>{title || ""}</Tag>
}

export default Typography