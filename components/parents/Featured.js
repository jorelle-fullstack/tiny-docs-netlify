// Dependencies
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Components
import Resource from '../../components/parents/Resource'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Featured = ({resources}) => {
    return (
        <div className='featured-wrapper'>
            <Swiper
            spaceBetween={11}
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
            {resources.map((resource, i) => {
                return (
                <SwiperSlide key={i}>
                    <Resource index={i} type={resource.type} thumbnail={resource.thumbnail} title={resource.title} desc={resource.desc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
    )
}
export default Featured