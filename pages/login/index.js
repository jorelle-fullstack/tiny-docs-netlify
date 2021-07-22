// Dependencies
import { useForm } from "react-hook-form";
import { login, passwordBasedLogin } from '../../auth'
import React, { useState } from "react";
import { useRouter } from 'next/router'
import { CSSTransition } from 'react-transition-group'

// Components
import { Button } from "../../components/global"
import Image from 'next/image'
import Input from '../../components/form/Input'
import Link from 'next/link'
import Head from 'next/head'

// Assets
import teamShot from '../../assets/images/team-shot.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'

const index = () => {
  const router = useRouter()

  // State variables
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
    console.log(res)
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
      console.error(error)
    } 
  }

  return (
    <div className="page-login">
      <Head><title>Login to your Tiny Docs Account</title></Head>
      <div className="first-wrapper">
        <div className="content-holder">
        <CSSTransition classNames='fade-slide-left' in={true} appear={true} timeout={200}>
          <h1 className='title'>Login</h1>
          </CSSTransition>
          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <CSSTransition classNames='fade-slide-left' in={true} appear={true} timeout={300}>
            <Input showError={false} register={{ ...register("email", { required: true }) }} errors={errors} type="email" placeholder="Enter Email" />
          </CSSTransition>
          <CSSTransition classNames='fade-slide-left' in={true} appear={true} timeout={400}>
            <Input showError={false} register={{ ...register("password", { required: true }) }} errors={errors} type="password" placeholder="Enter Password" />
          </CSSTransition>
            {errors.email && <span className="form--error">{errors.email.message} </span>}
          <CSSTransition appear={true} in={true} classNames='fade' timeout={800}>
            <Link href='/forgot'><a className='forgot text-disabled'>Forgot Password?</a></Link>
          </CSSTransition>
          <CSSTransition classNames='pop' in={true} appear={true} timeout={500}>
            <Button loading={submitting} type='submit' className='btn__login btn--blue'>Login</Button>
            </CSSTransition>
          </form>
          <CSSTransition appear={true} in={true} classNames='fade' timeout={600}>
          <p>- Or Login With - </p>
          </CSSTransition>
          <div className="external-login-wrapper">
            <CSSTransition appear={true} in={true} classNames='pop' timeout={600}>
            <div className='social-btn' >
            <Button className='social' onClick={e => handle3rdPartyLogin('google')}><img className='icon__google' src={googleImg.src} alt="" /></Button>
            </div>
            </CSSTransition>
            <CSSTransition in={true} appear={true} classNames='pop' timeout={600}>
            <div className='social-btn' >
            <Button className='social' onClick={e => handle3rdPartyLogin('facebook')}><img className='icon__facebook' src={fbImg.src} alt="" /></Button>
            </div>
            </CSSTransition>
          </div>
          <Link href='/register   ' passHref>
            <a className='member'>Not a Member? Sign Up Now!</a>
          </Link>
        </div>
      </div>
      <div className="second-wrapper">
        <CSSTransition in={true} appear={true} timeout={0} classNames='pop'>
          <Image width={442} height={555} src={teamShot.src} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default index;
