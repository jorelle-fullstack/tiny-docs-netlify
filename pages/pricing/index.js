import { Plans } from "../../components/global";
import { Testimonials } from "../../components/global";
import Image from "next/image";
import Tom from "../../assets/images/tom.png";

const index = () => {
  return (
    <div className="page-pricing">
      <div className="container">
        <Testimonials />
        <div className="image__wrapper">
          <Image src={Tom} alt="Tom" />
        </div>
        <Plans />
      </div>
    </div>
  );
};

export default index;
