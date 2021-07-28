const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async function handler (req, res) {
    const { customer_id } = req.body;
    const paymentMethod = await stripe.paymentMethods.retrieve(
      customer_id
    );
    res.status(200).json({ payment_details: paymentMethod });
}
