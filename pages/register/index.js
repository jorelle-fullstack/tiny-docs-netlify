import { Button } from '../../components/global'
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { login } from '../../auth'
import Input from '../../components/form/Input'

import registerBg from '../../assets/images/register.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'

const index = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const watchPassword = watch("password");


  return (
    <div className='page-register'>
      <div className="first-wrapper">
        <div className="content-holder">
          <h1 className='title'>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="input-group">
              <Input register={{ ...register("fName", { required: true }) }} errors={errors} type="text" placeholder="First Name" />

              <Input register={{ ...register("sName", { required: true }) }} errors={errors} type="text" placeholder="Last Name" />
            </div>

            <Input register={{ ...register("email", { required: true }) }} errors={errors} type="email" placeholder="Enter Email" />

            <Input register={{
              ...register("password",
                {
                  required: true,
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*.#?&])[A-Za-z\d@$!%.*#?&]{6,}$/,
                    message: 'Your password must contain at least one number and symbol'
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
