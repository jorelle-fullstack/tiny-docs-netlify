// Dependencies
import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import { faPray } from '@fortawesome/free-solid-svg-icons'
import currencyFormater from '../../tools/currencyFormater'
import clsx from 'clsx'
import axios from 'axios'

// Components
import { Button } from '../../components/global'
import Input from '../../components/form/Input'

const staticSumary = {
  provider: 0,

}

const SideBar = () => {
  // State variables
  const [discountLoading, setDiscountLoading] = useState(false)
  const [discountValid, setDiscountValidity] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const discount = watch('discount')

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
          setValue('discount', null, true)
          setDiscountCode('')
          setDiscountValidity(false)
          setError('discount', { type: "manual", message: 'Invalid discount code' })
        })
        .finally(() => { setDiscountLoading(false) })
    }
  }
  const onSubmit = async (data) => {
    console.log(data)
    if (discountCode) { paymentData.discount = discountCode }
    stepSubmitCallback({ ...data, ...cardDetails })
  }

  return (
    <div className='checkout-wrapper summary'>
      <p className="title-2">
        Order Summary
      </p>

      <div className="summary__details">
        <div className="flex mb-s">
          <span className='row-first'>Provider</span>
          <span>{currencyFormater({ exact: true, amount: staticSumary.provider })}</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <Input register={{ ...register("discount", {}) }} disabled={discountValid} errors={errors} type="text" placeholder="Discount Code"
            render={() => <Button id='discount-btn' type="button" className={clsx('input-inline-button', {
              'discount-valid': discountValid,
              null: !discountValid
            })} loading={discountLoading} onClick={handleDiscount} >{discountValid ? 'Verified' : 'Apply'}</Button>}
          />
        </form>

        <div className="flex mb-s">
          <span className='row-first text-disabled'>Subtotal</span>
          <span className='text-disabled'>{currencyFormater({ exact: true, amount: staticSumary.provider })}</span>
        </div>

        <div className="flex mb-s mb-m">
          <span className='row-first text-disabled' >Tax</span>
          <span className='text-disabled'>{currencyFormater({ exact: true, amount: staticSumary.provider })}</span>
        </div>

        <div className="flex mb-s">
          <span className='row-first'>Total</span>
          <span>{currencyFormater({ exact: true, amount: staticSumary.provider })}</span>
        </div>
      </div>


    </div>
  )
}

export default SideBar
