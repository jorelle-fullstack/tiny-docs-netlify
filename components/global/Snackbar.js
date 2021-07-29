
// Dependencies
import React, { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import clsx from 'clsx'

const Snackbar = ({show, message, timeout = 6000, color, callback = () => {}}) => {
    const [showState, setShow] = useState(false)
    const ref = React.useRef(null)
    useEffect(() => {
        setShow(show)
        setTimeout(() => { callback(false) }, timeout)
    })
    const handleClick = () => {
        setShow(false)
        callback(false)
        console.log(showState)
    }
    return(
        <div className='snackbar'>
            <CSSTransition nodeRef={ref} in={true} appear={true} timeout={0} classNames='fade-slide-up'>
            {showState ? <div ref={ref} className={clsx('snackbar-wrapper', {
            'error': color === 'error'
        })}>
                <p>{message}</p>
                <button className='close' onClick={handleClick}>Close</button>
            </div> : <></> }
            </CSSTransition>
        </div>
    )
}
export default Snackbar