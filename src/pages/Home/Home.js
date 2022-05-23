import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Summary />
      <Reviews />
    </div>
  );
};

export default Home;
