const Stripe = require('stripe');
const stripe = require("stripe")("sk_test_51J64FNAEed2wp5pxXJE1b3lDV7L36pPtjVUwZwndQsbZFgLFekhF0YQF8pgf4UNQyIJPLNqgv54lhboVYImTJtbT00YvoXcMD1")

export default async function handler (req, res) {

    if (req.method === 'POST') {
      const {paymentMethodType, currency} = req.body;
      try{
        const payment = await stripe.paymentIntents.create({
          amount: 2000,
          currency: currency,
          payment_method_types: [paymentMethodType],
          confirmation_method: 'manual',
        });
        res.json({ clientSecret: payment.client_secret}).then(async function(req,res){
          // const paymentIntent = await stripe.paymentIntents.confirm(
          //   res,
          //   {payment_method: 'pm_card_visa'}
          // );
          // console.log(paymentIntent);
        });
      }
      catch(e){
        res.status(400).json({ error: { message: e.message }})
      }
  } else {
    
  }
}