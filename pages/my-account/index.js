// Components
import WatchEntry from '../../components/account/WatchEntry'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
// Assets
import thumbnail1 from '../../assets/images/watch-entry-thumbnail-sample-1.png' 
import thumbnail2 from '../../assets/images/watch-entry-thumbnail-sample-2.png' 
import thumbnail3 from '../../assets/images/watch-entry-thumbnail-sample-3.png' 
const index = () => {
    const watchHistory = [
        {
            thumbnail: thumbnail1,
            title: 'Related Content Title'
        },
        {
            thumbnail: thumbnail2,
            title: 'Related Content Title'
        },
        {
            thumbnail: thumbnail3,
            title: 'Related Content Title'
        }
    ]
    return (
        <div className='page-account'>
            <div className='container'>
            <h1>My Account</h1>
                <div className='watch-history-section'>
                    <h3>Watch History</h3>
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
                        {watchHistory.map((entry, i) => {
                            return <SwiperSlide key={i}>
                            <WatchEntry thumbnail={entry.thumbnail} title={entry.title} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                    <div className='slide'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index