// Components
import Input from '../../components/form/Input'
import Image from 'next/image'
import Head from 'next/head'
import { useForm } from "react-hook-form"
import IconButton from '../../components/global/IconButton'
import Video from '../../components/global/Video'
// Assets
import tom from '../../assets/images/tom-right.svg'
import profileIcon from '../../assets/images/profile-icon.svg'
import searchIcon from '../../assets/images/search-icon.svg'

// Localizations
import { pageButtons, categoryButtons, allVideos } from './local'
const Videos = () => {
    const account = {
        profileIcon: profileIcon
    }
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
        <Head><title>Videos</title></Head>
            <div className='banner'>
                <div className='container'>
                    <div className='top-section'>
                    <Image className='profile-icon' width={93} height={93} src={account.profileIcon} />
                    <form className='form' >
      <Input className="search-field" register={{ ...register("search", {}) }} errors={errors} type="text" placeholder="Search"
                render={() => <button type="button" className="input-inline-button" onClick={handleSearch} ><Image width={26} height={26} src={searchIcon} /></button>}
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
                    <div className='knobs'>
                        <div className='knob'>
                            <hr className='handle' />
                        </div>
                    </div>
                    <div className='video-collection'>
                        {allVideos.map((video, i) => {
                            return <Video key={i} thumbnail={video.thumbnail} title={video.title} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos