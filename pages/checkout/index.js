import { useState } from 'react'
import {
  Email, Payment, SideBar, Review
} from '../../components/checkout'
import { useForm } from "react-hook-form";




const Index = () => {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();


  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState('')

  const stepSubmitCallback = (inputData) => {
    console.log('%c ⚠ inputData ', 'color:yellow;background:black;padding:5px;', inputData);

    setFormData(prevState => ({ ...prevState, ...inputData }))
    setStep(step + 1)

  }


  return (
    <div className='container page-checkout'>
      <div className='steps'>

        <Email stepSubmitCallback={stepSubmitCallback} step={step} />
        <Payment stepSubmitCallback={stepSubmitCallback} step={step} />
        <Review />

      </div>
      <div className="side-bar">
        <SideBar />
      </div>
    </div>
  )
}

export default Index
