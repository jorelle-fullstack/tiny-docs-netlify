// Components
import Image from 'next/image'
import clsx from 'clsx'

// Assets
import videoIcon from '../../assets/images/video-play-icon.svg'
import blogIcon from '../../assets/images/whiteboard-icon.svg'
import podcastIcon from '../../assets/images/podcast-icon.svg'
import activityIcon from '../../assets/images/activity-icon.svg'

const Resource = ({index, title, desc, thumbnail, type, route                                                                                                                   }) => {
    return (
        <div key={index} className='resource-wrapper'>
            <Image className='thumbnail' height={159} src={thumbnail} />
            <div className='info'>
                <div className='title'>
                    <h4>{title}</h4>
                    <button href={route} className={clsx('resource-btn ', {
                        'resource-btn--video': type === 'Video',
                    'resource-btn--blog': type === 'Blog',
                    'resource-btn--podcast': type === 'Podcast',
                    'resource-btn--activity': type === 'Activity'
                })
                    } >
                        <img src={clsx({
                            [videoIcon.src]: type === 'Video',
                            [blogIcon.src]: type === 'Blog',
                            [podcastIcon.src]: type === 'Podcast',
                            [activityIcon.src]: type === 'Activity'
                        })} /></button>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default Resource