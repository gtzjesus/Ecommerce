// STRIPE + EXPRESS INTEGRATION
import Stripe from 'stripe';
import Express from 'express';
const stripe = new Stripe(
  'sk_test_51Nxx3CFogvytL9FzPxVPAUhpBhvHv7ePHI4zTlFCAhuSjx0ny3J3auGbBFBzyWADIvLUymE0dnDr01yBrm9sq5YV00A3fUThLq'
);
const express = new Express();
const server = express();
server.use(express.static('public'));
server.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

server.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

server.listen(5173, () => console.log('Node server listening on port 5173!'));
