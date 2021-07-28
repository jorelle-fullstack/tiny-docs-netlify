
// Dependencies
import clsx from 'clsx';
import { useForm } from "react-hook-form";
import { useState } from 'react/cjs/react.development';

// Components
import { Button } from '../../components/global'

const Email = ({ step, stepSubmitCallback, formData, editCallback }) => {
  const [loadingStatus, setLoadingStatus] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // setLoadingStatus(true)
    stepSubmitCallback(formData)
  };

  const FormJSX = () => <form onSubmit={handleSubmit(onSubmit)} className='form' >
    <p>Review your information and purchase when you’re ready.</p>
    <Button className='btn--blue' type='submit' loading={loadingStatus}>Purchase</Button>
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
