// Dependencies
import { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { CSSTransition } from 'react-transition-group'
import { useRouter } from 'next/router'
import cookies from 'next-cookies'

// Components
import Head from 'next/head'
import { Snackbar } from '../../components/global'
import { Email, Payment, SideBar, Review } from '../../components/checkout'

const Index = ({ email, fName, lName, plan }) => {
  // State variables
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [show, showSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarColor, setSnackbarColor] = useState('')

  const router = useRouter()
  const {
    setError,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState('')

  // Used to hide the snackbar automatically based on timeout value.
  const snackbarCallback = (hide) => {
    if (show) {
      showSnackbar(hide)
    setSnackbarMessage('')
    }
  }
  const setSnackbar = (data, color) => {
    setSnackbarColor(color)
    setSnackbarMessage(data.message)
    showSnackbar(true)  
  }

  const stepSubmitCallback = (inputData) => {
    console.log('%c ⚠ inputData ', 'color:yellow;background:black;padding:5px;', inputData);
    if (step === 3) {
      setLoadingStatus(true)
      console.log('%c ⚠ purchasing... ', 'color:yellow;background:black;padding:5px;',);
      const expYear = '20' + inputData.expiry.substring(5)
      const expMonth = inputData.expiry.substring(0,2)
      const payload = {
        card_number: inputData.cardNumber,
        card_exp_month: expMonth,
        card_exp_year: expYear,
        card_cvc: inputData.cvc, 
        city: inputData.city, 
        country: inputData.country, 
        postal_code: inputData.zipCode, 
        state: inputData.state, 
        paymentMethodType: 'card', 
        user_type: plan,
        coupon: inputData.discount,
        // Firebase Auth
        email: inputData.email,
        phone_number: inputData.phone,
        name: inputData.fName + ' ' + inputData.lName,
        customer_id: localStorage.cus_id
      }
    console.log('%c ⚠ Payload ', 'color:yellow;background:black;padding:5px;', payload);
      // Add subscription to account
      axios.post('/api/stripe/subscription/addSubscription', payload).then((res) => {
          console.log(res)
          if (res.status === 200) {
            // Show checkout success dialog.
            document.cookie = `checkoutSuccess=complete`
            router.push('/checkout/success')
          }
        })
        .catch((error) => {
          // TEMPORARY
          console.error(error)
            const msg = 'Error!  Credit card information is invalid.  Please use a different card.'
            setSnackbar({message: msg}, 'error')
        })
        .finally(() => { setLoadingStatus(false) })
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
    <>
    <Snackbar message={snackbarMessage} show={show} color={snackbarColor} callback={snackbarCallback} />
    <div className='container page-checkout'>
    <Head><title>Checkout</title></Head>
    <div className='steps'>
      <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={500}>
      <Email stepSubmitCallback={stepSubmitCallback} step={step} formData={formData} email={email} editCallback={editCallback} />
      </CSSTransition>
      <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={700}>
      <Payment stepSubmitCallback={stepSubmitCallback} step={step} formData={formData} fName={fName} lName={lName} editCallback={editCallback} snackbarCallback={setSnackbar} />
      </CSSTransition>
      <CSSTransition in={true} appear={true} classNames='fade-slide-left' timeout={900}>
      <Review stepSubmitCallback={stepSubmitCallback} loadingStatus={loadingStatus} step={step} formData={formData} />
      </CSSTransition>
    </div>
    <CSSTransition in={true} appear={true} classNames='fade-slide-right' timeout={900}>
    <div className="side-bar">
      <SideBar />
    </div>
    </CSSTransition>
  </div>
  </>
  )
}

export async function getServerSideProps(ctx) {
  const { email, fName, lName, plan } = cookies(ctx)
  if (email && fName && lName) {
    return {
      props: { email: email, fName: fName, lName: lName, plan: plan }
    }
  } else {
    return {
      redirect: {
        destination: '/plans'
      }
    }
  }
}

export default Index
