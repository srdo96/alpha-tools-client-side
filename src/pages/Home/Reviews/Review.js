import React from "react";

const Review = ({ review }) => {
  const { name, desc, rating, img } = review;
  return (
    <div class="  w-full mx-auto p-8">
      <div class="flex items-center flex-col justify-center">
        <a href="#" class="block relative">
          {img ? (
            <img
              alt="profil"
              src={img}
              class="mx-auto object-cover rounded-full h-40 w-40 "
            />
          ) : (
            <img
              alt="profil"
              src="https://i.ibb.co/6yN40Vp/user-8.jpg"
              class="mx-auto object-cover rounded-full h-40 w-40 "
            />
          )}
        </a>
        <div class="w-full md:w-2/3 mt-2 ">
          <p class="text-gray-600  w-full md:w-2/3 m-auto text-lg md:text-2xl text-center">
            <span class="font-bold text-indigo-500">“</span>
            {desc}
            <span class="font-bold text-indigo-500"> ”</span>
          </p>

          <div class="flex mt-8 items-center justify-center">
            <span class="font-semibold text-indigo-500 mr-2 text-lg">
              <p className="text-black font-medium">Rating: {rating}</p>
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
