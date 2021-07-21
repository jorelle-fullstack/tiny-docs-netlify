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
    const [inProp, setInProp] = useState(false)
    const [tabs, setTabs] = useState([
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
    ])
    useEffect(() => { setInProp(true) })
    return(
        <div className='category-tabs'>
            <TransitionGroup>
                {tabs.map((button, i) => {
                    const ref = React.createRef(null)
                    return <CSSTransition nodeRef={ref} key={i} in={inProp} appear={true} timeout={500} classNames='pop'>
                        <IconButton nodeRef={ref} className={'category-nav-btn ' + button.className} key={i} icon={button.icon} >{button.label}</IconButton>
                    </CSSTransition>
                })}
            </TransitionGroup>

                        {/*tabs.map((button, i) => {
                            const duration = i + 00
                            const defaultStyle = {
                                transition: 'all 300ms ease',
                                transform: 'scale(0)'
                            }
                            const transitionStyles = {
                                entering: { transform: 'scale(0)' },
                                entered: { transform: 'scale(1)'}
                            }
                            return (
                                
                            )
                        }) */}
                    </div>
    )
}

export default CategoryTabs