import React from "react";
import person from "../../../assets/images/worker.jpg";
const Review = ({ c }) => {
  const { img, desc, name } = c;
  return (
    <div class="  w-full mx-auto p-8">
      <div class="flex items-center flex-col justify-center">
        <a href="#" class="block relative">
          <img
            alt="profil"
            src={img}
            class="mx-auto object-cover rounded-full h-40 w-40 "
          />
        </a>
        <div class="w-full md:w-2/3 mt-2">
          <p class="text-gray-600  w-full md:w-2/3 m-auto text-left text-lg md:text-2xl">
            <span class="font-bold text-indigo-500">“</span>
            {desc}
            <span class="font-bold text-indigo-500"> ”</span>
          </p>
          <div class="flex mt-8 items-center justify-center">
            <span class="font-semibold text-indigo-500 mr-2 text-lg">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
