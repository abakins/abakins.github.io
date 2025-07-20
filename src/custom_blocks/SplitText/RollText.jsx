import gsap from 'gsap'; 
import { SplitText, ScrollTrigger} from 'gsap/all'; 
import {useGSAP} from '@gsap/react'; 

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger); 

function RollText() {
    useGSAP(() => {
        document.fonts.ready.then(() => {
            const elements = document.querySelectorAll(".rolltext");
            elements.forEach((el) => {    
                const split = new SplitText(el, { type: "words" });
                gsap.from(split.words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    y: 10, 
                    autoAlpha:0,
                    stagger: {amount: 1.0},
                    ease: 'expo'
                });       
            }); 
        });   
    }); 
}; 

export default RollText;