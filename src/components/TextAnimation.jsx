import React, { useEffect, useState } from 'react';
import './TextAnimation.scss';

function TextAnimation({text, initialDelay = 0,increasedDelay = .3, isStart = true, wordSplit, textSplit}) {

    const [animationText,setAnimationText] = useState('');

    useEffect(()=>{

        if(isStart && wordSplit){
            let textArr = text?.split(" ");
            textArr?.map((word,i)=>{
                textArr[i] = <span className='text-fade-up' key={i} style={{animationDelay:`${initialDelay+((i+1)*increasedDelay)}s`}}>
                    {word}
                </span>
            });
            setAnimationText(textArr);

        }else if(isStart && textSplit){
            let textArr = <span className='text-fade-up'  style={{animationDelay:`${initialDelay}s`}}>
                {text}
            </span>
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