import { Button } from '../../components/global'
import { useForm } from "react-hook-form";


const index = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='page-login'>
      <div className="first-wrapper">
        <div className="form-holder">
        <h1 className='title'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <input defaultValue="test" {...register("email", { required: true })} type='email' />
            <input defaultValue="test" {...register("password", { required: true })} type='password' />

            {errors.email && <span>This field is required</span>}
            <Button className='btn--blue'>Login</Button>
          </form>
        </div>
      </div>
      <div className="second-wrapper">

      </div>

    </div>
  )
}

export default index
