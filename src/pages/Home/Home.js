import React from "react";
import Banner from "./Banner";
import Best from "./Best";
import Newslatter from "./Newslatter";
import Reviews from "./Reviews/Reviews";
import Summary from "./Summary";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Summary />
      <Best />
      <Reviews />
      <Newslatter />
    </div>
  );
};

export default Home;
