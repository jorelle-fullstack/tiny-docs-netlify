// Components
import Link from 'next/link'
import Image from 'next/image'
const Video = ({title, thumbnail, duration, route}) => {
    return (
        <Link passHref href={{
            pathname: '/videos/[vid]',
            // Put video ID under "vid".
            query: {vid: 'test'}
        }}>
            <div className='video-wrapper'>
            <div className='thumbnail'>
                <div className='length'><p>{duration}</p></div>
                <Image height={206} src={thumbnail} alt='' />
            </div>
            <div className='info'>
                <div className='title'>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default Video

