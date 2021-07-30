
// Dependencies
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import clsx from 'clsx'

const Snackbar = ({show, message, timeout = 6000, color, callback = () => {}}) => {
    const ref = React.useRef(null)
    UseEffect(() => {
        setTimeout(() => { callback(false) }, timeout)
    })
    const handleClick = () => {
        setShow(false)
        callback(false)
    }
    return(
        <div className='snackbar'>
            <CSSTransition nodeRef={ref} in={true} appear={true} timeout={0} classNames='fade-slide-up'>
            {show ? <div ref={ref} className={clsx('snackbar-wrapper', {
            'error': color === 'error'
        })}>
                <p>{message}</p>
                <button className='close' onClick={handleClick}>Close</button>
            </div> : <></> }
            </CSSTransition>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: { show: true }
    }
}
export default Snackbar