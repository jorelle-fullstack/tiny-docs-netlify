// Dependencies
import React from 'react'

// Components
import IconButton from './IconButton'

// Assets
import videosIcon from '../../assets/images/videos-nav-icon.svg'
import playIcon from '../../assets/images/play-nav-icon.svg'
import blogIcon from '../../assets/images/blog-nav-icon.svg'
import learnIcon from '../../assets/images/learn-nav-icon.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const CategoryTabs = () => {
    const tabs = [
        {
            className: 'pink-shadow',
            label: 'Videos',
            icon: videosIcon,
            route: ''
        },
        {
            className: 'light-blue-shadow',
            label: 'Play',
            icon: playIcon,
            route: ''
        },
        {
            className: 'yellow-shadow',
            label: 'Blog',
            icon: blogIcon,
            route: ''
        },
        {
            className: 'blue-shadow',
            label: 'Learn',
            icon: learnIcon,
            route: ''
        },
    ]
    return(
        <div className='category-tabs'>
            <TransitionGroup component={null}>
                {tabs.map((button, i) => {
                    let timeout = parseInt(`${i*2}00`)
                    timeout = timeout + 400
                    return <CSSTransition key={i} appear={true} in={true} timeout={timeout} classNames='pop'>
                        <IconButton className={'category-nav-btn ' + button.className} key={i} icon={button.icon} >{button.label}</IconButton>
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div>
    )
}

export default CategoryTabs