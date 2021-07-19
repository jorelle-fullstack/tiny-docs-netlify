// Dependencies
import { useForm } from "react-hook-form"

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
import { allVideos, chips } from './local'

const VideoPlayer = () => {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
      } = useForm();
    return(
        <div className='page-video_player'>
            <Head><title>Video Player | [Title Here]</title></Head>
            <div className='top-section'>
                    <Fab className='back' icon={arrowIcon} />
                    <CategoryTabs />
                    <form className='form'>
                        <Input className='search-field' register={{ ...register("search", { required: false }) }} errors={errors} type="text" placeholder="Search" />
                    </form>
                    <Fab className='search' icon={searchIcon} />
                </div>
            <div className='main'>
                <div className='video-player__wrapper'>
                <div className='video-player'>
                    <div className='player'>
                        <Image src={videoPlaceholder} width={1043} height={601} />
                    </div>
                </div>
                <div className='info'>
                    <div className='left'>
                    <div className='chips'>
                        {chips.map((chip, i) => {
                            return <Chip key={i} label={chip} />
                        })}
                    </div>
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

                <div className='playlist'>
                    <div className='header'>
                        <h4>Featured Playlist Title</h4>
                        <p>Tiny Docs Spotlight</p>
                    </div>
                    <div className='list'>
                    {allVideos.map((video, i) => {
                            return <VideoEntry key={i} route={'/videos/vid'} thumbnail={video.thumbnail} title={video.title} duration={video.duration} />
                        })}
                    </div>
                </div>
                </div>
        </div>
    )
}
export default VideoPlayer