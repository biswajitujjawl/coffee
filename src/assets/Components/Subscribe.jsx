import { CiSearch } from "react-icons/ci";

const Subscribe = () => {
    return (
        <div className="bg-gradient-to-l from-[#E0A872] via-[#F8E4BE] via-[#FFF3E0] to-[#E0A872] py-10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center text-center">
                    <div className="w-full max-w-[450px]">

                        <p className="pb-5 text-sm sm:text-base md:text-lg">Subscribe To Our Newsletter, Discounts And Promotions</p>
                        <form action="#" className="relative w-full mb-5">
                            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-gray-500" />
                            <input type="text" placeholder="Your Mail Address"
                                className="w-full bg-white rounded-[5px] pl-10 py-3 outline-none"/>
                        </form>
                        <a href="#" className="medium-color-buttom px-6 py-2 text-[#F8E4BE] inline-block">Subscribe</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;