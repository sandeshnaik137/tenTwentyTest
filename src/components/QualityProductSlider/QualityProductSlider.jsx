import React, { useEffect, useRef, useState } from 'react';
import TextAnimation from "../TextAnimation";
import "./QualityProductSlider.scss";
import {clientData} from '../../sliderData';
import ProductSlider from './ProductSlider';

function QualityProductSlider() {
    const [triggerAnimation,setTriggerAnimation] = useState(false);
    const prodcutSliderRef = useRef(null);

    useEffect(()=>{
        document.addEventListener("scroll",isElementInViewport);
        
        return(()=>{
            document.removeEventListener("scroll",isElementInViewport);
        });
    },[]);
  
    const isElementInViewport = () => {
        var rect = prodcutSliderRef.current.getBoundingClientRect();
        if(rect.top < window.innerHeight/1.3){
            return setTriggerAnimation(true);
        }
    }

    return (
        <>
            <section className="quality-product-slider" ref={prodcutSliderRef}>
                    <h2>
                        <TextAnimation text={"Quality Products"} initialDelay={.10} isStart={triggerAnimation}/>
                    </h2>
                    <p>
                        <TextAnimation text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} initialDelay={.5} isStart={triggerAnimation}/>
                    </p>
                <ProductSlider clients={clientData} />
            </section>
        </>
    )
}

export default QualityProductSlider