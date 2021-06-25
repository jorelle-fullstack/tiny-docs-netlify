import { Button } from '../../components/global'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import Input from '../../components/form/Input'

const index = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const router = useRouter()
  const onSubmit = data => {
    router.push('/forgot/reset-confirmation')
  }

  return (
    <div className='page-forgot'>
      <div className="content-wrapper">
        <h1 className='form-title'>Forgot Password?</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">

          <Input register={{ ...register("email", { required: true }) }} errors={errors} type="text" placeholder="Enter Email " />

          <Button type='submit' className='btn--blue'>reset password</Button>
        </form>

        <Link href='/register' passHref>
          <a className='link'>Not a Member? Sign Up Now!</a>
        </Link>
      </div>
    </div>
  )
}

export default index
