import React, { useEffect, useState } from 'react';
import './TextAnimation.scss';

function TextAnimation({text, initialDelay,isStart = true}) {

    const [animationText,setAnimationText] = useState('');

    useEffect(()=>{
        if(isStart){
            let textArr = <span className='text-fade-up'  style={{animationDelay:`${initialDelay}s`}}>{text}</span>
            setAnimationText(textArr);
        }
    },[isStart])

    return (
        <>
            {animationText}
        </>
    )
}

export default TextAnimation