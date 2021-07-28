
// Dependencies
import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'
import cookies from 'next-cookies'

// Components
import Image from 'next/image'
import { Button } from '../../components/global'

// Assets
import check from '../../assets/images/check-green.svg'

const SuccessOverlay = ({ checkoutSuccess }) => {
    const router = useRouter()
    const handleClick = () => {
        localStorage.removeItem('cus_id')
        localStorage.removeItem('plan')
        document.cookie = `email=;`
        document.cookie = `fName=;`
        document.cookie = `lName=;`
        document.cookie = `plan=;`
        document.cookie = `checkoutSuccess=;`
        console.log(checkoutSuccess)
        router.push('/about-us')
    }

    useEffect(() => {
        console.log(checkoutSuccess)
    })
    const {
        checkRef,
        titleRef,
        descRef,
        buttonRef
    } = React.useRef(null)
    return(
        <div className='checkout-success'>
            <Head><title>Checkout Completed Successfully</title></Head>
            <CSSTransition in={true} appear={true} timeout={0} classNames='fade'>
            <div className='success-overlay'>
            <CSSTransition noderef={titleRef} in={true} appear={true} timeout={0} classNames='fade-slide-up'>
            <h1 noderef={titleRef}>Your Transaction was Successful!</h1>
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
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const { checkoutSuccess } = cookies(ctx)
    if (checkoutSuccess === 'complete') {
        return {
            props: { checkoutSuccess: checkoutSuccess }
        }
        
    } else {
        return {
            redirect: {
                destination: '/about-us'
            }
        }
    }
  }

export default SuccessOverlay