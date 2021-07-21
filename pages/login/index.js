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
    emailRef,
    passwordRef,
    forgotRef
  } = React.useRef(null)

  const redirectLink = '/about-us'

  // Triggers animation on page load.
  useEffect(() => { setInProp(true) })

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
        <CSSTransition classNames='pop' nodeRef={emailRef} in={inProp} timeout={500}>
          <h1 className='title'>Login</h1>
          </CSSTransition>
          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <CSSTransition classNames='pop' nodeRef={emailRef} in={inProp} timeout={500}>
            <Input ref={emailRef} showError={false} register={{ ...register("email", { required: true }) }} errors={errors} type="email" placeholder="Enter Email" />
            </CSSTransition>
            <CSSTransition classNames='pop' nodeRef={passwordRef} in={inProp} timeout={500}>
            <Input ref={passwordRef} showError={false} register={{ ...register("password", { required: true }) }} errors={errors} type="password" placeholder="Enter Password" />
            </CSSTransition>
            {errors.email && <span className="form--error">{errors.email.message} </span>}
            <CSSTransition classNames='fade-slide-right' nodeRef={forgotRef} in={inProp} timeout={500}>
            <Link href='/forgot' ref={forgotRef}>
              <a className='forgot text-disabled'>Forgot Password?</a>
            </Link>
            </CSSTransition>
            <Button loading={submitting} type='submit' className='btn__login btn--blue'>Login</Button>
          </form>
          <p>- Or Login With - </p>
          <div className="external-login-wrapper">
            <CSSTransition nodeRef={googleBtnRef} in={inProp} classNames='pop' timeout={500}>
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
        <CSSTransition nodeRef={heroImageRef} in={inProp} appear={inProp} timeout={500} classNames='login-image'>
          <img ref={heroImageRef} src={teamShot.src} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default index;
