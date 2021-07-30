// Dependencies
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Components
import Knob from './Knob'

// Assets
import Tam from "../../assets/images/tam.png";
import tamSpeech from "../../assets/images/tam-speech-about-us.png";

const Story = ({ title, content }) => {

  // Gets current scrollbar position for knob components.
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
      const handleScroll = () => {
          setScrollY(window.scrollY)
      }
      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => { window.removeEventListener('scroll', handleScroll) }
  }, []);

  return (
    <div className="section-our-story">
      <div className="container">
        <div className="content__wrapper">
          <div className="content__wrapper--knob">
            <div className='knobs'>
                        <Knob scrollPos={scrollY} />
                        <Knob scrollPos={scrollY} />
                        <Knob scrollPos={scrollY} />
                    </div>
          </div>
          <div className="content__wrapper--inner">
            <p>{title}</p>
            <p>{content}</p>
          </div>
          <div className="content__wrapper--image">
          <div className='speech'>
                    <Image src={tamSpeech} height={85} width={148} />
                </div>
                <div className='caretoon'>
                <img src={Tam.src} alt="Tam" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
