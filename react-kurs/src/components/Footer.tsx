import { memo } from "react"
function Footer ({state}:{state?:boolean}){

    console.log("footer rendered...", state)
    return <footer style={{height: 130, backgroundColor: "lightblue"}}>
        <h3>Footer bereich</h3>
    </footer>
}

export default memo(Footer)