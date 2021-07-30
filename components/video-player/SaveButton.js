// Components
import Image from 'next/image'

// Assets
import bookmarkIcon from '../../assets/images/bookmark-icon.svg'

const SaveButton = ({saved = false}) => {
    return(
        <button className='btn save-video-btn'>
            <div className='icon'>
            <Image src={bookmarkIcon.src} width={56} height={59} alt='' />
            </div>
            <h3>Save</h3>
        </button>
    )
}

export default SaveButton