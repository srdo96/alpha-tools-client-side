import React from "react";
import plant from "../../assets/images/5.webp";

const Newslatter = () => {
  return (
    <div className="bg-base-100 flex justify-center ">
      <div className="flex mb-1">
        <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16 ">
          <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
            We&#x27;ve got more coming...
          </h2>
          <p className="mt-2 max-w-xl text-base text-gray-400">
            Sign up for our newsletter and we&#x27;ll email you every time we
            release a new batch of components.
          </p>
          <div>
            <div className="sm:flex jusitfy-start mt-6">
              <div className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Subscribe'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block  inset-y-0 lg:left-2/3 xl:left-1/2 ">
          {/* <img src={plant} alt="" /> */}
          <img className="" src={plant} alt="shopping item" />
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
