import React from "react";
import sakib from "../assets/images/sakib.jpeg";

const MyPortfolio = () => {
  return (
    <div className="mt-16">
      <div className=" dark:bg-gray-800 flex relative  items-center overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative ">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="   text-4xl sm:text-4xl font-bold flex flex-col leading-none dark:text-white text-gray-800">
              Hello,
              <span className="text-4xl sm:text-5xl">
                I'm <span className="text-emerald-600">Sakib</span>
              </span>
            </h1>
            <p className="text-2xl font-medium my-3">Web Developer</p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
              Hi, my name is Sakib. I am a junior web developer.
              <br className="hidden lg:block" /> I love to explore new thing
            </p>
          </div>
          <div className=" sm:block sm:w-1/3 lg:w-3/5 relative ">
            <img src={sakib} className="max-w-xs md:max-w-sm m-auto" alt="" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center text-center py-16 bg-white">
        <h2 className="text-8xl text-light opacity-10  uppercase font-semibold ">
          About Me
        </h2>
        <p className="text-2xl text-black font-semibold absolute mt-4  w-96 self-center leading-3   mb-0">
          Know Me More
          <span className="w-20  border-emerald-500 mt-4 border-b border-4  block mx-auto"></span>
        </p>
      </div>
      <div className="grid lg:grid-cols-12 gap-y-5 bg-white gap-x-5 lg:px-96">
        {/* skills */}
        <div className=" col-span-7 lg:col-span-8 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-3">
            I'm <span className="text-primary">Sakib Rahman,</span> a Web
            Developer
          </h2>
          <p>I like making fun, interactive things with code.</p>
          <p>Here is the list of skill I know well.</p>
          <div className=" mt-4 ">
            <div className=" inline-block m-2  px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              html
            </div>
            <div className=" inline-block m-2  px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              css
            </div>
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              JavaScript
            </div>
            <br />
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              React js
            </div>
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              Tailwind
            </div>
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              Bootstrap
            </div>{" "}
            <br />
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              Firebase
            </div>
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              Axios
            </div>
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              React Router
            </div>{" "}
            <br />
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              Mongodb
            </div>
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              Express js
            </div>
            <div className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  text-base font-medium uppercase text-center">
              Linux
            </div>
          </div>
        </div>
        {/* edu */}
        <div className="col-span-5 lg:col-span-4 mt-6 ">
          <div className="lg:pl-4">
            <ul className="ml-3 leading-10">
              <li className=" border-b w-80">
                <span className="font-semibold mr-2">Name:</span>Sakib Rahman
              </li>
              <li className="border-b w-80">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:chat@simone.com">seu.sakib@gmail.com</a>
              </li>
              <li className="border-b w-80">
                <span className="font-semibold mr-2">Educational:</span> BSc in
                CSE (runing)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative flex  justify-center text-center pt-28 py-16 bg-white">
        <h2 className=" text-6xl lg:text-8xl text-light opacity-10  uppercase font-semibold ">
          Portfolio
        </h2>
        <p className="text-2xl text-black font-semibold absolute mt-4  w-96 self-center leading-3   mb-0">
          My Work
          <span className="w-20  border-emerald-500 mt-4 border-b border-4  block mx-auto"></span>
        </p>
      </div>
      <div className="bg-white pb-16">
        <h1 className=" text-center mb-6 container mx-auto text-4xl sm:text-4xl font-bold flex flex-col leading-none dark:text-white text-gray-800">
          Project's Live Site
        </h1>
        <div className="  container mx-auto max-h-screen bg-white flex flex-col lg:flex-row justify-center gap-y-3 lg:gap-x-3">
          <button className="btn btn-outline btn-success ">
            <a href="https://pc-world-5e4fb.web.app/">Warehouse Management</a>
          </button>
          <button className="btn btn-outline btn-success ">
            <a href="https://pro-trainer-15bba.web.app/">
              Independent Service Provider
            </a>
          </button>
          <button className="btn btn-outline btn-success ">
            <a href="https://pc-world-5e4fb.web.app/">Product Analysis</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
