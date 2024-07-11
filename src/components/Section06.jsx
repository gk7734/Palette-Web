import './Section06.scss'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from  "gsap/TextPlugin"
import {animateBackground, createScrollTrigger} from "./utils.js";

export const Section06 = () => {
    useGSAP(async () => {
        const [ScrollTrigger, TextPlugin] = await Promise.all([
            import("gsap/ScrollTrigger").then(m => m.ScrollTrigger),
            import("gsap/TextPlugin").then(m => m.TextPlugin)
        ]);

        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        const subText = `Create beautiful promotional <br/>
                   experiences and customer <br/>
                   journeys with powerful,`;
        const subTextGradient = `easy-to-build workflows`;

        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Background animations
        const tlBg = gsap.timeline();
        animateBackground(tlBg, '.con6-container', '#000', '#ffffff');

        // Navigation color change
        gsap.to('.nav-container a', {
            scrollTrigger: createScrollTrigger('.con6-container', { scrub: 0 }),
            duration: 0.4,
            ease: 'power3.in',
            color: '#000',
        });

        // Main text animation
        gsap.fromTo('.con6-mainText',
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: 'power3.out',
                scrollTrigger: createScrollTrigger('.con6-mainText', { start: 'top 90%', end: 'top 20%' })
            }
        );

        // Mock-up animation
        gsap.to('.con6-container .mock-1', {
            scrollTrigger: {
                trigger: '.con6-container .mock-1',
                start: '30% bottom',
                end: 'bottom 100px',
                onEnter: () => gsap.to('.con6-container .mock-1', {duration: 1, ease: 'power2.out', width: '85%'}),
                onLeave: () => gsap.to('.con6-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '55%', y: -90}),
                onEnterBack: () => gsap.to('.con6-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '85%', y: 0}),
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

        animateSubText('.subText-container2 .subText.a', subText);
        animateSubText('.subText-container2 .subText.b', subTextGradient, 2);
    });

    return (
        <section className={`con6-container`}>
            <h1 className={'con6-mainText'}>Experiences</h1>
            <div className={`mockBox`}>
                <div className={`mock-1`}>
                    <div className={`bento a`}></div>
                    <div className={`bento b`}>
                        <div className={`bento sub`}></div>
                        <div className={`bento c`}>
                            <div className={`bento d`}></div>
                            <div className={`bento d`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`subText-container2`}>
                <h1 className={`subText a`}></h1>
                <h1 className={`subText b`}></h1>
            </div>
        </section>
    )
}
