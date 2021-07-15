// Components
import Button from './Button'

const tabs = [
    {
        className: '--red',
        label: 'Videos',
        route: ''
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
    return (
        <div className='category-tabs-small'>
            {tabs.map((tab, i) => {
                return <Button key={i} className={'small category-nav-btn' + tab.className}>{tab.label}</Button>
            })}
        </div>
    )
}
export default CategoryTabsSmall