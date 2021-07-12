// Components
import Image from 'next/image'
import clsx from 'clsx'

const Resource = ({title, desc, thumbnail, buttonType, buttonIcon}) => {
    return (
        <div className='resource-wrapper'>
            <Image className='thumbnail' height={159} src={thumbnail} />
            <div className='info'>
                <div className='title'>
                    <h4>{title}</h4>
                    <button className={clsx('video-btn', {
                        'video-btn--play': buttonType === 'Play',
                    'video-btn--whiteboard': buttonType === 'Whiteboard'})} >
                        <Image src={buttonIcon} /></button>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default Resource