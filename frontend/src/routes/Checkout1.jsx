import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";

const stripePromise = loadStripe(
  "pk_test_51OxEw9DOd26wYEUA2rRVfVu8g5fQurHTxMDjrXV2rWKYVRWOgYMnojIRqH9nUI3DFNU1bOHF5vQsK14Oklfgfs1H00uw1zIcYa"
);

const Checkout1 = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    const url = `${import.meta.env.VITE_SOURCE_URL}/create-checkout-session1`;
    return fetch(url, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        return data.client_secret;
      });
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout1">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};
export default Checkout1;
