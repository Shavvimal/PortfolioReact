import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAnim = (elem1) => {
    let tl = gsap.timeline({delay: 0});
    tl.from(elem1, {duration: 0.6, ease: "power2. out", y:-69});
    }