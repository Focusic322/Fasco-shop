import React, { useEffect, useState } from 'react';
import BlackDress from '../../Img/People/BlackDress.svg';
import BlueSkirt from '../../Img/People/BlueSkirt.svg';
import DarkBluePants from '../../Img/People/DarkBluePants.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../../Ui/Button';
import { Link } from 'react-router';

export default function Discounts({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => Math.max(prev - 1000, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-24 py-16 bg-gray-50">
      <div className="w-full lg:max-w-[444px] mb-8 lg:mb-0">
      <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
          Deals Of The Month
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>
        <Link to='/shop'><Button title={'Buy Now'}/></Link>
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4 pt-4">
            Hurry, Before It's Too Late!
          </h3>
          <div className="bg-white rounded-xl  flex flex-col items-center">
            <div className="grid grid-cols-4 gap-6 items-center mb-4">
              <div className="shadow-midNight shadow-lg text-white rounded-lg p-4 flex items-center justify-center w-[90px] h-[90px]">
                <span className="text-4xl font-bold text-midNight">{String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0')}</span>
              </div>
              <div className="shadow-midNight shadow-lg rounded-lg p-4 flex items-center justify-center w-[90px] h-[90px]">
                <span className="text-4xl font-bold text-midNight">{String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')}</span>
              </div>
              <div className="shadow-midNight shadow-lg rounded-lg p-4 flex items-center justify-center w-[90px] h-[90px]">
                <span className="text-4xl font-bold text-midNight">{String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')}</span>
              </div>
              <div className="shadow-midNight shadow-lg rounded-lg p-4 flex items-center justify-center w-[90px] h-[90px]">
                <span className="text-4xl font-bold text-midNight">{String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-12 items-center">
              <div className="text-center">
                <span className="text-lg font-medium text-black">Days</span>
              </div>
              <div className="text-center">
                <span className="text-lg font-medium text-black">Hours</span>
              </div>
              <div className="text-center">
                <span className="text-lg font-medium text-black">Minutes</span>
              </div>
              <div className="text-center">
                <span className="text-lg font-medium text-black">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[800px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="relative rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src={BlackDress}
                alt="Black Dress"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  -30% OFF
                </span>
                <h3 className="text-2xl font-bold text-midNight mt-4">
                  Spring Collection
                </h3>
                <p className="text-midNight text-lg">
                  Starting @ $20
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={BlueSkirt}
                alt="Blue Skirt"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  -25% OFF
                </span>
                <h3 className="text-2xl font-bold text-midNight mt-4">
                  Summer Collection
                </h3>
                <p className="ttext-midNight text-lg">
                  Starting @ $25
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={DarkBluePants}
                alt="Dark Blue Pants"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                  -20% OFF
                </span>
                <h3 className="text-2xl font-bold text-midNight mt-4">
                  New Arrivals
                </h3>
                <p className="text-midNight text-lg">
                  Starting @ $30
                </p>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev !w-12 !h-12 !bg-white !rounded-full !shadow-lg !left-4 after:!text-black after:!text-lg"></div>
          <div className="swiper-button-next !w-12 !h-12 !bg-white !rounded-full !shadow-lg !right-4 after:!text-black after:!text-lg"></div>
        </Swiper>
      </div>
    </div>
  );
}