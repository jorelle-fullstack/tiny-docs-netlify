// Dependencies
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import ReactDOM from 'react-dom'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

// Components
import Head from 'next/head'
import {
  Email, Payment, SideBar, Review
} from '../../components/checkout'

// APIs
import { addSubscription } from '../api'

const Index = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (!localStorage.plan) {
      router.push('/plans')
    }
  })
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState('')

  const stepSubmitCallback = (inputData) => {
    console.log('%c ⚠ inputData ', 'color:yellow;background:black;padding:5px;', inputData);
    if (step === 3) {
      console.log('%c ⚠ purchasing... ', 'color:yellow;background:black;padding:5px;',);
      const payload = {
        card_number: inputData.cardNumber,
        card_exp_month: inputData.expiry.substring(0,2), 
        card_exp_year: inputData.expiry.substring(5,2),
        card_cvc:inputData.cvc, 
        city: inputData.city, 
        country: inputData.country, 
        postal_code: inputData.zipCode, 
        state: inputData.state, 
        paymentMethodType: '', 
        user_type: localStorage.plan, 
        coupon: '',
        // Firebase Auth
        email: inputData.email,
        phone_number: inputData.phone,
        name: inputData.fName + ' ' + inputData.lName,
        customer_id: localStorage.cus_id
      }
      console.log(payload)
      // Add subscription to account
      axios.post(addSubscription, payload).then((res) => {
          console.log(res)
          clearErrors()
        })
        .catch((error) => {
          console.error(error.message)
          setError('addSubscription', { type: "manual", message: error.message })
        })
      console.log('%c ⚠ Compiling payload... ', 'color:yellow;background:black;padding:5px;',);
      return null
    } 

    setFormData(prevState => ({ ...prevState, ...inputData }))
    setStep(step + 1)
  }

  const editCallback = (editStep) => {
    setStep(editStep)
  }


  return (
    <div className='container page-checkout'>
      <Head><title>Checkout</title></Head>
      <div className='steps'>
        <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={500}>
        <Email stepSubmitCallback={stepSubmitCallback} step={step} formData={formData} editCallback={editCallback} />
        </CSSTransition>
        <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={700}>
        <Payment stepSubmitCallback={stepSubmitCallback} step={step} formData={formData} editCallback={editCallback} />
        </CSSTransition>
        <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={900}>
        <Review stepSubmitCallback={stepSubmitCallback} step={step} formData={formData} editCallback={editCallback} />
        </CSSTransition>
      </div>
      <CSSTransition in={true} appear={true} classNames='fade-slide-right' timeout={900}>
      <div className="side-bar">
        <SideBar />
      </div>
      </CSSTransition>
    </div>
  )
}


export default Index
