
// Dependencies
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import clsx from 'clsx'
import { useCookies } from 'react-cookie'

// Components
import Input from '../../components/form/Input'
import Select from '../../components/form/Select'
import { Button } from '../../components/global'
import CreditCardInput from 'react-credit-card-input'

const Payment = ({ step, stepSubmitCallback, formData, editCallback }) => {
  const [regData] = useCookies(['regData'])
  const [discountCode, setDiscountCode] = useState('')
  // State variables
  const [discountLoading, setDiscountLoading] = useState(false)
  const [discountValid, setDiscountValidity] = useState(false)
  const [cardDetails, setcardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: ''
  })
  const [countryOptions, setCountryOptions] = useState([])

  const handleCardDetails = (e, key) => {
    const value = e.target.value

    setcardDetails({ ...cardDetails, [key]: value })
  }

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fName: regData.fName,
      lName: regData.lName
    }
  });
  const discount = watch('discount')
  const onSubmit = async (data) => {
    const paymentData = data
    console.log(discount)
    if (discountCode) { paymentData.discount = discountCode }
    stepSubmitCallback({ ...paymentData, ...cardDetails })
  };

  const handleDiscount = () => {
    // Checks coupon validation.  Accepts coupon_id parameter.
    if (discount) {
      setDiscountLoading(true)
      axios.post('/api/stripe/subscription/checkCouponValidation', {
          coupon_id: discount
        }).then((res) => {
          console.log(res)
          clearErrors()
          setDiscountCode(discount)
          setDiscountValidity(true)
        })
        .catch((error) => {
          console.error(error)
          setValue('discount', null)
          setDiscountCode('')
          setDiscountValidity(false)
          setError('discount', { type: "manual", message: 'Invalid discount code' })
        })
        .finally(() => { setDiscountLoading(false) })
    }
  }
  // Formats the credit/debit card for preview.
  const formatCardPreview = (cardNumber) => {
    return `XXXX-${cardNumber.substr(cardNumber.length - 4)}`
  }

  // Component to display payment information when this step has been completed.
  const DoneStepJSX = () => <div className="steps__info">
    <div className="flex mb-s">
      <span className='row-first'> Card</span>
      <span>{formatCardPreview(formData.cardNumber)}, {' Expiry '} {formData.expiry} </span>
    </div>
    <div className="flex mb-s">
      <span className='row-first'> Your Name</span>
      <span>{formData.fName} {' '} {formData.lName}</span>
    </div>
    <div className="flex mb-s">
      <span className='row-first'> Phone Number</span>
      <span>{formData.phone}</span>
    </div>
    <div className="flex mb-s">
      <span className='row-first'> Billing Address</span>
      <span>{formData.address1}</span>
    </div>
    <div className="flex mb-s">
      <span className='row-first'> City, State, ZIP Code</span>
      <span>{formData.city}, {' '} {formData.state},  {' '}{formData.zipCode} </span>
    </div>
    <span onClick={e => editCallback(2)} className="edit">Edit</span>
  </div>

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
      const options = data.map(option => ({
        value: option.alpha2Code,
        label: option.name
      }))
      setCountryOptions(options)
    })

  }, [])

  return (
    <>
      <div className="checkout-wrapper">
        <h4 className={clsx('step-title', { 'steps--inactive': step !== 2, 'steps--done': formData.fName })}> <span>2. </span>Payments & Discounts </h4>
        <div className="steps__form-wrapper">
          {step === 2 ?
            <form onSubmit={handleSubmit(onSubmit)} className='form' >

              <CreditCardInput
                cardNumberInputProps={{ value: cardDetails.cardNumber, onChange: e => handleCardDetails(e, 'cardNumber') }}
                cardExpiryInputProps={{ value: cardDetails.expiry, onChange: e => handleCardDetails(e, 'expiry') }}
                cardCVCInputProps={{ value: cardDetails.cvc, onChange: e => handleCardDetails(e, 'cvc') }}
                fieldClassName="card-input"
              />
              <p className='sub-info' >Transactions are secure and encrypted</p>

              <Input className='discount-field' disabled={discountValid} register={{ ...register("discount", {}) }} errors={errors} type="text" placeholder="Promo Code"
                render={() => <Button id="discount-btn" className={clsx('input-inline-button', {
                  'discount-valid': discountValid,
                  null: !discountValid
                })} loading={discountLoading} onClick={handleDiscount} >{discountValid ? 'Verified' : 'Apply' }</Button>}
              />

              <p className="title-2">
                Billing Address
              </p>

              <div className="input-group name-group">
                <Input register={{ ...register("fName", { required: true }) }} errors={errors} type="text" placeholder="First Name" />
                <Input register={{ ...register("lName", { required: true }) }} errors={errors} type="text" placeholder="Last Name" />
              </div>
              <Input register={{ ...register("address1", {}) }} errors={errors} type="text" placeholder="Address 1" />
              <Input register={{ ...register("address2", {}) }} errors={errors} type="text" placeholder="Address 2" />
              <Select
                options={countryOptions}
                register={{ ...register("country", {}) }} errors={errors} type="text" placeholder="Address 2"
              />
              <div className="input-group address-group">
                <Input register={{ ...register("zipCode", { required: true }) }} errors={errors} type="text" placeholder="Zip Code" />
                <Input register={{ ...register("city", { required: true }) }} errors={errors} type="text" placeholder="City " />
                <Select
                  options={countryOptions}
                  register={{ ...register("state", {}) }} errors={errors} type="text" placeholder="Address 2"
                />
              </div>
              <Input register={{ ...register("phone", {}) }} errors={errors} type="text" placeholder="Phone Number" />
              <Button className='btn--blue' type='submit' >Continue</Button>
            </form>
            : formData.fName &&
            <DoneStepJSX />
          }
        </div>
      </div>
    </>
  )

}

export default Payment

