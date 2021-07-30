// Dependencies
import React from "react"
import clsx from "clsx"

// Components
import Image from "next/image";
import { Button } from "../../components/global"
import { CSSTransition } from "react-transition-group";

const Banner = ({ title, description, btnColor, bannerImage, page, onClick = () => null }) => {
  const handleButtonClick = () => { onClick() }
  const {
    headerRef,
    buttonRef,
    heroRef
  } = React.useRef(null)
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
          <CSSTransition nodeRef={headerRef} in={true} appear={true} timeout={200} classNames='fade-slide-left'>
            <div noderef={headerRef}>
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            </CSSTransition>
            <CSSTransition nodeRef={buttonRef} in={true} appear={true} timeout={400} classNames='pop'>
            <Button
              ref={buttonRef}
              className={clsx({
                "btn--yellow": btnColor === "yellow",
                "btn--red": btnColor === "red",
                "btn--blue": btnColor === "blue",
                "btn--dark-blue": btnColor === "dark blue",
                "btn--banner-yellow": btnColor === "banner yellow"
              })}
              onClick={handleButtonClick}
              >Learn More!</Button>
            </CSSTransition>
          </div>
          <div className="banner__wrapper--right">
          <CSSTransition nodeRef={heroRef} in={true} appear={true} timeout={0} classNames='pop'>
            <div noderef={heroRef} className="hero__image">
            <Image src={bannerImage} width={466} height={487} alt="Hero Banner Image" />
            </div>
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
