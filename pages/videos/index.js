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
    
    const handleSearch = () => {
        setError('search', {
          type: "manual",
          message: 'Search field is empty.'
        })
      }
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
      } = useForm();
    return (
        <div className='page-videos'>
            <img className='tam' src={tam.src} />
            <img className='tim' src={tim.src} />
        <Head><title>Videos</title></Head>
            <div className='banner'>
                <div className='container'>
                    <div className='top-section'>
                    <img className='profile-icon' src={account.profileIcon.src} />
                    <form className='form' >
      <Input className="search-field" register={{ ...register("search", {}) }} errors={errors} type="text" placeholder="Search"
                render={() => <button type="button" className="btn input-inline-button" onClick={handleSearch} ><Image width={26} height={26} src={searchIcon} /></button>}
              />
      </form>
                    </div>
                    <div className='page-buttons'>
                        {pageButtons.map((button, i) => {
                            return <IconButton className={button.className} key={i} icon={button.icon} >{button.label}</IconButton>
                        })}
                    </div>
                </div>
            </div>
            <div className='category-buttons'>
            <img className='tom' width={364} height={357} src={tom.src} />
                <div className='container'>
                {categoryButtons.map((button, i) => {
                            return <IconButton className={button.className} key={i} icon={button.icon} >{button.label}</IconButton>
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
                        {/* Videos */}
                    <div className='video-collection'>
                        {allVideos.map((video, i) => {
                            return <Video key={i} thumbnail={video.thumbnail} title={video.title} />
                        })}
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