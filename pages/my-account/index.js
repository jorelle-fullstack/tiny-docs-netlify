// Components
import WatchEntry from '../../components/account/WatchEntry'
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import Button from '../../components/global/Button'
// Assets
import photoPlaceholder from '../../assets/images/account-photo-placeholder.svg'
import thumbnail1 from '../../assets/images/watch-entry-thumbnail-sample-1.png' 
import thumbnail2 from '../../assets/images/watch-entry-thumbnail-sample-2.png' 
import thumbnail3 from '../../assets/images/watch-entry-thumbnail-sample-3.png' 
const index = () => {
    const account = {
        avatar: photoPlaceholder,
        fname: 'Tim',
        lname: 'Smith',
        email: 'tim@gmail.com',
        hashedPassword: '************'
    }
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
        },
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
    const categoryButtons = [
        {
            className: 'cat-btn__videos btn--red-small',
            label: 'Videos',
            route: ''
        },
        {
            className: 'cat-btn__play btn--light-blue-small',
            label: 'Play',
            route: ''
        },
        {
            className: 'cat-btn__blog btn--yellow-small',
            label: 'Blog',
            route: ''
        },
        {
            className: 'cat-btn__learn btn--blue-small',
            label: 'Learn',
            route: ''
        },
    ]
    return (
        <div className='page-account'>
            <div className='container'>
                <div className='categories__wrapper'>
                <div className='categories'>
                    {categoryButtons.map((button) => {
                        return <Button className={'cat-btn ' + button.className}>{button.label}</Button>
                    })}
                </div>
                </div>
            <h1>My Account</h1>
            <div className='main-section'>
            <div className='watch-history-section'>
                <div className='title'>
                <h3>Watch History</h3>
                <p className='text-disabled'>See All</p>
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
                        {watchHistory.map((entry, i) => {
                            return <SwiperSlide key={i}>
                            <WatchEntry thumbnail={entry.thumbnail} title={entry.title} />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            <div className='account-sidebar'>
                {/* Account Info */}
                <div className='avatar'><Image src={account.avatar} width={248} height={248} /></div>
                <div className='info'>
                <h3>{account.fname} {account.lname}</h3>
                <p className='text-disabled'>Email: {account.email} <br />
                Password: {account.hashedPassword}
                </p>
                <Button className='btn--blue edit'>Edit</Button>
                <hr className='divider' />
                {/* Watch Records */}
                <table className='watch-records'>
                    <tbody className='text-disabled'>
                        <tr className='row'>
                            <td className='left'>Saved</td>
                            <td className='right'>12</td>
                        </tr>
                        <tr className='row'>
                            <td className='left'>Likes</td>
                            <td className='right'>30</td>
                        </tr>
                        <tr className='row'>
                            <td className='left'>Videos Viewed</td>
                            <td className='right'>57</td>
                        </tr>
                    </tbody>
                </table>
                <div className='spacer' />
                {/* My Subscription Plans */}
                <h3>My Plans</h3>
                <div className='subscription-plans'>
                    <div className='plan'>
                    <p className='title text-disabled'>Premium Subscription</p>
                    <hr className='divider' />
                    <p className='desc text-disabled'>12-Month Plan $0.00<br />Renewing 01/05/2022</p>
                    </div>
                </div>
                <Button className='btn--blue edit'>Update</Button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default index