import './ScrollTo.scss'
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";

export const ScrollTo = () => {
    useGSAP(async () => {
        const [ScrollTo] = await Promise.all([
            import("gsap/ScrollToPlugin").then(m => m.ScrollToPlugin),
        ]);
        gsap.registerPlugin(ScrollTo);
    }, [])

    const clickHandler = (e) => {
        gsap.to(window, {
            scrollTo: `.con${e.target.innerText === '1' ? 4 : (e.target.innerText === '2' ? 5 : 6)}-container`,
            duration: 1,
            overwrite: "auto"
        });
    }

    return (
        <div className={`scroll-container`}>
            <div>
                <p onClick={clickHandler}>1</p>
            </div>
            <div>
                <p onClick={clickHandler}>2</p>
            </div>
            <div>
                <p onClick={clickHandler}>3</p>
            </div>
        </div>
    )
}
