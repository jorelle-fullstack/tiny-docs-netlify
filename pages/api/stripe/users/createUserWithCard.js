import firebase from 'firebase/app'
import '../../../../services/firebase'
import 'firebase/firestore'

const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const {
      card_number,
      card_exp_month,
      card_exp_year,
      card_cvc,
      first_name,
      last_name,
      email,
      city,
      country,
      postal_code,
      state,
      phone_number} = req.body;

    const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: card_number,
          exp_month: card_exp_month,
          exp_year: card_exp_year,
          cvc: card_cvc,
          billing_details:{
            address:{
              city: city,
              country: country,
              postal_code: postal_code,
              state: state
            },
            email: email,
            name: first_name + " " + last_name,
            phone: phone_number
          }
        },
      });

    const customer = await stripe.customers.create({
        email: email,
        name: first_name +" "+ last_name,
        description: 'Tiny Docs Customer',
        payment_method: paymentMethod.id
      });
    res.status(200).json({customer_details: customer});
    /* await firebase.firestore().collection('users').doc(userId).set({
      subscription_id:
    });
 */

  }
  else {}
}