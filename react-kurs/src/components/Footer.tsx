import { ThemeContext } from "../context/themeContext"
import { memo, useContext } from "react"
function Footer ({state}:{state?:boolean}){

    const themeContextValue = useContext(ThemeContext)
    console.log("footer rendered...", themeContextValue)
    return <footer style={{height: 130, backgroundColor: "lightblue"}}>
        <h3>Footer bereich</h3>
    </footer>
}

export default memo(Footer)