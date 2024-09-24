import './Section04.scss'
import {useGSAP} from "@gsap/react";
import flowImg from "../assets/Images/TkVFroPdpV@1x.png"
import posImg from "../assets/Images/pos.png"
import posImg1 from "../assets/Images/pos2.png"
import posImg2 from "../assets/Images/pos3.png"
import logo from "../assets/Images/img.png"
import {gsap} from "gsap";
import {animateBackground, createScrollTrigger} from "./utils.js";

export const Section04 = () => {
    useGSAP(async () => {
        const [ScrollTrigger, TextPlugin] = await Promise.all([
            import("gsap/ScrollTrigger").then(m => m.ScrollTrigger),
            import("gsap/TextPlugin").then(m => m.TextPlugin)
        ]);

        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        gsap.to('.con4-container', {
            scrollTrigger: {
                trigger: '.con4-container',
                start: '300px bottom',
                end: '300px top',
                // markers: true,
                onEnter: () => gsap.to('.scroll-container', { opacity: 1,duration: 0.6}),
            }
        });

        const subText = `Create beautiful promotional <br/>
                   experiences and customer <br/>
                   journeys with powerful,`;
        const subTextGradient = `easy-to-build workflows`;

        // Background animations
        const tlBg = gsap.timeline();
        animateBackground(tlBg, '.con4-container', '#000', '#ffffff');

        // Navigation color change
        gsap.to('.nav-container a', {
            scrollTrigger: createScrollTrigger('.con4-container', { scrub: 0 }),
            duration: 0.4,
            ease: 'power3.in',
            color: '#000',
        });

        // Main text animation
        gsap.fromTo('.con4-mainText',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: 'power3.out',
                scrollTrigger: createScrollTrigger('.con4-mainText', { start: 'top 90%', end: 'top 20%' })
            }
        );

        // Mock-up animation
        gsap.to('.con4-container .mock-1', {
            scrollTrigger: {
                trigger: '.mock-1',
                start: '30% bottom',
                end: 'bottom 100px',
                onEnter: () => gsap.to('.con4-container .mock-1', {duration: 1, ease: 'power2.out', width: '85%'}),
                onLeave: () => gsap.to('.con4-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '55%', y: -90}),
                onEnterBack: () => gsap.to('.con4-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '85%', y: 0}),
            },
            ease: 'power2.out',
        });

        // Subtext animations
        const animateSubText = (element, text, delay = 0) => {
            gsap.to(element, {
                scrollTrigger: createScrollTrigger(element, { start: '220px bottom', end: '220px bottom' }),
                text,
                duration: delay ? 1 : 2,
                delay,
                ease: 'none'
            });
        };

        animateSubText('.subText-container .subText.a', subText);
        animateSubText('.subText-container .subText.b', subTextGradient, 2);

        // Final background change
        gsap.to('.con4-container', {
            scrollTrigger: {
                trigger: '.con4-container',
                start: 'bottom bottom',
                end: 'bottom bottom',
                onEnter: () => gsap.to('.con4-container', {duration: 0.6, ease: 'none', background: '#000', color: '#fff'}),
                onEnterBack: () => gsap.to('.con4-container', {duration: 0.6, ease: 'none', background: '#fff', color: '#000'}),
            }
        });
    });
    return (
        <section className={`con4-container`}>
            <h1 className={'con4-mainText'}>Workflow</h1>
            <div className={`mockBox`}>
                <div className={`mock-1`}>
                    <div className={`bento a`} style={{ justifyContent: 'center' ,display: "flex", alignItems: "center" }}><img src={flowImg} alt={'flow'} width={300} /></div>
                    <div className={`bento b`}>
                        <div className={`bento sub`} style={{ justifyContent: 'center', display: "flex", alignItems: "center", gap: 30 }}>
                            <img src={posImg} width={200} style={{ borderRadius: 15, }}/>
                            <img src={posImg1} width={200} style={{ borderRadius: 15, }}/>
                            <img src={posImg2} width={200} style={{ borderRadius: 15, }}/>
                        </div>
                        <div className={`bento c`}>
                            <div className={`bento d`} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <img src={logo} alt="flow" width={200} height={200}/>
                            </div>
                            <div className={`bento d`} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <h1 style={{ fontSize: 48, color: "white" }}>𝐌𝐚𝐤𝐞 <br /> 𝐘𝐨𝐮𝐫 <br /> 𝐌𝐚𝐬𝐭𝐞𝐫𝐩𝐢𝐞𝐜𝐞</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`subText-container`}>
                <h1 className={`subText a`}></h1>
                <h1 className={`subText b`}></h1>
            </div>
        </section>
    )
}
