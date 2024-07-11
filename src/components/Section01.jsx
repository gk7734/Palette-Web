import './Section01.scss';
import Con1Btn from "./Con1Btn.jsx";
import Arrow from '../assets/arrow.json'
import {useRef, memo} from "react";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import {gsap} from "gsap";

const INITIAL_ANIMATIONS = [
    { id: 'P', from: { opacity: 0, rotateX: 180 }, to: { opacity: 1, rotateX: 0, duration: 0.8, ease: "power1.in" } },
    { id: 'I1', from: { opacity: 1, y: -220, x: 30 }, to: { opacity: 1, y: 30, duration: 0.7, ease: "power2.inOut" } },
    { id: 'A', from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0, duration: 0.7 } },
    { id: 'L', from: { opacity: 0, y: -100 }, to: { delay: 1, opacity: 1, y: 0, duration: 0.7, ease: 'bounce.out' } },
    { id: 'One', from: { y: 170, x: 10, opacity: 0 }, to: { opacity: 1, rotateZ: 360, duration: 1.3, y: -120 } },
    { id: 'E', from: { opacity: 0, y: 50 }, to: { delay: 1.6, opacity: 1, y: -122, duration: 0.6 } },
    { id: 'T', from: { opacity: 0, x: -100 }, to: { opacity: 1, delay: 2.2, x: 0, duration: 0.7 } },
    { id: 'T1', from: { opacity: 0, x: -200 }, to: { opacity: 1, delay: 2.2, x: 0, duration: 0.8 } },
    { id: 'E1', from: { y: -220 }, to: { delay: 1.4, y: 0, duration: 0.8, ease: "power1.inOut" } },
    { id: 'A1', from: { y: -220, x: 40 }, to: { delay: 3.2, y: -1, duration: 0.6 } },
    { id: 'I', from: { opacity: 0, x: 50 }, to: { opacity: 1, delay: 3.2, y: -282, duration: 0.6 } },
    { id: 'cusBtn', from: { opacity: 0, y: -300, x: 10 }, to: { opacity: 1, delay: 0.2, duration: 0.9 } }
];

const animateElement = (id, fromVars, toVars) => {
    gsap.fromTo(`#${id}`, fromVars, toVars);
};

const useAnimations = () => {
    useGSAP(async () => {
        const [ScrollTo] = await Promise.all([
            import("gsap/ScrollToPlugin").then(m => m.ScrollToPlugin),
        ]);

        gsap.registerPlugin(ScrollTo);

        const tl = gsap.timeline();

        INITIAL_ANIMATIONS.forEach(({ id, from, to }) => {
            if (id === 'I1' || id === 'One' || id === 'cusBtn') {
                tl.fromTo(`#${id}`, from, to);
            } else {
                animateElement(id, from, to);
            }
        });

        tl.to('#I1', { y: -220, duration: 0.6 });
    }, []);
};

const CircleElement = memo(() => (
    <div id="One" style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        background: "#FFF",
        opacity: 1,
    }}>
        <div style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#000",
            opacity: 1,
        }}/>
    </div>
));

const Section01 = () => {
    const arrowDownRef = useRef(null);
    useAnimations();

    const clickHandler = (e) => {
        e.preventDefault();
        gsap.to(window, {
            scrollTo: '.con2-container',
            duration: 1,
            overwrite: "auto"
        });
    };

    return (
        <section className="con1">
            <div className="text-container">
                <div className="home-hero-text">
                    <span id='P'>P</span>
                    <span id='A'>a</span>
                    <span id='L'>l</span>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <CircleElement />
                        <span id='E'>e</span>
                    </div>
                    <span id='T'>t</span>
                    <span id='T1'>t</span>
                    <span id='E1'>e</span>
                    <span id='A1'>A</span>
                    <div style={{display: "flex", flexDirection: "column",}}>
                        <span id='I1' style={{fontSize: "280px", fontWeight: 500}}>1</span>
                        <span id='I'>I</span>
                    </div>
                </div>
            </div>
            <div className="cusBtn" style={{ transform: "translateY(-200px)" }}>
                <Con1Btn />
            </div>
            <div ref={arrowDownRef} style={{ width: '110px', transform: 'translateX(48vw)', cursor: 'pointer' }} onClick={clickHandler}>
                <Lottie animationData={Arrow} loop={true} width={10} height={20}/>
            </div>
        </section>
    );
};

export default Section01;
