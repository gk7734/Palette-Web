import './App.scss'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useRef, lazy } from "react";
import Navbar from "./components/Navbar.jsx";
import { ScrollTo } from "./components/ScrollTo.jsx";

// 동적 임포트로 변경
const Section01 = lazy(() => import("./components/Section01.jsx"));
const Section02 = lazy(() => import("./components/Section02.jsx"));
const Section04 = lazy(() => import("./components/Section04.jsx").then(module => ({ default: module.Section04 })));
const Section05 = lazy(() => import("./components/Section05.jsx").then(module => ({ default: module.Section05 })));
const Section06 = lazy(() => import("./components/Section06.jsx").then(module => ({ default: module.Section06 })));

function App() {
    const curRef = useRef(null)
    useGSAP(() => {
        gsap.set('.cursor', {
            xPercent: -50, yPercent: -50,
        })

        window.addEventListener('mousemove', e => {
            gsap.to(curRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            })
        })
    }, [])

    return (
        <main>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Section01 />
                <Section02 />
                {/*<Section03 />*/}
                <ScrollTo />
                <Section04 />
                <Section05 />
                <Section06 />
            </Suspense>
            {/*<div className={"cursor"} ref={curRef}/>*/}
        </main>
    )
}

export default App
