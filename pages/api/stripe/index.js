const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
    if (req.method === 'POST') {
      let { amount, id } = req.body
      try {
        const payment = await stripe.paymentIntents.create({
          amount,
          currency: "USD",
          description: "Spatula company",
          payment_method: id,
          confirm: true
        })
        console.log("Payment", payment)
        res.json({
          message: "Payment successful",
          success: true
        })
      } catch (error) {
        console.log("Error", error)
        res.json({
          message: "Payment failed",
          success: false
        })
      }
  } else {
    // Handle any other HTTP method
  }
}