import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"ORDER ONLINE "}
        heading={"From 11:00am to 10:00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide> <img src={img1} alt="" />
          <h2 className="text-center text-2xl  -mt-16 text-white">salads</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
          <h2 className="text-center text-2xl -mt-16 text-white">Pizza</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
          <h2 className="text-center text-2xl -mt-16 text-white">Soup</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
          <h2 className="text-center text-2xl -mt-16  text-white">Dessert</h2>
        </SwiperSlide>
        <SwiperSlide><img src={img5} alt="" />
          <h2 className="text-center text-2xl -mt-16 text-white">salads</h2>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Category;