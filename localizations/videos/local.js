// Page button assets
import videosIcon from '../../assets/images/videos-nav-icon.svg'
import playIcon from '../../assets/images/play-nav-icon.svg'
import blogIcon from '../../assets/images/blog-nav-icon.svg'
import learnIcon from '../../assets/images/learn-nav-icon.svg'

// Category button assets
import hospitalIcon from '../../assets/images/hospital-icon.svg'
import maskIcon from '../../assets/images/surgical-mask-icon.svg'
import brainIcon from '../../assets/images/brain-icon.svg'
import barbelIcon from '../../assets/images/barbel-icon.svg'

// Video sample assets
import thumbnail1 from '../../assets/images/resource-thumbnail-sample-1.png'
import thumbnail2 from '../../assets/images/resource-thumbnail-sample-2.png'
import thumbnail3 from '../../assets/images/resource-thumbnail-sample-3.png'

const pageButtons = [
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

const categoryButtons = [
    {
        className: 'white-shadow',
        label: 'Category 1',
        icon: hospitalIcon.src,
        route: ''
    },
    {
        className: 'white-shadow',
        label: 'Category 2',
        icon: maskIcon.src,
        route: ''
    },
    {
        className: 'white-shadow',
        label: 'Category 3',
        icon: brainIcon.src,
        route: ''
    },
    {
        className: 'white-shadow',
        label: 'Category 4',
        icon: barbelIcon.src,
        route: ''
    },
]

const allVideos = [
    {
        thumbnail: thumbnail1,
        title: 'Meet Tiny Docs',
        duration: '5:43',
    },
    {
        thumbnail: thumbnail2,
        title: 'Billie vs. Worry Monster',
        duration: '11:14',
    },
    {
        thumbnail: thumbnail3,
        title: 'Billie Goes Back to School',
        duration: '3:25',
    },
    {
        thumbnail: thumbnail1,
        title: 'Meet Tiny Docs',
        duration: '5:43',
    },
    {
        thumbnail: thumbnail2,
        title: 'Billie vs. Worry Monster',
        duration: '11:14',
    },
    {
        thumbnail: thumbnail3,
        title: 'Billie Goes Back to School',
        duration: '3:25',
    },
    {
        thumbnail: thumbnail1,
        title: 'Meet Tiny Docs',
        duration: '5:43',
    },
    {
        thumbnail: thumbnail2,
        title: 'Billie vs. Worry Monster',
        duration: '11:14',
    },
    {
        thumbnail: thumbnail3,
        title: 'Billie Goes Back to School',
        duration: '3:25',
    },
    {
        thumbnail: thumbnail1,
        title: 'Meet Tiny Docs',
        duration: '5:43',
    },
    {
        thumbnail: thumbnail2,
        title: 'Billie vs. Worry Monster',
        duration: '11:14',
    },
    {
        thumbnail: thumbnail3,
        title: 'Billie Goes Back to School',
        duration: '3:25',
    }
]

const chips = ['Character Animation', 'Meerkats', 'Character Introduction', 'Patches', 'Tiny Docs', 'Scrubs']

export { pageButtons, categoryButtons, allVideos, chips }