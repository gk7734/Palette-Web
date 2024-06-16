import './Section01.scss';
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";
import Con1Btn from "./Con1Btn.jsx";
import Lottie from "lottie-react";
import Arrow from '../assets/arrow.json'

const Section01 = () => {

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo('#P', {
            opacity: 0,
            rotateX: 180

        }, {
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "power1.in"
        })
        gsap.fromTo('#I1', {
            opacity: 1,
            y: -220,
            X: 40,
        }, {
            opacity: 1,
            y: 30,
            duration: 0.8,
            ease: "power2.inOut"
        })
        tl.fromTo('#A', {
            opacity: 0,
            y: 100,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
        })
        gsap.fromTo('#L', {
            opacity: 0,
            y: -100,
        }, {
            delay: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'bounce.out'
        })
        tl.fromTo("#One", {
            y: 170,
            x: 10,
            opacity: 0,
        }, {
            opacity: 1,
            rotateZ: 360,
            duration: 1.4,
            y: -120,
        })
        gsap.fromTo('#E', {
            opacity: 0,
            y: 50,
        }, {
            delay: 1.6,
            opacity: 1,
            y: -122,
            duration: 0.6,
        })

        gsap.fromTo('#T', {
            opacity: 0,
            x: -100,
        }, {
            opacity: 1,
            delay: 2.2,
            x: 0,
            duration: 0.8
        })
        gsap.fromTo('#T1', {
            opacity: 0,
            x: -200,
        }, {
            opacity: 1,
            delay: 2.2,
            x: 0,
            duration: 0.9
        })
        gsap.fromTo('#E1', {
            y: -220,
        }, {
            delay: 1.4,
            y: 0,
            duration: 0.8,
            ease: "power1.inOut"
        })
        gsap.fromTo('#A1', {
            y: -220,
            x: 40,
        }, {
            delay: 3.2,
            y: -1,
            duration: 0.6,
        })
        tl.to('#I1', {
            y: -220,
            duration: 0.6
        })
        gsap.fromTo("#I", {
            opacity: 0,
            x: 50,
        }, {
            opacity: 1,
            delay: 3.2,
            y: -282,
            duration: 0.6,
        })
        tl.fromTo(".cusBtn", {
            opacity: 0,
            y: -300,
            x: 10,
        }, {
            opacity: 1,
            delay: 0.2,
            y: -250,
            duration: 1
        })

    }, []);

    return (
        <section className="con1">
            <div className="text-container">
                <div className="home-hero-text">
                    <span id={'P'}>P</span>
                    <span id={'A'}>a</span>
                    <span id={'L'}>l</span>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div id={"One"} style={{
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
                        <span id={'E'}>e</span>
                    </div>
                    <span id={'T'}>t</span>
                    <span id={'T1'}>t</span>
                    <span id={'E1'}>e</span>
                    <span id={'A1'}>A</span>
                    <div style={{display: "flex", flexDirection: "column",}}>
                        <span id={'I1'} style={{fontSize: "280px", fontWeight: 400}}>1</span>
                        <span id={'I'}>I</span>
                    </div>
                </div>
            </div>
            <div className={`cusBtn`}>
                <Con1Btn />
            </div>
            <div style={{ width: '110px', transform: 'translateX(48vw)' }}>
                <Lottie animationData={Arrow} loop={true} width={10} height={20}/>
            </div>
        </section>
    );
};

export default Section01;