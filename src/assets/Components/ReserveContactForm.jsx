import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
const ReserveContactForm = () => {
    return (
        <div className="">
            <form action="#" className="space-y-7">
                <div className="relative ">
                    <SlCalender className="absolute top-3 left-2" />
                    <input type="text" placeholder="Date" className="w-full outline-none rounded-[10px] pl-7 py-2 bg-[#FFFFFF]" />
                </div>

                <div className="flex gap-2">
                    <div className="relative w-1/2" >
                    <FaRegClock className="absolute top-3 left-2" />
                    <input type="text" placeholder="Time" className="w-full outline-none rounded-[10px] pl-7 py-2 bg-[#FFFFFF]" />
                    </div>
                    <div className="relative w-1/2">
                    <IoPeopleSharp className="absolute top-3 left-2" />
                    <input type="text" placeholder="Guest" className="w-full outline-none rounded-[10px] pl-7 py-2 bg-[#FFFFFF]" />
                    </div>
                    
                    
                </div>
                <div className="relative ">
                    <SlCalender className="absolute top-3 left-2" />
                    <input type="text" placeholder="Your name" className="w-full outline-none rounded-[10px] pl-7 py-2 bg-[#FFFFFF]" />
                </div>
                <div className="relative ">
                    <SlCalender className="absolute top-3 left-2" />
                    <input type="text" placeholder="Your phone" className="w-full outline-none rounded-[10px] pl-7 py-2 bg-[#FFFFFF]" />
                </div>
                <div className="flex gap-2 relative ">
                    <SlCalender className="absolute top-3 left-2" />
                    <input type="text" placeholder="Your email" className="w-full outline-none rounded-[10px] pl-7 py-2 bg-[#FFFFFF]" />
                    <a href="#" className="medium-color-buttom px-5 flex text-center items-center">Reserve</a>
                </div>
            </form>
        </div>
    );
}
export default ReserveContactForm;