import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';

import App from "../App";
import { ThemeContext } from "../context/themeContext";

export default function MainLayout({ children }:{children: ReactNode | ReactElement | ReactElement[]}) {

    console.log("main layout rendered...")

    const [context, setContext] = useState("light")
    const [state, setState] = useState(false)

    function handleState(){
        setState(!state)
    }
    return <ThemeContext value={{context, setContext}}>
        <div style={{ border: "2px dotted red" }}>
            <Button sx={{
                width: 300,
                color: 'success.main',
                '& .MuiButtonBase-root': {
                    backgroundColor: 'red',
                },
            }} onClick={handleState} variant="contained" disabled>Hello world</Button>
            {children}
            <Footer  />
        </div>
    </ThemeContext>
}