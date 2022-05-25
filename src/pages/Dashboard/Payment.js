import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetcher from "../../api/axiosInstance";
import Loading from "../../components/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0kyGHNHwJkKNhdhpiTxfNlOLHZuwJ0oDKzDU9u6CZx08bwgG1s9YoNk7XhUY4Y9oYMgs6TvyQD519rvvD7L26u00veFwBxoP"
);
const Payment = () => {
  const { id } = useParams();
  console.log("id", id);
  const { data, isLoading, refetch } = useQuery("Order", () =>
    fetcher.get(`/order/${id}`)
  );
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }
  console.log(data?.data?.userName);
  return (
    <div className="flex justify-center">
      <div>
        <div class="card  w-50 max-w-xl bg-white shadow-xl my-12 grid grid-cols-3 ">
          <div class="card-body col-span-2">
            <p className="text-success font-bold">
              Hello, {data?.data?.userName}
            </p>
            <h2 class="card-title">Pay for {data?.data?.toolsName}</h2>
            <p>Order Quantity: {data?.data?.order}</p>
            <p>Unit price: ${data?.data?.price_unit}</p>
            <hr />
            <p>Please pay ${data?.data?.totalPrice}</p>
          </div>
          <div className="flex  items-center">
            <img
              className="h-2/3 w-4/5"
              src="https://i.ibb.co/jRnJyZ3/wrench.webp"
              alt=""
            />
          </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-xl shadow-2xl bg-white">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
