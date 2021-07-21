// Dependencies
import React, {useState, useEffect } from "react";
import clsx from "clsx";

// Components
import Image from "next/image";
import { Button } from "../../components/global"
import { CSSTransition } from "react-transition-group";

const Banner = ({ title, description, btnColor, bannerImage, page, onClick = () => null }) => {
  const handleButtonClick = () => { onClick() }
  const [transitionIn, setTransitionIn] = useState(false)
  const {
    buttonRef,
    heroRef,
    textRef
  } = React.useRef(null)
  useEffect(() => { setTransitionIn(true) })
  return (
    <div className={clsx("banner", {
      "banner--about-us": page === "About Us",
      "banner--providers": page === "Providers",
      "banner--parents": page === "Parents"
      })}>
        <div className='body'>
        <div className="container">
        <div className="banner__wrapper">
          <div className="banner__wrapper--left">
          <CSSTransition in={transitionIn} nodeRef={textRef} timeout={500} classNames='fade-slide-left'>
            <div nodeRef={textRef}>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            </CSSTransition>
            <CSSTransition in={transitionIn} nodeRef={buttonRef} timeout={500} classNames='pop'>
            <div nodeRef={buttonRef}>
            <Button
              className={clsx({
                "btn--yellow": btnColor === "yellow",
                "btn--red": btnColor === "red",
                "btn--blue": btnColor === "blue",
                "btn--dark-blue": btnColor === "dark blue",
                "btn--banner-yellow": btnColor === "banner yellow"
              })}
              onClick={handleButtonClick}
              >Learn More!</Button>
            </div>
            </CSSTransition>
          </div>
          <div className="banner__wrapper--right">
          <CSSTransition in={transitionIn} nodeRef={heroRef} timeout={500} classNames='pop'>
            <Image nodeRef={heroRef} src={bannerImage} width={466} height={487} className="hero__image" alt="Hero Banner Image" />
            </CSSTransition>
          </div>
        </div>
      </div>
        </div>
      <div className='wave'></div>
    </div>
  );
};

export default Banner;
