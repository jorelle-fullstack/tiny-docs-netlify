const Stripe = require('stripe');
const stripe = require("stripe")("sk_test_51J64FNAEed2wp5pxXJE1b3lDV7L36pPtjVUwZwndQsbZFgLFekhF0YQF8pgf4UNQyIJPLNqgv54lhboVYImTJtbT00YvoXcMD1")

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const {card_number, card_exp_month, card_exp_year, card_cvc, customer_id ,paymentMethodType, user_type, coupon} = req.body;
    let price = "";
    let amount = "";
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: card_number,
        exp_month: card_exp_month,
        exp_year: card_exp_year,
        cvc: card_cvc,
      },
    });
    await stripe.paymentMethods.attach(
      paymentMethod.id,
      {customer: customer_id}
    );

    try {
      if (user_type == "family"){
        price = "price_1J64OtAEed2wp5pxeetSP29D";
        amount = 1000;
      }
      else if(user_type == "pediatric"){
        price = "price_1J64PkAEed2wp5pxzfrVvtPP";
        amount = 2000;
      }
      const subscription = await stripe.subscriptions.create({
        customer: customer_id,
        items: [
          {price: price}, 
        ],
        collection_method: "charge_automatically",
        default_payment_method: paymentMethod.id,
        coupon: coupon
      })
      
    }
    catch(e){
      res.status(400).json({ error: { message: e.message }})
    }

    try{
      const payment = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: [paymentMethodType],
        confirmation_method: 'automatic',
        confirm:'true',
        payment_method: 'pm_card_visa',
      });

      res.status(200).json({ payment_details: payment})
    }
    catch(e){
      res.status(400).json({ error: { message: e.message }})
    }
  }
  else {}
}