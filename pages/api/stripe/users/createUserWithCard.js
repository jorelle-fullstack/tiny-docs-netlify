const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const {card_number, card_exp_month, card_exp_year, card_cvc, first_name, last_name, email} = req.body;

    const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: {
          number: card_number,
          exp_month: card_exp_month,
          exp_year: card_exp_year,
          cvc: card_cvc,
        },
      });

    const customer = await stripe.customers.create({
        email: email,
        name: first_name +" "+ last_name,
        description: 'Tiny Docs Customer',
        payment_method: paymentMethod.id
      });

    res.status(200).json({customer_details: customer});
  }
  else {}
}