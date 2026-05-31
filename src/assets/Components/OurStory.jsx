// import React, { useRef } from 'react';
// import SlickSlider from "react-slick";
// const Slider = SlickSlider?.default || SlickSlider;

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import face from "../Images/Image-ourstoryBGremove.png";
// const OurStory = () => {
//     const slideRef = useRef(null);
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };
//     return (
//         <div className='bg-[#221518] py-16'>
//             <Slider {...settings} ref={slideRef}>
//                 <div className="container mx-auto md:w-[80%] bg-[#53362A]">


//                     <div className="flex flex-col md:flex-row items-center">
//                         <div className="w-full md:w-[45%]">
//                             <div className='hidden md:block h-[400px] -mt-14'>
//                                 <img src={face} alt="" className='w-[420px] h-[610px]' />
//                             </div>

//                         </div>
//                         <div className="w-full md:w-[55%]">
//                             <p className='text-white text-justify pr-[50px]'>
//                                 Eliza is an online coffee store that offers the wide selection of
//                                 specialty coffees and teas from around the world. From medium–dark
//                                 roast single origin to flavored espresso beans, they offer a variety
//                                 of ethically sourced products to tantalize any customer’s palate.
//                                 For those looking for unique brewing equipment, Eliza also carries
//                                 a full range of quality espresso makers, grinders, brewers...
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </Slider>
//         </div>
//     );
// }
// export default OurStory;


import { useRef } from "react";
import SlickSlider from "react-slick";
import face from "../Images/Image-ourstoryBGremove.png";
const Slider = SlickSlider?.default || SlickSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurStory = () => {

  const slides = [
    {
      img: face,
      text: "Eliza is an online coffee store that offers the wide selection of specialty coffees and teas from around the world. From medium–dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers..."
    },
    {
      img: face,
      text: "From medium–dark roast single origin to flavored espresso beans, they offer ethically sourced products."
    },
    {
      img: face,
      text: "For those looking for unique brewing equipment, Eliza also carries espresso makers, grinders and brewers."
    },
    {
      img: face,
      text: "Eliza is an online coffee store that offers the wide selection of specialty coffees and teas from around the world."
    },
    {
      img: face,
      text: "From medium–dark roast single origin to flavored espresso beans, they offer ethically sourced products."
    },
    {
      img: face,
      text: "For those looking for unique brewing equipment, Eliza also carries espresso makers, grinders and brewers."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    pauseOnHover: false,
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="bg-[#221518] py-25">

      <div className="container mx-auto md:w-[80%] ">
        <div className="hidden md:block mr-[55px]">
          <h1 className="hero-heading text-right relative z-10 -mb-[75px] text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent">
                Our Story
            </h1>
        </div>
        <div className="md:hidden pb-4">
          <h1 className="hero-heading text-center relative z-10 text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent">
                Our Story
            </h1>
        </div>
         

        <Slider {...settings}>

          {slides.map((slide, i) => (
            <div key={i} className="px-4 py-12 ">

              <div className="relative bg-[#593a2d] min-h-[720px] md:min-h-0 md:h-[338px] rounded-[20px] overflow-visible">

                <div className="flex flex-col md:flex-row items-center">

                  {/* Image Section */}
                  <div className="md:w-[45%]">

                    {/* Desktop Image */}
                    <div className="hidden md:block h-[400px] md:-mt-15 z-10">
                      <img src={slide.img} alt="" className="w-[380px] md:w-[650px] md:h-[610px] relative z-10" />
                    </div>

                    {/* Mobile Image */}
                    <div className="md:hidden h-[320px] -mt-15 ">
                      <img src={slide.img} alt="" className="w-full h-[500px] object-cover"/>
                    </div>

                  </div>

                  {/* Text Section */}
                  <div className="md:w-[55%] hidden md:block">
                    <p className="text-white text-justify pl-4 pr-[50px] py-6">
                      {slide.text}
                    </p>
                  </div>

                  <div className="md:w-[55%] md:hidden">
                    <p className="text-white text-justify px-5 py-6">
                      {slide.text}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </Slider>

      </div>

      {/* Custom Dot Styling */}
      <style jsx>{`
        .custom-dots {
          bottom: -45px;
        }

        .custom-dots li.slick-active div {
          background: white;
          transform: scale(1.2);
        }`}
        </style>

    </div>
  );
};

export default OurStory;