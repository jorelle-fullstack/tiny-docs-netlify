const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const {subscription_id} = req.body
    const deleted = await stripe.subscriptions.del(
      subscription_id
    );
    res.status(200).json({subscription_details: deleted});
  }
  else {}
}