// Dependencies
import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react'
// Components
import Input from '../../components/form/Input'
import Image from 'next/image'
import Head from 'next/head'
import IconButton from '../../components/global/IconButton'
import Video from '../../components/global/Video'
import Knob from '../../components/global/Knob'
import BackToTopButton from "../../components/global/BackToTopButton"
import { Swiper, SwiperSlide } from "swiper/react"

// Assets
import tom from '../../assets/images/tom-clean.svg'
import tim from '../../assets/images/tim.png'
import tam from '../../assets/images/tam-clean.svg'
import profileIcon from '../../assets/images/profile-icon.svg'
import searchIcon from '../../assets/images/search-icon.svg'

// Localizations
import { pageButtons, categoryButtons, allVideos } from './local'

const Videos = () => {
    const account = {
        profileIcon: profileIcon
    }
    let categoryIndex = '';
    // Category swiper instance.
    const [swiper, setSwiper] = useState(null);
    const slideTo = (index) => {
        if (swiper) 
        swiper.slideTo(index)
    }

    // Gets current scrollbar position for knob components.
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, []);
    // For search bar.
    const handleSearch = () => {
        setError('search', {
          type: "manual",
          message: 'Search field is empty.'
        })
      }
    // Also for search bar.
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
      } = useForm();

    // Handle category swiping.
    const handleCategorySwiper = (index) => {
        console.log(index)
        categoryIndex = index
        const button = document.getElementsByClassName('category-btn-'+index)
        slideTo(index)
    }
    return (
        <div className='page-videos'>
            <img className='tam' src={tam.src} />
            <img className='tim' src={tim.src} />
        <Head><title>Videos</title></Head>
            <div className='banner banner--kids-videos'>
                <div className='body'>
                <div className='container'>
                    <div className='top-section'>
                    <img className='profile-icon' src={account.profileIcon.src} />
                    <form className='form' >
      <Input className="search-field" register={{ ...register("search", {}) }} errors={errors} type="text" placeholder="Search"
                render={() => <button type="button" className="btn input-inline-button" onClick={(e) => handleSearch} ><Image width={26} height={26} src={searchIcon} /></button>}
              />
      </form>
                    </div>
                    <div className='page-buttons'>
                        {pageButtons.map((button, i) => {
                            return <IconButton className={'category-nav-btn ' + button.className} key={i} icon={button.icon} >{button.label}</IconButton>
                        })}
                    </div>
                </div>
                </div>
                <div class='wave'></div>
            </div>
            <div className='category-buttons'>
            <img className='tom' width={364} height={357} src={tom.src} />
                <div className='container'>
                {categoryButtons.map((button, i) => {
                            return <IconButton className={'category-btn category-btn-'+ i + ' ' + button.className} key={i} icon={button.icon} onClick={(e) => handleCategorySwiper(i)} >{button.label}</IconButton>
                        })}
                </div>
            </div>
            <div className='videos'>
                <div className='container'>
                    <h1>Videos</h1>
                    <div className='wrapper'>
                        {/* Knobs Sidebar */}
                    <div className='knobs'>
                        <Knob scrollPos={scrollY} />
                        <Knob scrollPos={scrollY} />
                        <Knob scrollPos={scrollY} />
                    </div>
                        {/* Video Collection Swiper by Category */}
                    <div className='video-collection'>
                    <Swiper id='video-swiper'
                        onSwiper={setSwiper}
                        spaceBetween={22}
                        navigation
                        breakpoints={{
                        992: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        }}
                    >
                        <SwiperSlide>
                        {allVideos.map((video, i) => {
                            return <Video key={i} route={'/videos/vid'} thumbnail={video.thumbnail} title={video.title} duration={video.duration} />
                        })}
                        </SwiperSlide>
                        <SwiperSlide>
                        {allVideos.map((video, i) => {
                            return <Video key={i} route={'/videos/vid'} thumbnail={video.thumbnail} title={video.title} duration={video.duration} />
                        })}
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    </div>
                </div>
            </div>
            <div className='container'>
            <div className='back-to-top'><BackToTopButton /></div>
            </div>
        </div>
    )
}

export default Videos