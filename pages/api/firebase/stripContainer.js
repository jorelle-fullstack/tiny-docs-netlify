import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import firebase from 'firebase/app'
import '../../../services/firebase'
import 'firebase/firestore'

const CARD_OPTIONS = {
	iconStyle: "solid",
	// style: {
	// 	base: {
	// 		iconColor: "#c4f0ff",
	// 		color: "#fff",
	// 		fontWeight: 500,
	// 		fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
	// 		fontSize: "16px",
	// 		fontSmoothing: "antialiased",
	// 		":-webkit-autofill": { color: "#fce883" },
	// 		"::placeholder": { color: "#87bbfd" }
	// 	},
	// 	invalid: {
	// 		iconColor: "#ffc7ee",
	// 		color: "#ffc7ee"
	// 	}
	// }
}

export default function PaymentForm() {
  const [success, setSuccess ] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    const {error, paymentMethod} = stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
    })

    if(!error) {
      try {
          const {id} = paymentMethod
          const response = await axios.post("http://localhost:3000/api/stripe", {
              amount: 1000,
              id
          })

          if(response.data.success) {
              console.log("Successful payment")
              setSuccess(true)
          }

      } catch (error) {
          console.log("Error", error)
      }
    } else {
        console.log(error.message)
    }
  }

  return (
    <>
    {!success ? 
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="FormGroup">
            <div className="FormRow">
            <input placeholder="email" {...register("email", { required: true })} type='email' /> 
            <CardElement options={CARD_OPTIONS}/>
            <input placeholder="discount code" {...register("discount_code", { required: true })} type='text' /> 
            <input placeholder="first name" {...register("first_name", { required: true })} type='text' />
            <input placeholder="last name" {...register("last_name", { required: true })} type='text' />
            <input placeholder="address 1" {...register("address_1", { required: true })} type='text' />
            <input placeholder="address 2" {...register("address_2", { required: true })} type='text' />
            <input placeholder="country" {...register("country", { required: true })} type='text' />
            <input placeholder="zipcode" {...register("zipcode", { required: true })} type='text' />
            <input placeholder="city" {...register("city", { required: true })} type='text' />
            <input placeholder="state" {...register("state", { required: true })} type='text' />
            <input placeholder="phone" {...register("phone_number", { required: true })} type='text' />
            <button type="submit">Checkout Sample</button>
                
                
            </div>
        </fieldset>
        {/* <button>Pay</button> */}
    </form>
    :
    <div>
        <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
    </div> 
    }
        
    </>
  )
}