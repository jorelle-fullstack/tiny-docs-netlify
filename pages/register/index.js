import { Button } from '../../components/global'
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { login } from '../../auth'

import registerBg from '../../assets/images/register.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'

const index = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className='page-register'>
      <div className="first-wrapper">
        <div className="content-holder">
          <h1 className='title'>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="input-group">
              <input defaultValue="" placeholder='First Name' {...register("fName", { required: true })} type='text' />

              <input defaultValue="" placeholder='Last Name'{...register("sName", { required: true })} type='text' />

            </div>
            <input defaultValue="" placeholder='Email'{...register("email", { required: true })} type='email' />

            <input defaultValue="" placeholder='Password'{...register("password", { required: true })} type='password' />

            <input defaultValue="" placeholder='Confirm password'{...register("confirmPassword", { required: true })} type='password' />

            {errors.email && <span>This field is required</span>}
            <Button type='submit' className='btn--red'>Sign Up</Button>
          </form>

          <p>- Or Login With - </p>

          <div className="external-login-wrapper">
            <Button onClick={e => login('google')}><img src={googleImg.src} alt="" /></Button>
            <Button onClick={e => login('facebook')}><img src={fbImg.src} alt="" /></Button>
          </div>
          <Link href='/login' passHref>
            <a className='member'>Already a member? Login</a>
          </Link>
        </div>
      </div>
      <div className="second-wrapper" style={{ backgroundImage: `url(${registerBg.src})` }}>

      </div>

    </div>
  )
}

export default index
