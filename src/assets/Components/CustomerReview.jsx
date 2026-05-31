// import victoria from '../Images/victoria.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// const CustomerReview = () => {
//     return (
//         <div className="bg-[#221518] py-[80px]">
//             <h1 className="hero-heading text-center pb-5 text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent">
//                 Customer Review
//             </h1>
//             <div className="container mx-auto">
//                 <div
//                     className="relative h-[350px] bg-cover bg-center rounded-[30px] overflow-hidden"
//                     style={{
//                         backgroundImage: `url(${victoria})`
//                     }}>
//                     {/* opacity layer */}
//                     <div className="absolute inset-0 bg-[#000000]/60"></div>
//                     {/* content */}
//                     <div className="relative z-10 flex items-center justify-center h-full">

//                         <h1 className="text-white text-[40px]">
//                             Your Content Here
//                         </h1>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default CustomerReview;








import victoria from "../Images/victoria.png";
import customer1 from "../Images/customer1.png";

import React, { useState, useRef } from "react";

import SlickSlider from "react-slick";

const Slider = SlickSlider?.default || SlickSlider;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReview = () => {

    const sliderRef = useRef(null);

    const [active, setActive] = useState(0);

    const reviews = [
        { name: "Tyler", role: "Student" },
        { name: "Biswajit Pal", role: "Student" },
        { name: "Rahul Das", role: "Student" },
        { name: "Ankit Roy", role: "Student" },
        { name: "Suman Paul", role: "Student" },
    ];

    const settings = {
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        slidesToShow: 3,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,

        beforeChange: (current, next) => {
            setActive(next);
        },

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="bg-[#221518] py-[80px]">

            {/* heading */}
            <h1 className="hero-heading text-center relative z-10 -mb-6 text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent">
                Customer Review
            </h1>

            <div className="container mx-auto z-0 px-4 pb-5">

                {/* background section */}
                <div
                    className="relative h-[420px] bg-cover bg-center rounded-[30px] overflow-hidden"
                    style={{
                        backgroundImage: `url(${victoria})`
                    }}>

                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-[#000000]/55 backdrop-blur-[3px]"></div>

                    {/* arrows */}
                    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-5 z-30">

                        <button onClick={() => sliderRef.current.slickPrev()}
                            className="w-[45px] h-[45px] text-white text-[22px] flex items-center justify-center">
                            ❮
                        </button>

                        <button onClick={() => sliderRef.current.slickNext()}
                            className="w-[45px] h-[45px] text-white text-[22px] flex items-center justify-center">
                            ❯
                        </button>

                    </div>

                    {/* slider */}
                    <div className="relative z-20 h-full flex items-center">

                        <Slider ref={sliderRef} {...settings} className="w-full">

                            {reviews.map((item, index) => {

                                const isActive = active === index;

                                return (

                                    <div key={index} className="px-2">

                                        {/* IMPORTANT */}
                                        <div className="h-[420px] flex items-end justify-center">

                                            {isActive ? (

                                                /* CENTER CARD */
                                                <div className="relative w-[280px] h-[320px] bg-[#8B4A2B] rounded-t-[20px] text-center px-5 pt-8 pb-[30px] duration-500 z-20">

                                                    {/* quote */}
                                                    <div className="absolute -top-2 right-5 text-white text-[60px] leading-none">
                                                        ”
                                                    </div>

                                                    {/* image */}
                                                    <img src={customer1} alt=""
                                                        className="w-[75px] h-[75px] rounded-full mx-auto border-[4px] border-white" />

                                                    {/* name */}
                                                    <h1 className="text-white text-[18px] pt-4 font-semibold">
                                                        {item.name}
                                                    </h1>

                                                    {/* role */}
                                                    <p className="text-[#F6E5DA] text-[13px] pt-1">
                                                        {item.role}
                                                    </p>

                                                    {/* stars */}
                                                    <div className="text-[#F6D28B] text-[16px] pt-4">
                                                        ★ ★ ★ ★ ★
                                                    </div>

                                                    {/* review */}
                                                    <p className="text-[#F6E5DA] text-[11px] leading-[20px] pt-3 pb-5">
                                                        I Love Spending My Downtime In A Cozy Coffee
                                                        Shop. Surrounded By The Sweet Aroma Of
                                                        Freshly Brewed Drinks And Pastries.
                                                    </p>

                                                </div>

                                            ) : (

                                                /* SIDE CARDS */
                                                <div className="w-[220px] h-[140px] bg-[#FFFFFF1A] backdrop-blur-sm rounded-[20px] flex items-center justify-center opacity-90 duration-500 mb-2">
                                                    <img src={customer1} alt="" className="w-[70px] h-[70px] rounded-full border-[3px] border-white" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;