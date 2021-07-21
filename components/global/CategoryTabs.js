// Dependencies
import React, { useState, useEffect } from 'react'

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
            <TransitionGroup component={null}>
                {tabs.map((button, i) => {
                    let timeout = parseInt(`${i}00`)
                    timeout = timeout + 400
                    const ref = React.createRef(null)
                    return <CSSTransition noderef={ref} key={i} appear={true} in={true} timeout={timeout} classNames='pop'>
                        <IconButton ref={ref} className={'category-nav-btn ' + button.className} key={i} icon={button.icon} >{button.label}</IconButton>
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div>
    )
}

export default CategoryTabs