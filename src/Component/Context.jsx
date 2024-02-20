import gsap from "gsap";
import SplitText from '../../node_modules/gsap-trial/dist/SplitText'
import { ScrollTrigger } from "gsap/all";
import { createContext,useContext, useEffect, useRef } from "react";

 const createAnim = createContext();

export const useAnim =()=> useContext(createAnim)

export const AnimProvider =({children})=>{
    
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const ref = useRef(null);

    useEffect(() => {
        const split = new SplitText(ref.current, { type: 'chars, words' });

        gsap.set(split.chars, { opacity: 0, y: 20 });

        ScrollTrigger.batch(split.chars, {
            onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
            onLeave: batch => gsap.set(batch, { opacity: 0, y: -20, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.02, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 20, overwrite: true }),
            start: 'top bottom',
            end: 'bottom top'
        });

        return () => {
            split.revert();
        };
    }, []);

    return(
        <>
        <createAnim.Provider value={{ref}}>
            {children}
        </createAnim.Provider>
        </>
    )
}
