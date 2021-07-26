const Stripe = require('stripe');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
export default async function handler (req, res) {
    if (req.method === 'POST') {
        const { payment_method_id } = req.body;
        const paymentMethod = await stripe.paymentMethods.update(
            payment_method_id,
            {metadata: {order_id: '6735'}} //sample
        ); 
    }
    else{

    }
}