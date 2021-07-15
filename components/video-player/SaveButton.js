// Components
import Image from 'next/image'

// Assets
import bookmarkIcon from '../../assets/images/bookmark-icon.svg'

const SaveButton = ({saved = false}) => {
    return(
        <button className='btn save-video-btn'>
            <img className='icon' src={bookmarkIcon.src} />
            <h3>Save</h3>
        </button>
    )
}

export default SaveButton