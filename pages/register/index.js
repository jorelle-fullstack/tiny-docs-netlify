// Dependencies
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { login, passwordBaseRegister } from '../../auth'
import React, { useState as UseState } from "react"
import { useRouter as UseRouter } from 'next/router'
import Head from 'next/head'
import cookies from 'next-cookies'

// Components
import { Button } from '../../components/global'
import Input from '../../components/form/Input'
import Image from 'next/image'

// Assets
import registerBg from '../../assets/images/register-bg.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'


const Index = ({ plan }) => {
  const router = UseRouter()

  // State variables
  const [submitting, setsubmitting] = UseState(false)

  // React Forms
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
  const redirectLink = '/plans'
  console.log(plan)

  // Methods
  const onSubmit = async (data) => {
    const formData = data
    formData.plan = plan
    // Caches registration data.
    setsubmitting(true)
    const res = await passwordBaseRegister(formData)
    setsubmitting(false)

    if (!res.message) {
      let r = null

      document.cookie = `fName=${formData.fName}`
      document.cookie = `lName=${formData.lName}`
      document.cookie = `email=${formData.email}`
      
      if (formData.plan === 'Freemium') {
        r = router.push('/my-account')
      } else {
        r = router.push('/checkout')
      }
      return r
    }
    
    if (res.message.includes('email')) {
      setError('email', {
        type: 'manual',
        message: 'Email already exist'
      })
    }
  };


  const handle3rdPartyRegister = async (type) => {
    try {
      await login(type)
      return router.push(redirectLink)
    } catch (error) {
    }
  }

  const watchPassword = watch("password");
  return (
    <div className='page-register'>
      <Head><title>Register your Account</title></Head>
      <div className="first-wrapper">
        <div className="content-holder">
        <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={0}>
          <h1 className='title'>Sign up</h1>
          </CSSTransition>
          <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={100}>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="input-group">
              <Input register={{ ...register("fName", { required: true }) }} errors={errors} type="text" placeholder="First Name" />
              <Input register={{ ...register("lName", { required: true }) }} errors={errors} type="text" placeholder="Last Name" />
            </div>
            <Input register={{ ...register("email", { required: true }) }} errors={errors} type="email" placeholder="Enter Email" />
            <Input register={{
              ...register("password",
                {
                  required: true,
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*.#?&])[A-Za-z\d@$!%.*#?&]{6,}$/,
                    message: 'Strong passwords have at least 6 characters and a mix of letters and numbers'
                  }
                })
            }} errors={errors} type="password" placeholder="Password" />
            <Input
              type="password"
              placeholder="Confirm password"
              errors={errors}
              register={{
                ...register("confirmPass", {
                  validate: {
                    checkUrl: (pass) => pass === watchPassword || 'Password did not match'
                  }
                })
              }}
            />
          <CSSTransition appear={true} in={true} classNames='pop' timeout={200}>
            <Button loading={submitting} type='submit' className='btn--red'>Sign Up</Button>
          </CSSTransition>
          </form>
          </CSSTransition>
          <p>- Or Login With - </p>
          <div className="external-login-wrapper">
            <CSSTransition appear={true} in={true} classNames='pop' timeout={600}>
            <div className='social-btn' >
            <Button className='social' onClick={e => handle3rdPartyLogin('google')}>
              <div className='icon__google'>
              <Image src={googleImg} width={44} height={44} alt="" />
              </div>
            </Button>
            </div>
            </CSSTransition>
            <CSSTransition in={true} appear={true} classNames='pop' timeout={600}>
            <div className='social-btn' >
            <Button className='social' onClick={e => handle3rdPartyLogin('facebook')}>
              <div className='icon__facebook'>
              <Image src={fbImg} width={44} height={44} alt="" />
              </div>
              </Button>
            </div>
            </CSSTransition>
          </div>
          <Link href='/login' passHref>
            <a className='member'>Already a member? Login</a>
          </Link>
        </div>
      </div>
      <div className="second-wrapper">
      <CSSTransition in={true} appear={true} timeout={0} classNames='pop'>
          <Image width={525} height={601} src={registerBg} alt='' />
        </CSSTransition>
      </div>
    </div>
  )
}
export async function getServerSideProps(ctx) {
  const { plan } = cookies(ctx)
  if (plan) {
    return {
      props: { plan: plan }
    }
  } else {
    return {
      redirect: {
        destination: '/plans'
      }
    }
  }
}
export default Index
