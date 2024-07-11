import './Footer.scss'
import {FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export const Footer = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.scroll-container', {
            scrollTrigger: {
                trigger: 'footer',
                start: 'top bottom',
                end: 'top top',
                // markers: true
            },
            opacity: 0,
            duration: 0.6,
        })
    })
    return (
        <footer className={`footer-container`}>
            <div className={`footer`}>
                <div className={`grid-1`}>
                    <div className={`mainText`}>다양한 창의성으로 가치를 <br/>
                        창출하다. Team.API™
                    </div>
                    <div className={`about-1`}>
                        <h1>Team</h1>
                        <h2>우리의 서비스</h2>
                        <h2 className={`about`}>Team.API에 대하여</h2>
                        <h2>개인정보 처리 방침</h2>
                        <h2>제3자 제공 동의서</h2>
                    </div>
                    <div className={`about-2`}>
                        <h1>Contect</h1>
                        <h2 className={`email`}>contect@api.ai</h2>
                        <h2 className={`phone`}>+82 10-2296-7428</h2>
                        <h2 className={`map`}>대구광역시 달성군 구지면 창리로 11길 93</h2>
                    </div>
                </div>
                <div className={`grid-2`}>
                    <div>
                        <FaFacebookF />
                    </div>
                    <div>
                        <FaGithub />
                    </div>
                    <div>
                        <FaLinkedinIn />
                    </div>
                    <div>
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </footer>
    )
}
