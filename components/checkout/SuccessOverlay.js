
// Dependencies
import React from 'react'
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
import { useCookies } from 'react-cookie'

// Components
import Image from 'next/image'
import { Button } from '../global'

// Assets
import check from '../../assets/images/check-green.svg'

const SuccessOverlay = () => {
    
    const router = useRouter()

    const [regData, removeCookie] = useCookies(['regData'])

    const handleClick = () => {
        router.push('/about-us')
        // Remove temporary data for checkout flow.
        localStorage.removeItem('cus_id')
        localStorage.removeItem('plan')
        removeCookie('fName')
        removeCookie('lName')
        removeCookie('email')
    }
    const {
        checkRef,
        titleRef,
        descRef,
        buttonRef
    } = React.useRef(null)
    return(
        <CSSTransition in={true} appear={true} timeout={0} classNames='fade'>
            <div className='success-overlay'>
            <CSSTransition nodeRef={titleRef} in={true} appear={true} timeout={0} classNames='fade-slide-up'>
            <h1 nodeRef={titleRef}>Your Transaction was Successful!</h1>
            </CSSTransition>
            <CSSTransition nodeRef={checkRef} in={true} appear={true} timeout={300} classNames='pop'>
            <div ref={checkRef} className='check-circle'>
                <Image width={64} height={47} src={check} />
            </div>
            </CSSTransition>
            <CSSTransition nodeRef={descRef} in={true} appear={true} timeout={400} classNames='pop'>
            <h5 ref={descRef} className='text-disabled'>You now have access to all of Tiny Docs' Premium Resources!</h5>
            </CSSTransition>
            <CSSTransition nodeRef={buttonRef} in={true} appear={true} timeout={500} classNames='fade-slide-down'>
            <Button ref={buttonRef} className='go-to-home btn--blue' onClick={handleClick}>Go To Home Page</Button>
            </CSSTransition>
        </div>
        </CSSTransition>
    )
}

export default SuccessOverlay