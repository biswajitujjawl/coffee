import HeroImg from '../Images/HeroImg.png';
import '../Components/AllPageCss/AllPage.css';
// import HeroCard from "../Components/HeroCard";
import HeroCard from './HeroCard';
const Hero = () => {
    return (
        <div >
            {/* <div className='relative bg-[radial-gradient(circle_at_top_left,_#1e3a8a_0%,_#020102_45%,_#000000_100%)] md:min-h-screen overflow-hidden'> */}
            <div className='relative bg-[radial-gradient(circle_at_top_left,_#745F58_0%,_#020102_45%,_#020102_100%)] md:min-h-screen overflow-hidden'>
                <div className="container-fluid mx-auto">
                    <div className="flex flex-col md:flex-row md:min-h-screen">
                        <div className='hidden md:block md:w-[63%] text-white z-10'>
                            <div className='mt-[100px] pl-[195px]'>
                                <h1 className='hero-heading text-[90px] font-bold text-transparent
                                   [-webkit-text-stroke:1px_#f5e6d3] drop-shadow-[0_0_2px_#f5e6d3] drop-shadow-[-2px_-2px_0_#f5e6d3]'>Elza Coffee</h1>
                                <p className='w-80 mt-8'>
                                    Today's good mood is sponsored by coffee.
                                    Search for your coffee now.
                                </p>
                                <div className='mt-8 flex gap-4 mb-5'>
                                    <a href="#" className='medium-color-buttom px-6 py-2 text-[#F8E4BE]'>Shop Now</a>
                                    <a href="#" className='dark-color-buttom px-6 py-2 text-[#F8E4BE]'>Catalog</a>
                                </div>


                                {/* Card */}
                                <div className="absolute left-35 -bottom-1 z-10 ">
                                    <HeroCard />
                                </div>
                                {/* Card */}

                            </div>
                        </div>

                        <div className='md:w-[37%] bg-[#7C573C]'></div>
                        <img src={HeroImg} alt="Coffee-Machine" className='hidden md:block absolute bottom-0 right-0 md:top-5 w-[1200px] h-[100%]' />

                        {/* StartMobileView */}
                        {/* MobileViewHeroImgTop */}
                        <div className='md:hidden bottom-0 right-0 pt-8'>
                            <img src={HeroImg} alt="Coffee Machine" />
                        </div>
                        <div className='md:hidden'>

                            <div className='mt-[14px] pl-[2px] flex flex-col text-center items-center pb-3'>
                                <h1 className='hero-heading text-[30px] font-bold text-transparent
                                  [-webkit-text-stroke:1px_#f5e6d3] drop-shadow-[0_0_2px_#f5e6d3] drop-shadow-[-2px_-2px_0_#f5e6d3]'>Elza Coffee</h1>
                                <p className='w-55 mt-4 text-white px-1'>
                                    Today's good mood is sponsored by coffee.
                                    Search for your coffee now.
                                </p>
                                <div className='mt-8 flex gap-4'>
                                    <a href="#" className='medium-color-buttom-m px-3 py-2'>Shop Now</a>
                                    <a href="#" className='dark-color-buttom-m px-3 py-2'>Catalog</a>
                                </div>
                            </div>

                        </div>
                        {/* EndMobileView*/}

                    </div>
                </div>
                {/* <img src={HeroImg} alt="Coffee-Machine" className='hidden md:block absolute bottom-0 right-0 md:top-5 w-[1200px] h-[100%]' /> */}
            </div>
        </div >
    );
}
export default Hero;