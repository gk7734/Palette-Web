import './Section06.scss'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from  "gsap/TextPlugin"

export const Section06 = () => {
    useGSAP(() => {
        let subText = `Create beautiful promotional <br/>
                    experiences and customer <br/>
                    journeys with powerful,`
        let subTextGradient = `easy-to-build workflows`

        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);
        const tlBg = gsap.timeline({
            scrollTrigger: {
                trigger: '.con6-container',
                start: 'top bottom',
                end: 'top top',
                // markers: true,
            }
        })

        const tlBg1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.con6-container',
                start: 'bottom bottom',
                end: 'bottom bottom',
                // markers: true,
                onEnter: () => gsap.to('.con6-container', {duration: 0.6, ease: 'none', background: '#000', color: '#fff'}),
                onEnterBack: () => gsap.to('.con6-container', {duration: 0.6, ease: 'none', background: '#fff', color: '#000'}),
            }
        })



        tlBg.fromTo('.con6-container', {
            background: '#000',
        }, {
            background: '#ffffff',
            duration: 1,
            ease: 'none'
        })

        gsap.to('.nav-container a', {
            scrollTrigger: {
                trigger: '.con6-container',
                // markers: true,
                start: 'top top',
                end: 'top top',
                scrub: 0,
            },
            duration: 0.4,
            ease: 'power3.in',
            color: '#000',
        })

        gsap.fromTo('.con6-mainText', {
            y: 100, // 시작 위치 (아래)
            opacity: 0, // 시작 투명도
        }, {
            y: 0, // 최종 위치 (원래 위치)
            opacity: 1, // 최종 투명도
            duration: 0.75, // 애니메이션 지속 시간
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.con6-mainText',
                start: 'top 90%', // 스크롤 시작 지점
                end: 'top 20%', // 스크롤 종료 지점
                // markers: true,
            }
        });

        gsap.to('.con6-container .mock-1', {
            scrollTrigger: {
                trigger: '.mock-1',
                start: '30% bottom', // 스크롤 시작 지점
                end: 'bottom 100px', // 스크롤 종료 지점
                onEnter: () => gsap.to('.con6-container .mock-1', {duration: 1, ease: 'power2.out', width: '85%'}),
                onLeave: () => gsap.to('.con6-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '55%', y: -90}),
                onEnterBack: () => gsap.to('.con6-container .mock-1', {duration: 0.8, ease: 'power2.in', width: '85%', y: 0}),
                // markers: true,
            },
            ease: 'power2.out',
        })
        gsap.to('.subText-container .subText.a', {
            scrollTrigger: {
                trigger: '.subText-container .subText.a',
                start:'220px bottom',
                end: '220px bottom',
                // markers: true
            },
            text: subText,
            duration: 2,
            ease: 'none'
        })
        gsap.to('.subText-container .subText.b', {
            scrollTrigger: {
                trigger: '.subText-container .subText.b',
                start:'220px bottom',
                end: '220px bottom',
                // markers: true
            },
            delay: 2,
            text: subTextGradient,
            duration: 1,
            ease: 'none'
        })

        tlBg1.fromTo('.con6-container', {
            background: '#fff',
        }, {
            background: '#000',
            color: '#fff',
            duration: 0.6,
            ease: 'none'
        })
    }, [])

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
            <div className={`subText-container`}>
                <h1 className={`subText a`}></h1>
                <h1 className={`subText b`}></h1>
            </div>
        </section>
    )
}
