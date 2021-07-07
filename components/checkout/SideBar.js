import React from 'react'
import Input from '../../components/form/Input'
import { useForm } from "react-hook-form"
import Link from 'next/link'

const SideBar = () => {
  const handleDiscount = () => {
    setError('discount', {
      type: "manual",
      message: 'Invalid discount code'
    })
  }
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    stepSubmitCallback({ ...data, ...cardDetails })
  };
  return (
    <div className='checkout-wrapper'>
      <p>Order Summary</p>
      {/* Subscription provider list.  TODO:  Setup to display an array of providers -Frolyn R */}
      <table>
        <tbody>
          <tr>
            <td>Provider</td>
            <td className="right">$0.00<br />
            <p className="remove-btn">Remove</p>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Discount Code Field */}
      <form onSubmit={handleSubmit(onSubmit)} className='form' >
      <Input className="discountField" register={{ ...register("discount", {}) }} errors={errors} type="text" placeholder="Discount Code"
                render={() => <button type="button" className="input-inline-button" onClick={handleDiscount} >Apply</button>}
              />
      </form>
      {/* Pricing information. */}
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td className="right">$0.00</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td className="right">$0.00</td>
          </tr>
          <br />
          <tr>
            <td><b>Total</b></td>
            <td className="right"><b>$0.00</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SideBar
