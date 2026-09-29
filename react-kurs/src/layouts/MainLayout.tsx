import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import App from "../App";

export default function MainLayout({ children }:{children: ReactNode | ReactElement | ReactElement[]}) {

    console.log("main layout rendered...")

    const [state, setState] = useState(false)

    function handleState(){
        setState(!state)
    }
    return <div style={{ border: "2px dotted red" }}>
        <button onClick={handleState}>STATE CHANGE</button>
        {children}
        <Footer />
    </div>
}