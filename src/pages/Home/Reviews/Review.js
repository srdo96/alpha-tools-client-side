import React from "react";

const Review = ({ review }) => {
  const { name, desc, rating, img } = review;
  return (
    <div className="  w-full mx-auto p-8">
      <div className="flex items-center flex-col justify-center">
        {/* <a href="#" className="block relative">
          {img ? (
            <img
              alt="profil"
              src={img}
              className="mx-auto object-cover rounded-full h-40 w-40 "
            />
          ) : (
            <img
              alt="profil"
              src="https://i.ibb.co/6yN40Vp/user-8.jpg"
              className="mx-auto object-cover rounded-full h-40 w-40 "
            />
          )}
        </a> */}
        <div className="w-full md:w-2/3 mt-2 ">
          <p className="text-gray-600  w-full md:w-2/3 m-auto text-lg md:text-2xl text-center">
            <span className="font-bold text-indigo-500">“</span>
            {desc}
            <span className="font-bold text-indigo-500"> ”</span>
          </p>

          <div className="flex mt-8 items-center justify-center">
            <span className="font-semibold text-indigo-500 mr-2 text-lg">
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
