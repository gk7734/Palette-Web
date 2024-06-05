import logo from '../assets/Images/img.png'
import { motion } from "framer-motion";
import './Navbar.scss'
import NavLi from "./Nav-li.jsx";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Navbar = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        let lastScrollY = 0;

        ScrollTrigger.create({
            onUpdate: (self) => {
                const currentScrollY = window.scrollY;
                const direction = self.direction; // 1 = down, -1 = up

                if (direction === 1 && currentScrollY > lastScrollY) {
                    // 아래로 스크롤 중
                    gsap.to("nav", { y: -100, duration: 0.8, ease: "power2.out" });
                } else if (direction === -1 && currentScrollY < lastScrollY) {
                    // 위로 스크롤 중
                    gsap.to("nav", { y: 0, duration: 0.8, ease: "power2.out" });
                }

                lastScrollY = currentScrollY;
            }
        });
    }, [])

    return (
        <nav className={`nav-container`}>
            <ul>
                <li>
                    <a href={'/home'}><img src={logo} alt='pallte-logo' width={220}/></a>
                </li>
                <div className={`nav-text`}>
                    <motion.div whileHover={{ scale: 1.25 }}><NavLi url={'#'} title={'소개'} /></motion.div>
                    <motion.div whileHover={{ scale: 1.25 }}><NavLi url={'#'} title={'고객센터'}  /></motion.div>
                    <motion.div whileHover={{ scale: 1.25 }}><NavLi url={'#'} title={'자주묻는 질문'}  /></motion.div>
                    <motion.div whileHover={{ scale: 1.25 }}><NavLi url={'#'} title={'제품'}  /></motion.div>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;

