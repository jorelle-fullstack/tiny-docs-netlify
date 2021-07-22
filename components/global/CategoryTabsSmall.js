// Dependencies
import React from 'react'
import { useRouter } from 'next/router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
            <TransitionGroup component={null}>
                {tabs.map((tab, i) => {
                    let timeout = parseInt(`${i}00`)
                    timeout = timeout + 400
                    return <CSSTransition key={i} appear={true} in={true} timeout={timeout} classNames='pop'>
                        <Button key={i} className={'small category-nav-btn' + tab.className} onClick={(e) => handleClick(tab.route)}>{tab.label}</Button>
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div>
    )
}
export default CategoryTabsSmall