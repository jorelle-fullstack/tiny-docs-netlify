
import Input from '../../components/form/Input'
import { Button } from '../../components/global'
import { useForm } from "react-hook-form";
import clsx from 'clsx';
import addSubscription from '../../pages/api/stripe/subscription/addSubscription'


const Email = ({ step, stepSubmitCallback, formData, editCallback }) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(formData)
    // Fires the formData variable as the subscription and adds it to the user's account.
    addSubscription(formData)
    console.lo
    stepSubmitCallback(data)
  };

  const FormJSX = () => <form onSubmit={handleSubmit(onSubmit)} className='form' >
    <p>Review your information and purchase when you’re ready.</p>
    <Button className='btn--blue' type='submit' >Purchase</Button>
  </form>

  const DoneStepJSX = () => <div className="steps__info">
    <p>{formData?.email}</p>
    <span onClick={e => editCallback(1)} className="edit">Edit</span>
  </div>

  console.log('%c ⚠ step ', 'color:yellow;background:black;padding:5px;', step);

  return (
    <>
      <div className="checkout-wrapper">
        <h4 className={clsx('step-title', { 'steps--inactive': step !== 3, 'steps--done': step === 3 })}> <span>3. </span> Review & Purchase</h4>
        <div className="steps__form-wrapper">
          {step === 3 &&
            <FormJSX />
          }
        </div>
      </div>
    </>
  )

}

export default Email
