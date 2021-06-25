import React from "react";
import Image from "next/image";
import Tam from "../../assets/images/tam.png";
import Knob1 from "../../assets/images/knob-1.png";
import Knob2 from "../../assets/images/knob-2.png";
import Knob3 from "../../assets/images/knob-3.png";

const Story = ({ title, content }) => {
  return (
    <div className="section-our-story">
      <div className="container">
        <div className="content__wrapper">
          <div className="content__wrapper--knob">
            <Image src={Knob1} className="" alt="Knob" />
            <Image src={Knob2} className="" alt="Knob" />
            <Image src={Knob3} className="" alt="Knob" />
          </div>
          <div className="content__wrapper--inner">
            <p>{title}</p>
            <p>{content}</p>
          </div>
          <div className="content__wrapper--image">
            <Image src={Tam} className="" alt="Tam" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
