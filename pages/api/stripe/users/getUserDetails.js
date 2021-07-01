const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async function handler (req, res) {
    const { customer_id } = req.body;
    const customer = await stripe.customers.retrieve(
        customer_id
    );
    res.status(200).json({ customer_details: customer })
}