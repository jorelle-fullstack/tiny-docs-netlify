// Components
import WatchEntry from '../../components/account/WatchEntry'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import Link from 'next/link'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const VideoSlider = ({title, videos, type}) => {
    return (
        <div className='video-slider-wrapper'>
            <div className='title'>
                <h3>{title}</h3>
                <Link href={{
                    pathname: '/my-account/[record]', 
                    query: { ['record']: type }
                }} className='text-disabled'>See All</Link>
                </div>
                    <Swiper
                        spaceBetween={20}
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
                        {videos.map((video, i) => {
                            return <SwiperSlide key={i}><WatchEntry thumbnail={video.thumbnail} title={video.title} /></SwiperSlide>
                        })}
                    </Swiper>
        </div>
    )
}
export default VideoSlider