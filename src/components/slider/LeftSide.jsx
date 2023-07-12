import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './Slider.css'
import { Pagination, Scrollbar, Mousewheel } from "swiper";
import { Typography, styled } from "@mui/material";

const SliderHeading = styled(Typography)`
  font-weight: 600;
  margin-bottom: 10px;
`

const SliderSubHeading = styled(Typography)`
  text-align: left;
  padding-right: 20%;
`

const LeftSide = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    swiper.on('slideChange', () => {
      const { activeIndex } = swiper;

      // Update the active index
      setActiveIndex(activeIndex);
    });
  }, []);

  return (
    <>
      <Swiper
        direction='vertical'
        ref={swiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        scrollbar={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}

        modules={[Pagination, Scrollbar, Mousewheel]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          const { activeIndex } = swiper;

          // Update the active index
          setActiveIndex(activeIndex);
        }}
      >
        <SwiperSlide className={`swiper-slide ${activeIndex === 0 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 0 ? 'number-focused' : 'number'}>01</div>
          <SliderHeading variant="h5">Browse</SliderHeading>
          <SliderSubHeading variant="h6">
            Sign up in less than 3 minutes and browse our collection of properties
          </SliderSubHeading>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 1 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 1 ? 'number-focused' : 'number'}>02</div>
          <SliderHeading variant="h5" >Purchase</SliderHeading>
          <SliderSubHeading variant="h6" >
            Buy a piece of the ones you love, starting from only AED 500
          </SliderSubHeading>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 2 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 2 ? 'number-focused' : 'number'}>03</div>
          <SliderHeading variant="h5" >Invest</SliderHeading>
          <SliderSubHeading variant="h6" >
            Sign up in less than 3 minutes and browse our collection of properties
          </SliderSubHeading>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 3 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 3 ? 'number-focused' : 'number'}>04</div>
          <SliderHeading variant="h5" >Select</SliderHeading>
          <SliderSubHeading variant="h6" >
            Sign up in less than 3 minutes and browse our collection of properties
          </SliderSubHeading>
        </SwiperSlide>

        <SwiperSlide className={`swiper-slide ${activeIndex === 4 ? 'active' : 'inactive'}`}>
          <div className={activeIndex === 4 ? 'number-focused' : 'number'}>05</div>
          <SliderHeading variant="h5" >Happy</SliderHeading>
          <SliderSubHeading variant="h6" >
            Sign up in less than 3 minutes and browse our collection of properties
          </SliderSubHeading>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default LeftSide