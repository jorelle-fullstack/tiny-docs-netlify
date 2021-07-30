// Dependencies
import { useRouter as UseRouter } from 'next/router'

// Components
import { Button } from '../../components/global'
import Image from 'next/image'
// Assets
import check from '../../assets/images/check-green.svg'

const index = () => {
  const router = UseRouter()
  function goHome() { router.push('/') }

  return (
    <div className='page-reset-confirmation'>
      <div className="content-wrapper">
        <h1 className='form-title'>You are All Set!</h1>
        <div className='check'>
        <Image src={check} alt="" />
        </div>
        <p>A link to reset your password has been sent to your email.</p>
        <Button onClick={goHome} className='btn--blue'>Got to home page</Button>
      </div>
    </div>
  )
}

export default index
