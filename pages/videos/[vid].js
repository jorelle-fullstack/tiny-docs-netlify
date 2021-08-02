// Dependencies
import React, { useState as UseState } from 'react'
import { useForm as UseForm } from "react-hook-form"
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useRouter as UseRouter } from 'next/router'
// Components
import Head from 'next/head'
import CategoryTabs from '../../components/global/CategoryTabs'
import Image from 'next/image'
import SaveButton from '../../components/video-player/SaveButton'
import SmileButton from '../../components/video-player/SmileButton'
import VideoEntry from '../../components/video-player/VideoEntry'
import Chip from '../../components/video-player/Chip'
import Fab from '../../components/global/Fab'
import Input from '../../components/form/Input'

// Assets
import videoPlaceholder from '../../assets/images/video-player-placeholder.png'
import arrowIcon from '../../assets/images/arrow-white.png'
import searchIcon from '../../assets/images/search-icon.svg'

// Localizations
import { allVideos, chips } from '../../localizations/videos/local'

const VideoPlayer = () => {
    const router = UseRouter()
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
      } = UseForm();

    const { searchBarRef } = React.useRef(null)
    const [toggleSearchBar, toggleSearch] = UseState(false)
    const categoryTabs = <CategoryTabs />
    const searchBar = <form className='form' ref={searchBarRef}>
    <Input className='search-field' register={{ ...register("search", { required: false }) }} errors={errors} type="text" placeholder="Search" />
    </form>
    
    const handleBack = () => { router.push('/videos') }
    const handleSearchToggle = () => { toggleSearch(!toggleSearchBar) }
    
    return(
        <div className='page-video_player'>
            <Head><title>Video Player | [Title Here]</title></Head>
            <div className='top-section'>
                    <Fab className='back' icon={arrowIcon} onClick={handleBack} />
                    <SwitchTransition>
                        <CSSTransition key={toggleSearchBar} classNames='pop' timeout={0}>
                            { toggleSearchBar ? searchBar : categoryTabs }
                        </CSSTransition>
                    </SwitchTransition>
                    <Fab className='search' onClick={handleSearchToggle} icon={searchIcon} />
                </div>
            <div className='main'>
                <div className='video-player__wrapper'>
                <div className='video-player'>
                <CSSTransition in={true} appear={true} classNames='fade' timeout={600}>
                    <div className='player'>
                        <Image src={videoPlaceholder} width={1043} height={601} alt='' />
                    </div>
                </CSSTransition>
                </div>
                <div className='info'>
                <div className='chips'>
                        {chips.map((chip, i) => {
                            return <Chip key={i} label={chip} />
                        })}
                    </div>
                    <div className='main'>
                    <div className='left'>
                    <div className='wrapper'>
                        <h2>Featured Video Title</h2>
                        <p>Featured Video Description and Synopsis
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue </p>
                        </div>
                    </div>
                    <div className='right'>
                    <SaveButton saved={false} />
                        <SmileButton count={4} />
                    </div>
                    </div>
                    </div>
                </div>

                <div className='playlist'>
                    <div className='header'>
                        <h4>Featured Playlist Title</h4>
                        <p>Tiny Docs Spotlight</p>
                    </div>
                    <div className='list'>
                        <div>
                        {allVideos.map((video, i) => {
                            return <VideoEntry key={i} route={'/videos/vid'} thumbnail={video.thumbnail} title={video.title} duration={video.duration} />
                        })}
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export default VideoPlayer