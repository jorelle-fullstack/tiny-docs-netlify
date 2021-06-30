import { Button } from "../../components/global";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { login, passwordBasedLogin } from '../../auth'
import Input from '../../components/form/Input'
import loginBg from '../../assets/images/login.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'
import { useState } from "react";
import { useRouter } from 'next/router'

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
    } else if (res.message.includes('password')) {
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

            <Input showError={false} register={{ ...register("email", {}) }} errors={errors} type="email" placeholder="Enter Email" />

            <Input showError={false} register={{ ...register("password", { required: true }) }} errors={errors} type="password" placeholder="Enter Password" />

            {errors.email && <span className="form--error">{errors.email.message} </span>}

            <Link href='/forgot' passHref>
              <a className='forgot'>Forgot Password</a>
            </Link>

            <Button loading={submitting} type='submit' className='btn--blue'>Login</Button>
          </form>

          <p>- Or Login With - </p>

          <div className="external-login-wrapper">
            <Button onClick={e => handle3rdPartyLogin('google')}><img src={googleImg.src} alt="" /></Button>
            <Button onClick={e => handle3rdPartyLogin('facebook')}><img src={fbImg.src} alt="" /></Button>
          </div>
          <Link href='/register   ' passHref>
            <a className='member'>Not a Member? Sign Up Now!</a>
          </Link>
        </div>
      </div>
      <div className="second-wrapper" style={{ backgroundImage: `url(${loginBg.src})` }}>

      </div>

    </div>
  );
};

export default index;
