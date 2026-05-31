import React from "react";
import PopularMenuImg from "../Images/PopularmenuImg.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const leftMenu = [
    { id: 1, name: "Chocolate", price: "$40.00", offset: "lg:ml-0",offset: "md:ml-0" },
    { id: 2, name: "Double Es", price: "$25.00", offset: "lg:ml-6",offset: "md:ml-6" },
    { id: 3, name: "Caramel", price: "$45.00", offset: "lg:ml-12",offset: "md:ml-12" },
    { id: 4, name: "Doppio", price: "$50.00", offset: "lg:ml-16",offset: "md:ml-16" },
];

const rightMenu = [
    { id: 5, name: "Espresso", price: "$40.00", offset: "lg:mr-0" },
    { id: 6, name: "Cappuccino", price: "$25.00", offset: "lg:mr-6" },
    { id: 7, name: "Mocha", price: "$45.00", offset: "lg:mr-12" },
    { id: 8, name: "Latte", price: "$50.00", offset: "lg:mr-16" },
];

const PopularMenu = () => {
    return (
        // <div className="bg-[#221518] py-10 md:py-5">
            <div className="bg-gradient-to-r from-[#231518] via-[#563a32] to-[#231518] pb-14 px-4 md:pb-[100px]">
                <h1 className='hero-heading text-center text-[50px] font-[1000] bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent pt-5'>Popular Menu</h1>
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center px-5">

                        <div className="w-full md:w-[30%] flex flex-col gap-15 pt-[85px] ">
                            {/* <div className="flex flex-col gap-15 pt-[85px]"> */}
                                {
                            leftMenu.map((item) => (
                                <div key={item.id} className={`${item.offset}` }>
                                    <div className="flex justify-between items-center ">
                                        <span className="hero-heading bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent text-xl">{item.price}</span>
                                        <span className="hero-heading bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent text-4xl">{item.name}</span>
                                    </div>
                                    <div className="flex items-center mt-[1px]">
                                        <div className="w-2 h-2 bg-[#886848] rotate-45"></div>
                                        <div className="flex-1 h-[2px] bg-[linear-gradient(to_right,#F8E4BE,#FFF3E0,#FFF8E8,transparent)]"></div>
                                    </div>
                                </div>
                            ))}
                            {/* </div> */}
                            
                        </div>

                        {/* Image */}
                        <div className="md:w-[40%] flex justify-center">
                            <div className="-mt-5">
                                <img src={PopularMenuImg} alt="MenuImage" className="w-[220px] sm:w-[380px] md:w-[350px] h-auto " />
                            </div>
                            
                        </div>

                        {/* Right Menu */}
                        <div className="w-full md:w-[30%] flex flex-col pt-[85px] gap-15">
                            {
                                rightMenu.map((item) => (
                                    <div key={item.id} className={item.offset}>
                                        <div className="flex justify-between items-center">
                                            <span className="hero-heading bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent text-4xl">{item.name}</span>
                                            <span className="hero-heading bg-[linear-gradient(90deg,#F8E4BE_20%,#FFF3E0_37%,#FFF8E8_52%,#DFC39D_73%)] bg-clip-text text-transparent text-xl">{item.price}</span>
                                        </div>
                                        <div className="flex items-center mt-[1px]">
                                        <div className="flex-1 h-[2px] bg-[linear-gradient(to_left,#F8E4BE,#FFF3E0,#FFF8E8,transparent)]"></div>
                                        <div className="w-2 h-2 bg-[#886848] rotate-45"></div>

                                    </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                        <p className="flex items-center justify-end gap-2 text-[#F8E4BE] text-[20px] pr-[55px] pt-5">Our Menu <span><FaArrowUpRightFromSquare /></span></p>
                     
                </div>
            </div>
        // </div>
    );
}
export default PopularMenu;