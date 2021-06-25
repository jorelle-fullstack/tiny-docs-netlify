import clsx from "clsx";
import Image from "next/image";

import { Button } from "../../components/global";

const Banner = ({ title, description, btnColor, bannerImage, page }) => {
  return (
    <div className={clsx("banner", { "banner--about-us": page === "About Us" })}>
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
              })}
            >
              Learn More!
            </Button>
          </div>
          <div className="banner__wrapper--right">
            <Image src={bannerImage} className="" alt="Hero Banner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
