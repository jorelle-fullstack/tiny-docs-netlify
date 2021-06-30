
import Input from '../../components/form/Input'
import { Button } from '../../components/global'
import { useForm } from "react-hook-form";
import clsx from 'clsx';



const Email = ({ step, stepSubmitCallback, formData, editCallback }) => {
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

  const FormJSX = () => <form onSubmit={handleSubmit(onSubmit)} className='form' >
    <Input register={{ ...register("email", { required: 'This field is required' }) }} errors={errors} type="email" placeholder="Enter Email" />
    <Button className='btn--blue' type='submit' >Continue</Button>
  </form>

  const DoneStepJSX = () => <div className="steps__info">
    <p>{formData?.email}</p>
    <span onClick={e => editCallback(1)} className="edit">Edit</span>
  </div>


  return (
    <>
      <div className="checkout-wrapper">
        <h4 className={clsx('step-title', { 'steps--inactive': step !== 1 , 'steps--done': step !== 1} )}> <span>1. </span> your Email</h4>
        <div className="steps__form-wrapper">
          {step === 1 ?
            <FormJSX /> :
            <DoneStepJSX />
          }
        </div>
      </div>
    </>
  )

}

export default Email
