import { Button } from "../../components/global";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { login } from '../../auth'
import Input from '../../components/form/Input'
import loginBg from '../../assets/images/login.svg'
import googleImg from '../../assets/images/google.svg'
import fbImg from '../../assets/images/facebook.svg'

const index = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log({ ...register('email', { required: true }) })


  return (
    <div className="page-login">
      <div className="first-wrapper">
        <div className="content-holder">
          <h1 className='title'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>

            <Input register={{ ...register("email", { }) }} errors={errors} type="email" placeholder="Enter Email" />

            <Input register={{ ...register("password", { required: true }) }} errors={errors} type="password" placeholder="Enter Password" />

            <Link href='/forgot' passHref>
              <a className='forgot'>Forgot Password</a>
            </Link>

            <Button type='submit' className='btn--blue'>Login</Button>
          </form>

          <p>- Or Login With - </p>

          <div className="external-login-wrapper">
            <Button onClick={e => login('google')}><img src={googleImg.src} alt="" /></Button>
            <Button onClick={e => login('facebook')}><img src={fbImg.src} alt="" /></Button>
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
