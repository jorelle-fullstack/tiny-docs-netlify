// Components
import Resource from '../../components/parents/Resource'
import playIcon from '../../assets/images/video-play-icon.svg'

// Assets
import thumbnail1 from '../../assets/images/resource-thumbnail-sample-1.png'
import thumbnail2 from '../../assets/images/resource-thumbnail-sample-2.png'
import thumbnail3 from '../../assets/images/resource-thumbnail-sample-3.png'

const featuredResources = [
    {
        thumbnail: thumbnail1,
        title: 'Meet Tiny Docs',
        desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
        thumbnail: thumbnail2,
        title: 'Billie vs. Worry Monster',
        desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    },
    {
        thumbnail: thumbnail3,
        title: 'Billie Goes Back to School',
        desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur'
    }
]
const Featured = () => {
    return (
        <div className='featured-wrapper'>
            {featuredResources.map((resource) => {
                return <Resource buttonIcon={playIcon} buttonType='Play' thumbnail={resource.thumbnail} title={resource.title} desc={resource.desc} />
            })}
        </div>
    )
}
export default Featured