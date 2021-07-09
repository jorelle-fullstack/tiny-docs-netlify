// Dependencies
import { useForm } from "react-hook-form";
import { login, passwordBasedLogin } from '../../auth'
import { useState } from "react";
import { useRouter } from 'next/router'

// Components
import { Button } from "../../components/global"
import Input from '../../components/form/Input'
import Link from 'next/link'

// Assets
import loginBg from '../../assets/images/login.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'

const index = () => {
  const router = useRouter()
  const [submitting, setsubmitting] = useState(false)

  const redirectLink = '/about-us'

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    console.log(data)
    setsubmitting(true)
    const res = await passwordBasedLogin(data)
    setsubmitting(false)

    if (!res.message) {
      return router.push(redirectLink)
    } else if (res.message.includes('password') || res.message.includes('email')) {
      setError('email', {
        type: 'manual',
        message: 'The Password or Email is invalid'
      })
    }
  };


  const handle3rdPartyLogin = async (type) => {
    try {
      await login(type)
      return router.push(redirectLink)
    } catch (error) {
    }
  }

  return (
    <div className="page-login">
      <div className="first-wrapper">
        <div className="content-holder">
          <h1 className='title'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>

            <Input showError={false} register={{ ...register("email", { required: true }) }} errors={errors} type="email" placeholder="Enter Email" />

            <Input showError={false} register={{ ...register("password", { required: true }) }} errors={errors} type="password" placeholder="Enter Password" />

            {errors.email && <span className="form--error">{errors.email.message} </span>}

            <Link href='/forgot' passHref>
              <a className='forgot text-disabled'>Forgot Password?</a>
            </Link>

            <Button loading={submitting} type='submit' className='btn__login btn--blue'>Login</Button>
          </form>

          <p>- Or Login With - </p>

          <div className="external-login-wrapper">
            <Button class='social' onClick={e => handle3rdPartyLogin('google')}><img className='icon__google' src={googleImg.src} alt="" /></Button>
            <Button class='social' onClick={e => handle3rdPartyLogin('facebook')}><img className='icon__facebook' src={fbImg.src} alt="" /></Button>
          </div>
          <Link href='/register   ' passHref>
            <a className='member'>Not a Member? Sign Up Now!</a>
          </Link>
        </div>
      </div>
      <div className="second-wrapper" style={{ backgroundImage: `url(${loginBg.src})` }} />

    </div>
  );
};

export default index;
