const Stripe = require('stripe');
const stripe = require("stripe")("sk_test_51J64FNAEed2wp5pxXJE1b3lDV7L36pPtjVUwZwndQsbZFgLFekhF0YQF8pgf4UNQyIJPLNqgv54lhboVYImTJtbT00YvoXcMD1")

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