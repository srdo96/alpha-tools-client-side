import React from "react";
import person from "../../../assets/images/worker.jpg";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review";

const caro = [
  {
    img: "https://i.ibb.co/6yN40Vp/user-8.jpg",
    desc: "Alpha Tools manufacture good quality products. Their tools are very strong, reliable. ",
    name: "Abdullah",
  },
  {
    img: "https://i.ibb.co/3hZF09X/user-4.jpg ",
    desc: "I realized after I sent in my order that I had ordered a larger quantity than I needed. I emailed and received a quick response, adjustment to my order and a refund. Product was shipped out  in a timely manner. Alpha Tools is great!",
    name: "Ibn Fulan",
  },
  {
    img: "https://i.ibb.co/t4WFRj6/user-2.jpg",
    desc: "For my project I use their product. My workers are happy and satisfy for Alpha tools. Their products are very strong.",
    name: "Hasan",
  },
];
const Reviews = () => {
  return (
    <div>
      <h4 className="upper text-center text-lg text-red-700 font-semibold my-4">
        Reviews
      </h4>
      <h2 className="text-4xl text-center font-medium">
        Our Customers <span className="font-bold">Are Saying?</span>
      </h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {caro.map((c) => (
          <SwiperSlide>
            <Review c={c} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
