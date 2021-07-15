// Components
import IconButton from './IconButton'

// Assets
import videosIcon from '../../assets/images/videos-nav-icon.svg'
import playIcon from '../../assets/images/play-nav-icon.svg'
import blogIcon from '../../assets/images/blog-nav-icon.svg'
import learnIcon from '../../assets/images/learn-nav-icon.svg'

const CategoryTabs = () => {
    const tabs = [
        {
            className: 'pink-shadow',
            label: 'Videos',
            icon: videosIcon.src,
            route: ''
        },
        {
            className: 'light-blue-shadow',
            label: 'Play',
            icon: playIcon.src,
            route: ''
        },
        {
            className: 'yellow-shadow',
            label: 'Blog',
            icon: blogIcon.src,
            route: ''
        },
        {
            className: 'blue-shadow',
            label: 'Learn',
            icon: learnIcon.src,
            route: ''
        },
    ]

    return(
        <div className='category-tabs'>
                        {tabs.map((button, i) => {
                            return <IconButton className={'category-nav-btn ' + button.className} key={i} icon={button.icon} >{button.label}</IconButton>
                        })}
                    </div>
    )
}

export default CategoryTabs