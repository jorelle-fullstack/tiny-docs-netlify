
import Input from '../../components/form/Input'
import { Button } from '../../components/global'
import { useForm } from "react-hook-form";


const Email = ({ step, stepSubmitCallback }) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    stepSubmitCallback(data)
  };

  return ( 
    <>
      <div className="checkout-wrapper">
        <h4 className='step-title'> <span>1. </span> your Email</h4>

        <div className="steps__form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)} className='form' >
            <Input register={{ ...register("email", { required: 'This field is required' }) }} errors={errors} type="email" placeholder="Enter Email" />

            <Button className='btn--blue' type='submit' >Continue</Button>
          </form>
        </div>
      </div>


    </>
  )
}

export default Email
