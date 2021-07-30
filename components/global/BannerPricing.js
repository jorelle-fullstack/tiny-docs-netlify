// Dependencies
import React, { useState } from "react";
import clsx from "clsx";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

// Components
import Image from "next/image";
import { Button, Knob } from "../../components/global"
// Assets
import Videos from "../../assets/images/videos.svg";
import Play from "../../assets/images/play.svg";
import Blog from "../../assets/images/blog.svg";
import Learn from "../../assets/images/learn.svg";

const bannerContent = [
  {
    title: "Something Exciting 1",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Videos",
    btnIcon: Videos
  },
  {
    title: "Something Exciting 2",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Play",
    btnIcon: Play
  },
  {
    title: "Something Exciting 3",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Blog",
    btnIcon: Blog
  },
  {
    title: "Something Exciting 4",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Learn",
    btnIcon: Learn
  },
];

const BannerPricing = ({ page }) => {
  const [slideIndex, setIndex] = useState(0)

  const handleArrowClick = (dir) => {
    let i = 0
    if (dir === 'L') {
      i = slideIndex - 1
    } else {
      i = slideIndex + 1
    }

    // Sets index number to either 0 or the banner content array's length - 1.
    if (i > bannerContent.length - 1) {
      i = 0
    } else if (i < 0) {
      i = bannerContent.length - 1
    }
    console.log(i)
    setIndex(i)
  }
  
  console.log('%c ⚠ bg ', 'color:yellow;background:black;padding:5px;', bannerContent[0].background);
  return (
    <div className={clsx("banner", { "banner--pricing": page === "Pricing" })}>
      <div className="container">
        <div className="banner__wrapper">
          <h1>Unlimited Play with Premium!</h1>
          <div className='swiper-container'>
          <div className='hero-slider'>
                <div
                    className="banner__content"
                    style={{ background: `url(${bannerContent[slideIndex].background})` }}
                  >
                    <SwitchTransition>
                      <CSSTransition key={'title-'+slideIndex} timeout={0} classNames='pop'>
                      <h1>“{bannerContent[slideIndex].title}”</h1>
                      </CSSTransition>
                    </SwitchTransition>
                    <Button className="btn--yellow">{bannerContent[slideIndex].btnText}</Button>
                    <p>{bannerContent[slideIndex].text}</p>
                  </div>
                  <div className='nav'>
                  <Button className='swiper-button-prev' onClick={() => handleArrowClick('L')} />
                  <SwitchTransition mode='out-in'>
                    <CSSTransition key={'section-'+slideIndex}
                    timeout={0}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade'>
                    <div className="banner__content--button">
                    <Button
                      className={clsx({
                        "btn--yellow": bannerContent[slideIndex].category === "Blog",
                        "btn--red": bannerContent[slideIndex].category === "Videos",
                        "btn--light-blue": bannerContent[slideIndex].category === "Play",
                        "btn--dark-blue": bannerContent[slideIndex].category === "Learn",
                      })}
                    >
                      <span>
                        <Image src={bannerContent[slideIndex].btnIcon} alt={bannerContent[slideIndex].category} />
                      </span>
                      {bannerContent[slideIndex].category}
                    </Button>
                  </div>
                    </CSSTransition>
                  </SwitchTransition>
                  <Button className='swiper-button-next' onClick={() => handleArrowClick('R')} />
                  </div>
                  <div className="banner__content--knobs">
                    <Knob />
                    <Knob />
                    <Knob />
                  </div>
                </div>
          </div>
          {/* bannerContent.map((banner, i) => {
              return (
                
              );
            }) */}
        </div>
      </div>
    </div>
  );
};

export default BannerPricing;
