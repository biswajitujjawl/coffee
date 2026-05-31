import { FaLinkedin } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { BiLogoAlgolia } from "react-icons/bi";
const Prefooter=()=>{
    return(
        <div className="bg-[#221518] pt-15">
            <div className="container mx-auto text-[#FFF3E0]">
                <div className="flex md:flex-row">
                    <div className="w-full">
                        <div className="flex justify-end">
                            <span>Social Media: </span>
                            <div className="flex text-[24px]">
                                <FaLinkedin />
                                <FaSquarePinterest />
                                <BiLogoAlgolia />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Prefooter;