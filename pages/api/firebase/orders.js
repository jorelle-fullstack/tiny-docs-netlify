import React, {useState} from 'react'

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './stripContainer';

const stripeTestPromise = loadStripe("pk_test_51J64FNAEed2wp5px7lzN8ACl13qRQpvWWCczmZwFpdObb2FxmXcNxFEUNGAXf0UTZZKQ0V7mjZwdzMQYpU0zmsDy006Z9icTCI")

const orders = () => {
  //State
 
  const onSubmit = data => {
      console.log(data.email);
      // firebase
      // .firestore()
      // .collection("orders")
      // .doc(user.user.uid)
      // .set({ //Set Collection Data
      //   email: data.email,
      //   discount_code: data.discount_code,
      //   email: data.email,
      //   user_type:"freemium",
      //   time_stamp: firebase.firestore.Timestamp.now()
      // })
      // .then(
      //   console.log(user)
      //   // Do something like redirect, store cookies, go to splash page
      // ).catch((error) => {
      //   console.log(error.code);
      // })
  }  

  return (
    <Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>

  )
}

export default orders