const Stripe = require('stripe');
const stripe = require("stripe")("sk_test_51J64FNAEed2wp5pxXJE1b3lDV7L36pPtjVUwZwndQsbZFgLFekhF0YQF8pgf4UNQyIJPLNqgv54lhboVYImTJtbT00YvoXcMD1")
export default async function handler (req, res) {
    const coupons = await stripe.coupons.list({
      });
    var all_coupons = [];
    for(var i =0; i < Object.keys(coupons.data).length; i++){
      
      all_coupons[i] = coupons.data[i]['id'];

    }
    res.status(200).json({ coupon: all_coupons});
}