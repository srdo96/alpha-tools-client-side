import React from "react";
import tec from "../../assets/images/icons/custom-box-icon-1.png";
import delevery from "../../assets/images/icons/custom-box-icon-2.png";
import expert from "../../assets/images/icons/custom-box-icon-3.png";
import support from "../../assets/images/icons/custom-box-icon-4.png";

const Best = () => {
  return (
    <div className="container mx-auto px-6 p-6 bg-base-100 dark:bg-gray-800">
      <div className="mb-16 text-center ">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
          In Industry
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl ">
          Why We are Best
        </p>
      </div>
      <div className="grid lg:grid-cols-2  my-12 w-2/3 mx-auto  border-2 justify-items-stretch">
        {/* Delivery On Time */}
        <div
          className=" lg:border-r-0 border-b h-72"
          style={{ background: "#ff5e14" }}
        >
          <div className="flex justify-center mt-16 ">
            <div>
              <div className="flex justify-center">
                <img className="w-20 mb-2" src={delevery} alt="" />
              </div>
              <h4 className="  text-white text-3xl">Delivery On Time</h4>
            </div>
          </div>
        </div>
        {/* w-full border-b md:w-1/2 md:border-r lg:w-2/3 h-72 */}
        {/* Expert Engineers */}
        <div
          className=" md:border-r border-b lg:border-r-0 h-72 "
          style={{ background: "#273272" }}
        >
          <div className="flex justify-center mt-16 ">
            <div>
              <div className="flex justify-center">
                <img className="w-20 mb-2" src={expert} alt="" />
              </div>
              <h4 className="  text-white text-3xl">Expert Engineers</h4>
            </div>
          </div>
        </div>
        {/* Advanced Technology */}
        <div
          className="border-b  md:border-r   lg:border-r-0 h-72 "
          style={{ background: "#273272" }}
        >
          <div className="flex justify-center mt-16 ">
            <div>
              <div className="flex justify-center">
                <img className="w-20 mb-2" src={expert} alt="" />
              </div>
              <h4 className="  text-white text-3xl">Advanced Technology</h4>
            </div>
          </div>
        </div>
        {/* Customer Support */}
        <div
          className=" border-b  md:border-r  lg:border-r-0 h-72 "
          style={{ background: "#ff5e14" }}
        >
          <div className="flex justify-center mt-16 ">
            <div>
              <div className="flex justify-center">
                <img className="w-20 mb-2" src={support} alt="" />
              </div>
              <h4 className="  text-white text-3xl">Customer Support</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
