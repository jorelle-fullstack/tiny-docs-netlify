
// Components
import Image from 'next/image'

const SuccessOverlay = () => {
    return(
        <div className='success-overlay'>
            <h1>Your Transaction was Successful!</h1>
            <div className='check-circle'></div>
            <h6>You now have access to all of Tiny Docs' Premium Resources!</h6>
        </div>
    )
}

export default SuccessOverlay