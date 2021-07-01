const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const {first_name, last_name, email} = req.body;

    const customer = await stripe.customers.create({
        email: email,
        name: first_name +" "+ last_name,
        description: 'Tiny Docs Customer'
      });

    res.status(200).json({customer_details: customer});
  }
  else {}
}