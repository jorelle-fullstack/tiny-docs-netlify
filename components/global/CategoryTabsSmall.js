// Dependencies
import { useRouter } from 'next/router'

// Components
import Button from './Button'

const tabs = [
    {
        className: '--red',
        label: 'Videos',
        route: '/videos'
    },
    {
        className: '--light-blue',
        label: 'Play',
        route: ''
    },
    {
        className: '--yellow',
        label: 'Blog',
        route: ''
    },
    {
        className: '--blue',
        label: 'Learn',
        route: ''
    }
]
const CategoryTabsSmall = () => {
    const router = useRouter()
    const handleClick = (route) => { router.push(route) }
    return (
        <div className='category-tabs-small'>
            {tabs.map((tab, i) => {
                return <Button key={i} className={'small category-nav-btn' + tab.className} onClick={(e) => handleClick(tab.route)}>{tab.label}</Button>
            })}
        </div>
    )
}
export default CategoryTabsSmall