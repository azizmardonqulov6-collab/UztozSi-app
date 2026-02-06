import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ButtonIcon from '/images/Slider/buttonIcon.png'
import HeroRobot from '/images/Hero/robotIcon.png'
import EduButtonIcon from '/images/Slider/eduButton1Icon.png'
import EduButton2Icon from '/images/Slider/eduButton2Icon.png'

import './Slider.css';
import { Link } from 'react-router-dom';
let Silider = [
  {
    id: 1,
    name: "/voice",
    button1Icon: ButtonIcon,
    button1IconText: 'Uztoz SI',
    text: "Bilim oling, Savol bering, Cho'qqilarni zabt eting.",
    button2Icon: HeroRobot,
    button2Text: "SI bilan suhbat",
    outLine: false,
  },
  {
    id: 2,
    name: "/edu",
    button1Icon: EduButtonIcon,
    button1IconText: 'Darslar',
    text: "Sizning darslaringiz — bizning aqlli yechimlarimiz bilan yanada oson.",
    button2Icon: EduButton2Icon ,
    button2Text: "Darslarni ko’rish",
    outLine: true,
  },
]

const UztozSlider = () => {
  return (
    <div className="app-slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {
          Silider.map(pro => {
            return <SwiperSlide key={pro.id}>
              <Link to={pro.name} className="w-full h-[270px] py-3 flex flex-col items-center justify-center gap-[20px] bg-[#14213D] rounded-[45px]">
                <span className={`badge  border border-white px-1 py-1 pr-[20px] flex items-center justify-center gap-3 rounded-[25px] ${pro.outLine ? "bg-transparent" : "bg-white"}`}>
                  <img className='w-[32px]' src={pro.button1Icon} alt={pro.button1Icon} />
                    <button  className={`font-semibold text-[16px] ${pro.outLine ? "text-white" : "text-[#14213D]"}`}>{pro.button1IconText}</button>
                </span>
                <h3 className='w-[260px] text-[19px] font-semibold text-center text-white'>{pro.text}</h3>
                <button className={`px-2 py-2 pr-[25px] border border-white rounded-[30px] flex items-center gap-2 text-[16px] font-semibold  ${pro.outLine === true ? "bg-white text-[#14213D]" : "bg-transparent text-white"}`} ><img className={`${pro.outLine ? "w-[25px]" : "w-[37px]"}`} src={pro.button2Icon} alt={pro.button2Icon} /> {pro.button2Text}</button>
              </Link>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};

export default UztozSlider;