const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function handler (req, res) {
    console.log(req.body)
    const { coupon_id } = req.body;
    const coupon = await stripe.coupons.retrieve(
        coupon_id
    );
    res.status(200).json({ coupon_status: coupon.valid});
}