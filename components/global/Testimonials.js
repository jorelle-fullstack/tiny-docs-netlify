import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import Quote from "../../assets/images/quote.png";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Testimonials = () => {
  const testimonialContent = [
    {
      statement:
        "Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challening to talk to your child about the process and we were lucky to see the video on anestheisa. The animation made it easy for our daughter to follow along and the explanation was simple and to the point. Thank you, Tiny Docs!",
      name: "Regan Lynch",
      description: "Parent",
    },
    {
      statement:
        "Horray for Tiny Docs! Tiny Docs is a breath of fresh air. It's creative, aesthetically beautiful and offers a unique approach to health education for children. Even adults can learn from Tiny Docs! At a time when we struggle to ensure understanding of complex medical information, it's reassuring to know Tiny Docs, through it's relatable and engaging health messaging can help fill a void in the health literacy landscape. The world needs Tiny Docs!",
      name: "Dr. Lisa Fitzpatrick",
      description: "DC Medicaid	Pediatrician",
    },
    {
      statement:
        "Tiny Docs creates a concept specifically for a child’s empowered understanding of the implementation of medicine and/or a medical procedure for the betterment of their well being.",
      name: "Jessica Lamont",
      description: "Pediatric Nurse/Epic System",
    },
    {
      statement:
        "Tiny Docs was a great resource for us when our daughter had eye surgery. It can be challening to talk to your child about the process and we were lucky to see the video on anestheisa. The animation made it easy for our daughter to follow along and the explanation was simple and to the point. Thank you, Tiny Docs!",
      name: "Regan Lynch",
      description: "Parent",
    },
    {
      statement:
        "Horray for Tiny Docs! Tiny Docs is a breath of fresh air. It's creative, aesthetically beautiful and offers a unique approach to health education for children. Even adults can learn from Tiny Docs! At a time when we struggle to ensure understanding of complex medical information, it's reassuring to know Tiny Docs, through it's relatable and engaging health messaging can help fill a void in the health literacy landscape. The world needs Tiny Docs!",
      name: "Dr. Lisa Fitzpatrick",
      description: "DC Medicaid	Pediatrician",
    },
    {
      statement:
        "Tiny Docs creates a concept specifically for a child’s empowered understanding of the implementation of medicine and/or a medical procedure for the betterment of their well being.",
      name: "Jessica Lamont",
      description: "Pediatric Nurse/Epic System",
    },
  ];

  return (
    <div className="section-testimonials">
      <div className="testimony__wrapper">
        <h1>What People are Saying</h1>
        <Swiper
          spaceBetween={50}
          navigation
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonialContent.map((testimony, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="testimony__holder">
                  <Image src={Quote} alt="Quote" />
                  <p className="testimony__statement">{testimony.statement}</p>
                  <div className="testimony__info">
                    <p className="testimony__name">{testimony.name}</p>
                    <p className="testimony__description">
                      {testimony.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
