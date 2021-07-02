import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "../../components/global";
import Knob1 from "../../assets/images/knob-1.png";
import Knob2 from "../../assets/images/knob-2.png";
import Knob4 from "../../assets/images/knob-4.png";
import Videos from "../../assets/images/videos.svg";
import Play from "../../assets/images/play.svg";
import Blog from "../../assets/images/blog.svg";
import Learn from "../../assets/images/learn.svg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const bannerContent = [
  {
    title: "Something Exciting",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Videos",
    btnIcon: Videos
  },
  {
    title: "Something Exciting",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Play",
    btnIcon: Play
  },
  {
    title: "Something Exciting",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Blog",
    btnIcon: Blog
  },
  {
    title: "Something Exciting",
    btnText: "Try it for free!",
    text: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
    background: require("../../assets/images/banner-pricing.png").default.src,
    category: "Learn",
    btnIcon: Learn
  },
];

const BannerPricing = ({ page }) => {
  console.log('%c ⚠ bg ', 'color:yellow;background:black;padding:5px;', bannerContent[0].background);
  return (
    <div className={clsx("banner", { "banner--pricing": page === "Pricing" })}>
      <div className="container">
        <div className="banner__wrapper">
          <h1>Unlimited Play with Premium!</h1>
          <Swiper spaceBetween={50} navigation pagination={{ clickable: true }}>
            {bannerContent.map((banner, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className="banner__content"
                    style={{ background: `url(${banner.background})` }}
                  >
                    <h1>“{banner.title}”</h1>
                    <Button className="btn--yellow">{banner.btnText}</Button>
                    <p>{banner.text}</p>
                  </div>
                  <div className="banner__content--button">
                    <Button
                      className={clsx({
                        "btn--yellow": banner.category === "Blog",
                        "btn--red": banner.category === "Videos",
                        "btn--light-blue": banner.category === "Play",
                        "btn--dark-blue": banner.category === "Learn",
                      })}
                    >
                      <span>
                        <Image src={banner.btnIcon} alt={banner.category} />
                      </span>
                      {banner.category}
                    </Button>
                  </div>
                  <div className="banner__content--knobs">
                    <Image src={Knob2} className="" alt="Knob" />
                    <Image src={Knob4} className="" alt="Knob" />
                    <Image src={Knob1} className="" alt="Knob" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BannerPricing;
