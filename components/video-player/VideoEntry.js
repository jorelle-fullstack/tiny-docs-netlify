
// Components
import Link from 'next/link'
import Image from 'next/image'
import IconButton from '../../components/global/IconButton'

// Assets
import dotsIcon from '../../assets/images/dots-vertical-icon.svg'
const VideoEntry = ({thumbnail, title, route}) => {
    return(
        <Link passHref href={{
            pathname: '/videos/[vid]',
            // Put video ID under "vid".
            query: {vid: 'test'}
        }}>
            <div className='video-entry-wrapper'>
            <Image height={133} src={thumbnail} alt='' />
            <div className='title'>
            <h4>{title}</h4>
            <button className='btn dots-btn'><Image src={dotsIcon} alt='' /></button>
            </div>
        </div>
        </Link>   
    )
}
export default VideoEntry