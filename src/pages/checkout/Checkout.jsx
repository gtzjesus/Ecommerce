import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import styled from 'styled-components';

const StyledCheckout = styled.div`
  display: flex;
`;
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51Nxx3CFogvytL9FznK3erwiLcWb8APvvxjVkfLIDi7UVnAYVc8ydIykG2JKDnZ2uZ5YT8OtTWeEEfF8M1YE7gU8T00Va8PMq3o'
);

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState('');

  // Create PaymentIntent as soon as the page loads
  useEffect(() => {
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <StyledCheckout>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </StyledCheckout>
  );
}
