const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async function handler (req, res) {
    const coupons = await stripe.coupons.list({
      });
    var all_coupons = [];
    for(var i =0; i < Object.keys(coupons.data).length; i++){
      
      all_coupons[i] = coupons.data[i]['id'];

    }
    res.status(200).json({ coupon: all_coupons});
}