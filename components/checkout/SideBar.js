import React from 'react'
import currencyFormater from '../../tools/currencyFormater'
import Input from '../../components/form/Input'
import { useForm } from "react-hook-form";
import { faPray } from '@fortawesome/free-solid-svg-icons';

const staticSumary = {
  provider: 0,

}

function handleDiscount() {

}

const SideBar = () => {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

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

        <form className='form'>
          <Input register={{ ...register("discount", {}) }} errors={errors} type="text" placeholder="Discount Code"
            render={() => <button type="button" className="input-inline-button" onClick={handleDiscount} >Apply</button>}
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
