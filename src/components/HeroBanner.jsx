import React, { useEffect, useState } from "react";
import TextAnimation from "./TextAnimation";
import "./HeroBanner.scss"

function HeroBanner({ items }) {
    const [currentIndx, setCurrentIndx] = useState(0);
    const [distance, setDistance] = useState(0);
    const length = items.length;
  
    useEffect(() => {
      const interval =
        distance < 410
          ? setInterval(() => (setDistance(distance + 1.5)), 25)
          : handleNext();
      return () => clearInterval(interval);
      
    }, [distance]);
  
    const handleNext = () => {
      if (currentIndx + 1 < length) {
        setCurrentIndx((prev) => prev + 1);
        setDistance(0);
      } else {
        setCurrentIndx(0);
        setDistance(0);
      }
    };

    return (
        <section
        className="hearo-banner-section"
        style={{ backgroundImage: `url(${items[currentIndx].image})` }}
      >
        <div className="container">
          <div className="hero-banner-text" key={items[currentIndx].title}>
                <h1 className="tagline"><TextAnimation text={items[currentIndx].tagLine} initialDelay={.20}/></h1>
                <h2 className="title"><TextAnimation text={items[currentIndx].title} initialDelay={.10}/></h2>
          </div>
          <div className="next-container">
            <div className="next_thumb" onClick={handleNext}>
              <div
                className={`next_thumb-border next_thumb-border-top`}
                style={{ width: `${distance}%`, height: "10px" }}
              ></div>
              <div
                className={`next_thumb-border next_thumb-border-right`}
                style={{
                  height: `${distance > 100 ? distance - 300 : 0}%`,
                  width: "10px",
                }}
              ></div>
              <div
                className={`next_thumb-border next_thumb-border-bottom`}
                style={{
                  width: `${distance > 100 ? distance - 200 : 0}%`,
                  height: "10px",
                }}
              ></div>
              <div
                className={`next_thumb-border next_thumb-border-left`}
                style={{
                  height: `${distance > 100 ? distance - 100 : 0}%`,
                  width: "10px",
                }}
              ></div>
              <span>Next</span>
              <img
                src={items[currentIndx].thumbnailImg}
                alt={`next-image-${currentIndx}`}
              ></img>
            </div>
            <div className="next-indicator">
              <span className="next-indicator_index">0{currentIndx + 1}</span>
              <div className="next-indicator_line"></div>
              <span className="next-indicator_total">0{length}</span>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroBanner