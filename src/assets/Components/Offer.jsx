import OfferImg from "../Images/Offer.png";

const Offer = () => {
  return (
    <div className="bg-[#221518] py-10 md:pt-16 relative px-4 md:pb-[100px]">
      <div className="container z-0 mx-auto w-full md:w-[80%] bg-[#593a2d] rounded-[20px] relative ">
        
        {/* Heading */}
        {/* <h1 className="hero-heading absolute z-10 top-[10px] left-4 md:-top-6 md:left-16 text-4xl text-[#F8E4BE]"> */}
        <h1 className="hero-heading absolute z-10 top-[-32px] left-[55px] md:-top-12 md:left-16 md:tex-center md:text-[64px] text-5xl text-[#F8E4BE]">
          Offer
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center">
          
          {/* Left Content */}
          <div className="w-full md:w-[60%] px-6 sm:px-10 md:px-[70px] py-10 md:py-[60px] text-center md:text-left">
            
            <h1 className="text-[#F8E4BE] text-[32px] sm:text-[40px] md:text-[26px] leading-tight font-leiko">
              Up To <span className="md:text-[35px]">50%</span> Off
            </h1>

            <p className="pt-4 text-sm sm:text-base leading-7 text-[#FFF3E0]">
              At our cafe, we take pride in providing our customers with the
              best coffee around. Our carefully-selected coffees come from some
              of the most renowned coffee growing regions in the world,
              ensuring that each cup is unrivaled in flavor and freshness.
            </p>

            <div className="mt-8">
              <a href="#" className="medium-color-buttom inline-block px-6 py-3 text-[#F8E4BE]">
                Shop Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[40%] flex justify-center pt-16 md:pt-0">
            <img src={OfferImg} alt="Offer Coffee" className="w-[70%] sm:w-[55%] md:w-[90%] max-h-[350px] object-contain"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;