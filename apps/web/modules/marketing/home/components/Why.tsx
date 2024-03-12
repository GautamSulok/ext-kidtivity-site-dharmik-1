"use client";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Button } from "@ui/components/button";
import { useRef } from "react";
import "swiper/css"; // Import Swiper styles
import { Navigation, Pagination } from "swiper/modules";
export function Why() {
  const swiper = useSwiper();
  // <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>;
  const swiperRef = useRef<SwiperCore | null>(null);

  const slideNext = () => {
    console.log("slideNext", swiperRef);
    swiperRef.current?.slideNext();
  };
  return (
    <section className="bg-purple-950 pb-12">
      <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
        <div className="flex flex-wrap">
          <div className="w-full pt-8 sm:w-3/4">
            <div className="-ml-10 mb-10 inline-block rounded-br-[4px] rounded-tr-[4px] border border-purple-100 bg-white py-2 pl-10 pr-4 shadow-[8px_8px_0px_0px_#6017A9] sm:pl-12 dark:bg-black dark:shadow-[8px_8px_0px_0px_#d8b4fe]">
              <h6 className="text-[24px] font-bold leading-10 text-purple-500 sm:text-[28px] sm:leading-[64px] lg:text-[32px] dark:text-purple-300">
                Why Kidtivity Lab?
              </h6>
            </div>
            <p className="max-w-[600px] text-xl font-semibold leading-7 text-white">
              At Kidtivity Lab, we believe in making parenting a bit easier and
              a whole lot more fun. Our AI-powered app is designed to provide
              personalized activity plans for children, turning every day into
              an exciting adventure of learning and creativity.
            </p>
          </div>
          <div className="w-full sm:w-1/4">
            <div className="mt-6 text-end sm:-mt-[52px]">
              <img src="images/star.png" className="inline-block" alt="" />
            </div>
          </div>
        </div>
        <div className="mb-6 mt-10 flex items-center justify-end gap-2">
          <Button
            className=" !static !mt-0 flex !h-10 !w-10 items-center justify-center rounded-full bg-blue-200 p-2 after:!content-[none]"
            onClick={slideNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="#174BA9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="#174BA9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={3}
          navigation={true}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: {
              slidesPerView: 0.9,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            465: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            575: {
              slidesPerView: 1.6,
              spaceBetween: 16,
            },
            577: {
              slidesPerView: 1.4,
              spaceBetween: 16,
            },
            767: {
              slidesPerView: 1.6,
              spaceBetween: 16,
            },
            991: {
              slidesPerView: 2.3,
              spaceBetween: 16,
            },
            1000: {
              slidesPerView: 2.4,
              spaceBetween: 16,
            },
            1199: {
              slidesPerView: 2.5,
              spaceBetween: 16,
            },
            1365: {
              slidesPerView: 2.8,
              spaceBetween: 16,
            },
          }}
        >
          <SwiperSlide>
            <div className="rounded-t-lg bg-purple-100 px-5 pb-2 pt-5 sm:px-8 sm:pb-4 sm:pt-8">
              <img
                src="images/sparkles.svg"
                className="inline-block py-2"
                alt=""
              />
            </div>
            <div className="h-full min-h-[196px] rounded-b-lg bg-purple-500 px-5 pb-8 pt-6 sm:px-8">
              <h4 className="mb-4 text-xl font-bold leading-[28px] text-purple-100">
                Personalized Plans
              </h4>
              <p className="text-base font-medium leading-6 text-purple-100">
                Say goodbye to one-size-fits-all activities. Our AI crafts
                unique experiences tailored to your child’s age, interests, and
                preferred difficulty levels.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-t-lg bg-purple-100 px-5 pb-2 pt-5 sm:px-8 sm:pb-4 sm:pt-8">
              <img
                src="images/activity-square.svg"
                className="inline-block py-2"
                alt=""
              />
            </div>
            <div className="h-full min-h-[196px] rounded-b-lg bg-purple-500 px-5 pb-8 pt-6 sm:px-8">
              <h4 className="mb-4 text-xl font-bold leading-[28px] text-purple-100">
                Diverse Activities
              </h4>
              <p className="text-base font-medium leading-6 text-purple-100">
                From fun craft projects and creative food art to educational
                games and energetic physical activities, there's something for
                every little explorer.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="rounded-t-lg bg-purple-100 px-5 pb-2 pt-5 sm:px-8 sm:pb-4 sm:pt-8">
                <img
                  src="images/gantt-chart-square.svg"
                  className="inline-block py-2"
                  alt=""
                />
              </div>
              <div className="h-full min-h-[196px] rounded-b-lg bg-purple-500 px-5 pb-8 pt-6 sm:px-8">
                <h4 className="mb-4 text-xl font-bold leading-[28px] text-purple-100">
                  Save Time
                </h4>
                <p className="text-base font-medium leading-6 text-purple-100">
                  Spend less time searching for ideas and more time creating
                  memories. Kidtivity Lab is your go-to source for quick,
                  innovative, and engaging activities.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-t-lg bg-purple-100 px-5 pb-2 pt-5 sm:px-8 sm:pb-4 sm:pt-8">
              <img
                src="images/sparkles.svg"
                className="inline-block py-2"
                alt=""
              />
            </div>
            <div className="h-full min-h-[196px] rounded-b-lg bg-purple-500 px-5 pb-8 pt-6 sm:px-8">
              <h4 className="mb-4 text-xl font-bold leading-[28px] text-purple-100">
                Personalized Plans
              </h4>
              <p className="text-base font-medium leading-6 text-purple-100">
                Say goodbye to one-size-fits-all activities. Our AI crafts
                unique experiences tailored to your child’s age, interests, and
                preferred difficulty levels.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-t-lg bg-purple-100 px-5 pb-2 pt-5 sm:px-8 sm:pb-4 sm:pt-8">
              <img
                src="images/activity-square.svg"
                className="inline-block py-2"
                alt=""
              />
            </div>
            <div className="h-full min-h-[196px] rounded-b-lg bg-purple-500 px-5 pb-8 pt-6 sm:px-8">
              <h4 className="mb-4 text-xl font-bold leading-[28px] text-purple-100">
                Diverse Activities
              </h4>
              <p className="text-base font-medium leading-6 text-purple-100">
                From fun craft projects and creative food art to educational
                games and energetic physical activities, there's something for
                every little explorer.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-t-lg bg-purple-100 px-5 pb-2 pt-5 sm:px-8 sm:pb-4 sm:pt-8">
              <img
                src="images/gantt-chart-square.svg"
                className="inline-block py-2"
                alt=""
              />
            </div>
            <div className="h-full min-h-[196px] rounded-b-lg bg-purple-500 px-5 pb-8 pt-6 sm:px-8">
              <h4 className="mb-4 text-xl font-bold leading-[28px] text-purple-100">
                Save Time
              </h4>
              <p className="text-base font-medium leading-6 text-purple-100">
                Spend less time searching for ideas and more time creating
                memories. Kidtivity Lab is your go-to source for quick,
                innovative, and engaging activities.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
