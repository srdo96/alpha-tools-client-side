import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import fetcher from "../api/axiosInstance";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const { _id, totalPrice: price, userName, userEmail } = data;
  //   console.log(data);
  useEffect(() => {
    fetcher.post("/create-payment-intent", { price }).then((res) => {
      if (res?.data?.clientSecret) {
        setClientSecret(res.data.clientSecret);
      }
    });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    //  confirmCardPayment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log("payInt", paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Payment Successful");

      //   store payment info into database
      const payment = {
        orderID: _id,
        transactionId: paymentIntent.id,
      };
      fetcher.patch(`/order/${_id}`, { payment }).then((res) => {
        setProcessing(false);
        console.log(data);
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn btn-success btn-sm mt-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 mt-5 font-semibold">{cardError}</p>
      )}
      {success && (
        <div>
          <p className="text-green-500 mt-5 font-semibold">{success}</p>
          <p>
            <span>Your transaction id: </span>
            <span className="text-blue-600 font-semibold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
