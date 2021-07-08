import clsx from "clsx";
import Image from "next/image";

import { Button } from "../../components/global";

const Banner = ({ title, description, btnColor, bannerImage, page }) => {
  return (
    <div className={clsx("banner", {
      "banner--about-us": page === "About Us",
      "banner--providers": page === "Providers"
      })}>
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__wrapper--left">
            <h1>{title}</h1>
            <p>{description}</p>
            <Button
              className={clsx({
                "btn--yellow": btnColor === "yellow",
                "btn--red": btnColor === "red",
                "btn--blue": btnColor === "blue",
                "btn--dark-blue": btnColor === "dark blue",
                "btn--banner-yellow": btnColor === "banner yellow"
              })}
            >
              Learn More!
            </Button>
          </div>
          <div className="banner__wrapper--right">
            <Image src={bannerImage} width={466} height={487} className="hero__image" alt="Hero Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
