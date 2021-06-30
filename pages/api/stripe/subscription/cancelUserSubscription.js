const Stripe = require('stripe');
const stripe = require("stripe")("sk_test_51J64FNAEed2wp5pxXJE1b3lDV7L36pPtjVUwZwndQsbZFgLFekhF0YQF8pgf4UNQyIJPLNqgv54lhboVYImTJtbT00YvoXcMD1")

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