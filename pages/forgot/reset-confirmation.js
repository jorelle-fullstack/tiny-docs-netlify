import { Button } from '../../components/global'
import check from '../../assets/images/check-green.svg'
import { useRouter } from 'next/router'



const index = () => {
  const router = useRouter()


  function goHome() {
    router.push('/')
  }

  return (
    <div className='page-reset-confirmation'>
      <div className="content-wrapper">
        <h1 className='form-title'>You are All Set!</h1>
        <img className='check' src={check.src} alt="" />
        <p>A link to reset your password has been sent to your email.</p>
        <Button onClick={goHome} className='btn--blue'>Got to home page</Button>
      </div>
    </div>
  )
}

export default index
