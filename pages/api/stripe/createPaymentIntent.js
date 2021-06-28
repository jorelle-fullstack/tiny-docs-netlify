const Stripe = require('stripe');
const stripe = require("stripe")("sk_test_51J64FNAEed2wp5pxXJE1b3lDV7L36pPtjVUwZwndQsbZFgLFekhF0YQF8pgf4UNQyIJPLNqgv54lhboVYImTJtbT00YvoXcMD1")

export default async function handler (req, res) {

    if (req.method === 'POST') {
      const {card_number,card_exp_month,card_exp_year,card_cvc,paymentMethodType,amount} = req.body;
      //need card token before charge
      //cardtoken -> charge-> payment intent

      const token = await stripe.tokens.create({
        card: {
          number: card_number,
          exp_month: card_exp_month,
          exp_year: card_exp_year,
          cvc: card_cvc,
        },
      });

      const charge = await stripe.charges.create({
        amount: amount, 
        currency: "usd",
        card: token,
        description: "payinguser@example.com"
      }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            console.log(JSON.stringify(err, null, 2));
        }
      }).then(async function(){
        try{
          const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: [paymentMethodType],
            confirmation_method: 'manual',
            confirm:'true',
            payment_method: 'pm_card_visa',
          });
          console.log(payment.status);
        }
        catch(e){
          res.status(400).json({ error: { message: e.message }})
        }
      });
  } else {
    
  }
}