import './Section03.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Card } from "./Card.jsx";
import img1 from "../assets/card-1.jpeg";
import img2 from "../assets/card-2.jpeg";
import img3 from "../assets/card-3.jpeg";
import img4 from "../assets/card-4.jpeg";

export const Section03 = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cards = [
            { id: "#card-1", endTranslateX: -500, rotate: 45 },
            { id: "#card-2", endTranslateX: -500, rotate: -30 },
            { id: "#card-3", endTranslateX: -500, rotate: 45 },
            { id: "#card-4", endTranslateX: -550, rotate: -30 },
        ];

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.btn-container',
                start: "300px bottom",
                end: "300px",
                // markers: true,
            }
        });

        tl.fromTo('.orange-box', {
            opacity: 0,
            rotateX: 90,
        }, {
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "bounce.out"
        });

        ScrollTrigger.create({
            trigger: '.con3-container',
            start: 'top top',
            end: '+=750vh',
            // markers: true,
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
                gsap.set('.con3-container', {
                    x: `${-245 * self.progress}vw`,
                    duration: 1.25,
                    ease: 'power2.out',
                })
            }
        })
    }, []);

    return (
        <section className={`con3-container`}>
            <div className={`btn-container`}>
                <div className={`red-box`}>
                    <span>Palette의 모든 가능성</span>
                </div>
                <div className={`orange-box`}>
                    <span>모든 창의력을 발휘해보세요!</span>
                </div>
            </div>
            <h1>Palette AI는 인공지능 기술을 활용하여 간편하고 효과적으로 포스터 홍보물을 제작할 수 있도록 지원하는 강력한 도구입니다.</h1>
            <Card id={'card-1'} src={img1} />
            <Card id={'card-2'} src={img2} />
            <Card id={'card-3'} src={img3} />
            <Card id={'card-4'} src={img4} />
        </section>
    );
}
