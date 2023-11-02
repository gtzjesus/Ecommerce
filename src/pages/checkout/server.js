import Stripe from 'stripe';
import Express from 'express';
const stripe = new Stripe(
  'sk_test_51Nxx3CFogvytL9FzPxVPAUhpBhvHv7ePHI4zTlFCAhuSjx0ny3J3auGbBFBzyWADIvLUymE0dnDr01yBrm9sq5YV00A3fUThLq'
);
const app = Express();
app.use(Express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5317';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(5317, () => console.log('Running on port 5317'));
