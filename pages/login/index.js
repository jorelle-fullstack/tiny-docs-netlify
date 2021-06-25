import { Button } from '../../components/global'
import { useForm } from "react-hook-form";
import Link from 'next/link'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'
import {login} from '../../auth'


const index = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(function(user){ //firebase login
        console.log(user);
    }).catch((error) => {
      console.log(error.code);
    })
  };



  console.log(googleImg)

  return (
    <div className='page-login'>
      <div className="first-wrapper">
        <div className="content-holder">
          <h1 className='title'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <input defaultValue="test" {...register("email", { required: true })} type='email' />
            <input defaultValue="test" {...register("password", { required: true })} type='password' />
            <Link href='/' passHref>
              <a className='forgot'>Forgot Password</a>
            </Link>

            {errors.email && <span>This field is required</span>}
            <Button className='btn--blue'>Login</Button>
          </form>

          <p>- Or Login With - </p>

          <div className="external-login-wrapper">
            <Button onClick={e => login('google')}><img src={googleImg.src} alt="" /></Button>
            <Button onClick={e => login('facebook')}><img src={fbImg.src} alt="" /></Button>
          </div>
          <Link href='/' passHref>
            <a className='member'>Not a Member? Signu Up Now!</a>
          </Link>
        </div>
      </div>
      <div className="second-wrapper">

      </div>

    </div>
  )
}

export default index
