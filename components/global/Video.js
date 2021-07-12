import Image from 'next/image'
const Video = ({title, thumbnail, route}) => {
    return (
        <div className='video-wrapper'>
            <Image className='thumbnail' height={159} src={thumbnail} >
                
            </Image>
            <div className='info'>
                <div className='title'>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Video

