import './Section02.scss'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

const Section02 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.con2-container .con2-mainText',
                // markers: true,
                scrub: 1,
                start: "top bottom",
                end: "end",
            }
        }).fromTo('.con2-mainText', {
            opacity: 0,
            x: -150
        }, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power1.out"
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.con2-container .con2-subTextBox',
                // markers: true,
                scrub: 1,
                start: "top bottom",
                end: "end",
            }
        }).fromTo('.con2-subTextBox', {
            opacity: 0,
        }, {
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "power1.out"
        })

        gsap.to('#h-1', {
            scrollTrigger: {
                trigger: '#h-1',
                start: 'bottom bottom',
                // markers: true,
            },
            fontSize: '90px',
            duration: 1.4,
            ease: "power3.out",
            delay: 0.4,
        })

        const tl = gsap.timeline({})
        tl.to('#h-2', {
            scrollTrigger: {
                trigger: '#h-2',
                start: 'bottom top',
                // markers: true,
            },
        })
    }, [])

    return (
        <section className={`con2-container`}>
            <h1 className={`con2-mainText`}>Palette 왜 사용할까요?</h1>
            <div className={`con2-subTextBox`}>
                <h2 className={`subText`}>Palette는 간편한 인터페이스로 <span className={'h-1'}>누구나 쉽고 빠르게</span> 고품질의 포스터를 제작 눈길을 사로잡는 복잡한 도구 없이도 전문가 수준의 결과물 시간과 비용을 절약할 수 있습니다.</h2>
            </div>
        </section>
    )
}

export default Section02;
