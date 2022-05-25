import React from "react";
import toast from "react-hot-toast";
import fetcher from "../api/axiosInstance";

const DeleteConfirmModal = ({ refetch, id }) => {
  const handleDeleteOrder = (id) => {
    fetcher.delete(`/orders/${id}`).then((res) => {
      toast.success("Removed your order successfully.");
      refetch();
    });
  };
  return (
    <div>
      <textarea
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className=" shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
          <div className="w-full h-full text-center">
            <div className="flex h-full flex-col justify-between">
              <svg
                width="40"
                height="40"
                className="mt-4 w-12 h-12 m-auto text-indigo-500"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
              </svg>
              <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                Remove Order
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                Are you sure you want to delete <br /> this order ?
              </p>
              <div className="flex items-center justify-between gap-4 w-full mt-8">
                <label
                  htmlFor="delete-confirm-modal"
                  onClick={() => handleDeleteOrder(id)}
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Delete
                </label>

                <label
                  htmlFor="delete-confirm-modal"
                  type="button"
                  className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
