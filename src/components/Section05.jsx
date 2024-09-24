import './Section05.scss'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import pos4 from "../assets/Images/pos4.png"
import chat from "../assets/Images/Chat@1x.png"
import drow from "../assets/Images/Edit@1x.png"
import {animateBackground, createScrollTrigger} from "./utils.js";
import logo from "../assets/Images/img.png";
import flowImg from "../assets/Images/TkVFroPdpV(1)@1x.png";

export const Section05 = () => {
    useGSAP(async () => {
        const [ScrollTrigger, TextPlugin] = await Promise.all([
            import("gsap/ScrollTrigger").then(m => m.ScrollTrigger),
            import("gsap/TextPlugin").then(m => m.TextPlugin)
        ]);

        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        const subText = `Build stunning posters <br > and captivating<br/>
                    visuals with simple,`;
        const subTextGradient = `intuitive design tools in Palette`;

        // Background animations
        const tlBg = gsap.timeline();
        const tlColor = gsap.timeline({
            scrollTrigger: {
                trigger: '.con5-container',
                start: 'top bottom',
                end: 'top top',
                // markers: true
            }
        });
        tlColor.to('.con5-container', {
            color: '#fff',
            duration: 0.6,
        })
        animateBackground(tlBg, '.con5-container', '#fff', '#000');

        // Navigation color change
        gsap.to('.nav-container a', {
            scrollTrigger: createScrollTrigger('.con5-container', { scrub: 0 }),
            duration: 0.4,
            ease: 'power3.in',
            color: '#fff',
        });

        // Main text animation
        gsap.fromTo('.con5-mainText',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: 'power3.out',
                scrollTrigger: createScrollTrigger('.con5-mainText', { start: 'top 90%', end: 'top 20%' })
            }
        );

        // Mock-up animation
        gsap.to('.con5-container .mock-1', {
            scrollTrigger: {
                trigger: '.con5-container .mock-1',
                start: '30% bottom',
                end: 'bottom 100px',
                onEnter: () => gsap.to('.con5-container .mock-1', {duration: 1, ease: 'power2.out', width: '85%'}),
                onLeave: () => gsap.to('.con5-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '55%', y: -90}),
                onEnterBack: () => gsap.to('.con5-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '85%', y: 0}),
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

        animateSubText('.subText-container1 .subText.a', subText);
        animateSubText('.subText-container1 .subText.b', subTextGradient, 2);

        // Final background change
        gsap.to('.con5-container', {
            scrollTrigger: {
                trigger: '.con5-container',
                start: 'bottom bottom',
                end: 'bottom bottom',
                onEnter: () => gsap.to('.con5-container', {duration: 0.6, ease: 'none', background: '#fff', color: '#000'}),
                onEnterBack: () => gsap.to('.con5-container', {duration: 0.6, ease: 'none', background: '#000', color: '#fff'}),
            }
        });
    });
    return (
        <section className={`con5-container`}>
            <h1 className={'con5-mainText'}>Functions</h1>
            <div className={`mockBox`}>
                <div className={`mock-1`}>
                    <div className={`bento a`} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <img src={flowImg} alt={'flow'} width={300}/>
                    </div>
                    <div className={`bento b`}>
                        <div className={`bento sub`} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <h1 style={{fontSize: 60, color: "white"}}>𝐄𝐧𝐝𝐥𝐞𝐬𝐬 𝐩𝐫𝐨𝐟𝐢𝐭𝐬 <br /> 𝐟𝐫𝐨𝐦 𝐲𝐨𝐮𝐫 𝐜𝐫𝐞𝐚𝐭𝐢𝐯𝐢𝐭𝐲</h1>
                        </div>
                        <div className={`bento c`}>
                            <div className={`bento d`} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <img src={chat} alt="flow" width={300}/>
                            </div>
                            <div className={`bento d`} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <img src={drow} alt="flow" width={230}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`subText-container1`}>
                <h1 className={`subText a`}></h1>
                <h1 className={`subText b`}></h1>
            </div>
        </section>
    )
}
