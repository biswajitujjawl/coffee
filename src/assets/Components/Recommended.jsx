import SlickSlider from "react-slick";
// import Slider from "react-slick";
const Slider = SlickSlider?.default || SlickSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import recommededeOne from '../Images/recommededeOne.png';
import recommededeTwo from '../Images/recommededeTwo.png';
import recommededeThree from '../Images/recommededeThree.png';
import recommededeFour from '../Images/recommededeOne.png';
import recommededeFive from '../Images/recommededeTwo.png';
import recommededeSix from '../Images/recommededeThree.png';
import { BsCartCheck } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Recommended = () => {
  const SliderRef = useRef(null);

  const btnPressPrev = () => {
    SliderRef.current.slickPrev();
  }
  const btnPressNext = () => {
    SliderRef.current.slickNext();
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive:[
      {
        breakpoint:1024,
        settings:{slidesToShow:2}
      },
      {
        breakpoint:640,
        settings:{slidesToShow:1}
      }
    ]
  };
  const recommendedData = [
    { id: 1, img: recommededeOne, foot1: "Arabica", foot2: "Dark Roasal" },
    { id: 2, img: recommededeTwo, foot1: "House Blend", foot2: "Dark Roasal" },
    { id: 3, img: recommededeThree, foot1: "Robusla", foot2: "Dark Roasal" },
    { id: 4, img: recommededeOne, foot1: "Arabica", foot2: "Dark Roasal" },
    { id: 5, img: recommededeTwo, foot1: "House Blend", foot2: "Dark Roasal" },
    { id: 6, img: recommededeThree, foot1: "Robusla", foot2: "Dark Roasal" }
  ];


  return (


    <div className='bg-[#221518] py-10 md:pt-5 md:pb-[110px]'>
      <h1 className='hero-heading text-center hidden md:block pb-5 text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent'>Recommended</h1>
      <h1 className='hero-heading text-center md:hidden pb-5 text-[40px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent'>Recommended</h1>
      <div className="container mx-auto w-[80%]">
        {/* <div className="flex"> */}
        {/* <div className="w-full md:w-[33%]"> */}

        <Slider ref={SliderRef} {...settings}>
          {recommendedData.map((rData) => (
            <div key={rData.id} className="px-3">
              <div className="w-full">
                <div className="rounded-[10px] overflow-hidden">

                  <div className="bg-[#593a2d] rounded-t-[40px] relative">
                    <CiCircleInfo className="text-[#baa286] absolute left-5 top-5 text-[24px]" />
                    <img src={rData.img} alt={rData.foot1} className="w-full" />
                    <BsCartCheck className="text-[#baa286] absolute bottom-3 right-3 text-[24px]" />
                  </div>

                  <div className="bg-[#B59183] rounded-b-[40px] py-3 text-center text-[#ffffff]">
                    <h3>{rData.foot1} | {rData.foot2}</h3>
                  </div>

                </div>
              </div>
            </div>
          ))}


        </Slider>

        {/* </div> */}


        {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
        {/* </Slider> */}

        {/* <div className="w-full md:w-[33%]">
            <div className="rounded-[10px]">
              <div className="bg-[#593a2d] rounded-t-[40px] relative">
                <CiCircleInfo className="text-[#baa286] absolute left-5 top-5" />
                <img src={recommededeOne} alt="" />
                <BsCartCheck className="text-[#baa286] absolute bottom-3 right-3 " />
              </div>
              <div className="bg-[#B59183] rounded-b-[40px] py-2 text-center text-[#ffffff]">
                <h3>Arbica | Dark Roast</h3>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[33%]"></div>
          <div className="w-full md:w-[33%]"></div> */}


        {/* </div> */}
      </div> {/* container */}
      <div className="flex justify-center pt-[30px]">
        <div className="hover:bg-[#6e504a] rounded-full p-2">
          <button onClick={btnPressPrev} className="border-4 border-solid border-white rounded-full p-2 cursor-pointer">
            {/* <p className="text-4xl cursor-pointer text-white">&lt;</p> */}
            <FaArrowLeft className="text-[#F8E4BE] w-[20px] h-[20px]" />
          </button>
        </div>
        <div className="hover:bg-[#6e504a] rounded-full p-2">
          <button onClick={btnPressNext} className="border-4 border-solid border-white rounded-full p-2 cursor-pointer">
          {/* <p className="text-4xl cursor-pointer text-white">&gt;</p> */}
          <FaArrowRight className="text-[#F8E4BE] w-[20px] h-[20px]" />
        </button>
      </div>
        </div>

        
    </div>


  );




  // return(
  //     <div className='bg-[#221518] py-10 md:py-5'>
  //         <h1 className='hero-heading text-center pb-5 text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent'>Recommended</h1>
  //         <div className="container mx-auto">
  //             <div className="flex"></div>
  //         </div>
  //     </div>
  // );
}
export default Recommended;