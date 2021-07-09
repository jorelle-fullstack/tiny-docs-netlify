import { Button } from '../../components/global'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import Input from '../../components/form/Input'
import { useState } from "react";
import axios from 'axios'

const index = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [submitting, setsubmitting] = useState(false)

  const router = useRouter()
  const onSubmit = async (data) => {

    try {
      setsubmitting(true)
      await axios.post('/api/firebase/forgotpass/', {
        email: data.email
      })
      setsubmitting(false)
      router.push('/forgot/reset-confirmation?success=true')

    } catch (error) {
      console.log('%c ⚠ Error sending forgot request ', 'color:yellow;background:black;padding:5px;', error);
      setsubmitting(false)
    }
  }

  return (
    <div className='page-forgot'>
      <div className="content-wrapper">
        <h1 className='form-title'>Forgot Password?</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <Input register={{ ...register("email", { required: true }) }} errors={errors} type="text" placeholder="Enter Email " />
          <Button loading={submitting} type='submit' className='btn--blue'>reset password</Button>
        </form>
        <Link href='/register' passHref>
          <a className='link'>Not a Member? Sign Up Now!</a>
        </Link>
      </div>
    </div>
  )
}

export default index
