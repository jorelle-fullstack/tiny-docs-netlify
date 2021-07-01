const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async function handler (req, res) {
    const { subscription_id } = req.body;

    const subscription = await stripe.subscriptions.retrieve(
        subscription_id
      );
    res.status(200).json({ subscription_details: subscription_id});
}