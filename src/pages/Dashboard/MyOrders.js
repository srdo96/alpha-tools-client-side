import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import fetcher from "../../api/axiosInstance";
import Loading from "../../components/Loading/Loading";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user.email;
  const { data, isLoading, refetch } = useQuery("myOrders", () =>
    fetcher.get(`/orders/${email}`)
  );

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }
  const handleDeleteOrder = (id) => {
    fetcher.delete(`/orders/${id}`).then((res) => {
      toast.success("Removed your order successfully.");
      refetch();
    });
  };
  return (
    <div class="ml-2 ">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Order Quantity</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map(
            ({ _id, toolsName, price_unit, order, status }, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{toolsName}</td>
                <td>{price_unit}</td>
                <td>{order}</td>
                <td>{status}</td>
                {status.includes("unpaid") ? (
                  <td onClick={() => handleDeleteOrder(_id)} className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                ) : (
                  <td />
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
