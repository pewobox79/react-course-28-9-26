import Button from "./Button"

type TypographyProps = {
    title: string
    variant?: "h1" | "h2" | "p" | "blockquote"
    hasButton: boolean
    buttonLabel?: string
}

function Typography({ title, variant, hasButton, buttonLabel }: TypographyProps) {

    //const { title, variant } = props // destructuring Object

    //early return wenn title nicht vorhanden => dann soll nichts ausgegeben werden!
    if (!title) {
        console.warn("title fehlt")
        return
    }

    const Tag = variant || "h1";
    return <>
        <Tag>{title || ""}</Tag>
        {hasButton && <Button label={buttonLabel || ""} />}
    </>
}

export default Typography