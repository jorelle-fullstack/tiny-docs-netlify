import Image from "next/image";
import { Plans } from "../../components/global";
import { Testimonials } from "../../components/global";
import { BannerPricing } from "../../components/global";
import Tom from "../../assets/images/tom.png";

const index = () => {
  return (
    <div className="page-pricing">
      <BannerPricing page="Pricing"/>
      <Testimonials />
      <div className="image__wrapper">
        <Image src={Tom} alt="Tom" />
      </div>
      <Plans />
    </div>
  );
};

export default index;
