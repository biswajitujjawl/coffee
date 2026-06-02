import Cup from "../Images/Cup1.png";
import { FaMotorcycle } from "react-icons/fa6";
const HeroCard = () => {
    return (
        <div className="bg-[#6a3a2b]/50 backdrop-blur-md rounded-2xl w-[366px] h-[210px] flex items-center gap-4  relative">
            <div className="absolute -left-5">
                <img src={Cup} className="h-[230px] w-[230px]" alt="coffee " />
            </div>


            <div className="absolute right-5 bottom-20">
                <p className=" dancing-script font-semibold text-[28px] hero-heading bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent ">Best Fresh Coffee</p>
            </div>
            <div className="absolute right-5 bottom-10">
                <button className="text-sm text-orange-300 mt-1 medium-color-buttom py-1 px-3 mt-3 right-2">
                    Hurry Up <span className="inline-block"> <FaMotorcycle /></span>
                </button>
            </div>
        </div>
    );
}
export default HeroCard;