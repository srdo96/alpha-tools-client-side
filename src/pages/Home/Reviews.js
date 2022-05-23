import React from "react";
import person from "../../assets/images/worker.jpg";
const Reviews = () => {
  return (
    <div className="">
      <h4 className="upper text-center text-lg text-red-700 font-semibold my-4">
        Reviews
      </h4>
      <h2 className="text-4xl text-center font-medium">
        Our Customers <span className="font-bold">Are Saying?</span>
      </h2>
      <div class=" dark:bg-gray-800 w-full mx-auto p-8">
        <div class="flex items-center  flex-col  justify-center">
          <a href="#" class="block relative">
            <img
              alt="profil"
              src={person}
              class="mx-auto object-cover rounded-full h-40 w-40 "
            />
          </a>
          <div class="w-full md:w-2/3">
            <p class="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-3xl">
              <span class="font-bold text-indigo-500">“</span>
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
              <span class="font-bold text-indigo-500">”</span>
            </p>
            <div class="flex mt-8 items-center justify-center">
              <span class="font-semibold text-indigo-500 mr-2 text-lg">
                Jean Miguel
              </span>
              <span class="text-gray-400 text-xl font-light">/</span>
              <span class="text-gray-400 text-md ml-2">User of tail-kit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
