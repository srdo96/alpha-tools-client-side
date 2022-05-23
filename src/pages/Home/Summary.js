import React from "react";

const Summary = () => {
  return (
    <div
      style={{ background: "url('../../assets/images/worker.jpg')" }}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "
    >
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
          </div>

          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">75</h6>

          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Countries
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">350+</h6>

          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Trusted Clients
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>

          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">483+</h6>

          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Feedbacks
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full  sm:w-12 sm:h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>

          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">50K+</h6>

          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Revenue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
