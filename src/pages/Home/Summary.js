import React from "react";

const Summary = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">80</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Countries
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">350+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Trusted Clients
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">483+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Feedbacks
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
