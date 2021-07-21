// Dependencies
import { useForm } from "react-hook-form";
import { login, passwordBasedLogin } from '../../auth'
import React, { useState, useEffect } from "react";
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
import loginBg from '../../assets/images/login.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'

const index = () => {
  const router = useRouter()

  // State variables
  const [inProp, setInProp] = useState(false);
  const [submitting, setsubmitting] = useState(false)
  const {
    heroImageRef,
    googleBtnRef,
    facebookBtnRef,
    formRef
  } = React.useRef(null)

  const redirectLink = '/about-us'

  // Triggers animation on page load.
  useEffect(() => {
    setInProp(true)
  })

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
          <h1 className='title'>Login</h1>
          {/* Login Form */}
          <CSSTransition classNames='fade-slide-left' nodeRef={formRef} in={inProp} appear={true} timeout={500}>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className='form'>
            <Input showError={false} register={{ ...register("email", { required: true }) }} errors={errors} type="email" placeholder="Enter Email" />
            <Input showError={false} register={{ ...register("password", { required: true }) }} errors={errors} type="password" placeholder="Enter Password" />
            {errors.email && <span className="form--error">{errors.email.message} </span>}
            <Link href='/forgot'><a className='forgot text-disabled'>Forgot Password?</a></Link>
            <Button loading={submitting} type='submit' className='btn__login btn--blue'>Login</Button>
          </form>
          </CSSTransition>
          <p>- Or Login With - </p>
          <div className="external-login-wrapper">
            <CSSTransition nodeRef={googleBtnRef} in={inProp} classNames='pop' timeout={300}>
            <div className='social-btn' ref={googleBtnRef} >
            <Button className='social' onClick={e => handle3rdPartyLogin('google')}><img className='icon__google' src={googleImg.src} alt="" /></Button>
            </div>
            </CSSTransition>
            <CSSTransition nodeRef={facebookBtnRef} in={inProp} classNames='pop' timeout={500}>
            <div className='social-btn' ref={facebookBtnRef} >
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
        <CSSTransition nodeRef={heroImageRef} in={inProp} timeout={1000} classNames='login-image'>
          <img ref={heroImageRef} src={teamShot.src} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default index;
