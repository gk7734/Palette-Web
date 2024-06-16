import './App.scss'
import Section01 from "./components/Section01.jsx";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import Navbar from "./components/Navbar.jsx";
import Section02 from "./components/Section02.jsx";
import {Section04} from "./components/Section04.jsx";

function App() {
    const curRef = useRef(null)
    useGSAP(() => {
        gsap.set('.cursor', {
            xPercent: -50, yPercent: -50,
        })

        window.addEventListener('mousemove', e => {
            gsap.to(curRef.current,{
                x:e.clientX,
                y:e.clientY,
                duration: 0.3,
            })
        })
    }, [])

    return (
        <main>
            <Navbar />
            <Section01/>
            <Section02/>
            {/*<Section03 />*/}
            <Section04 />
            {/*<div className={"cursor"} ref={curRef}/>*/}
        </main>
    )
}

export default App
