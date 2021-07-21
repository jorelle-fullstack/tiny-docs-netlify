// Dependencies
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { login, passwordBaseRegister } from '../../auth'
import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'

// Components
import { Button } from '../../components/global'
import Input from '../../components/form/Input'

// Assets
import registerBg from '../../assets/images/register-bg.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'


const index = () => {
  const router = useRouter()
  const nodeRef = React.useRef(null)
  // State variables
  const [inProp, setInProp] = useState(false);
  const [submitting, setsubmitting] = useState(false)

  // React Forms
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm();
  const redirectLink = '/plans'

  // Triggers animation on page load.
  useEffect(() => { setInProp(true) })

  // Methods
  const onSubmit = async (data) => {
    console.log(data)
    setsubmitting(true)
    const res = await passwordBaseRegister(data)
    setsubmitting(false)

    if (!res.message) {
      return router.push('/plans')
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
      <div className="first-wrapper">
        <div className="content-holder">
          <h1 className='title'>Sign up</h1>
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
            <Button loading={submitting} type='submit' className='btn--red'>Sign Up</Button>
          </form>
          <p>- Or Login With - </p>
          <div className="external-login-wrapper">
            <Button onClick={e => handle3rdPartyRegister('google')}><img className='icon__google' src={googleImg.src} alt="" /></Button>
            <Button onClick={e => handle3rdPartyRegister('facebook')}><img className='icon__facebook' src={fbImg.src} alt="" /></Button>
          </div>
          <Link href='/login' passHref>
            <a className='member'>Already a member? Login</a>
          </Link>
        </div>
      </div>
      <div className="second-wrapper">
      <CSSTransition nodeRef={nodeRef} in={inProp} appear={inProp} timeout={500} classNames='login-image'>
          <img ref={nodeRef} src={registerBg.src} />
        </CSSTransition>
      </div>
    </div>
  )
}

export default index
