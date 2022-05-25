import React from "react";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review";
import { useQuery } from "react-query";
import fetcher from "../../../api/axiosInstance";
import Loading from "../../../components/Loading/Loading";

const Reviews = () => {
  const { data, isLoading } = useQuery("reviews", () => fetcher("reviews"));
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center ">
        <Loading />;
      </div>
    );
  }
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
        {data?.data?.map((review) => (
          <SwiperSlide>
            <Review key={review._id} review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
