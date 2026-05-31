import footerimg from "../Images/footerimg.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
    return (
        <div className="bg-[#603D2F]">
            <div className="container py-5 md:py-0 mx-auto text-[#FFF3E0]">
                <div className="flex flex-wrap items-center">
                    {/* flex-wrap allows items to go to next line */}
                    <div className="hidden md:block md:w-[20%] md:-mt-10">
                        <img src={footerimg} alt="" />
                    </div>
                    <div className="w-1/2 md:w-[20%] pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">About</h3>
                        <ul className="space-y-5">
                            <li>Our Story</li>
                            <li>FAQ</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-[20%] pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">Customer Resourses</h3>
                        <ul className="space-y-5">
                            <li>Menu</li>
                            <li>Locations</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pt-[55px] md:pt-0 md:w-[20%] pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-5">
                            <li>Payment Options</li>
                            <li>Refunds & Exchanges</li>
                            <li>Limitation Of Liability</li>
                        </ul>
                    </div>
                    <div className="w-1/2 md:w-[20%] pt-[55px] md:pt-0 pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-5">
                            <li className="flex items-center gap-1"><FaLocationDot />Sector V, Kolkata,7000026</li>
                            <li className="flex items-center gap-1 "><IoMdMail />FAQ</li>
                            <li className="flex items-center gap-1"><FaMobileScreen />Careers</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="text-center items-center py-5">
                    <p>Created by Elizamaj Copyright 2023 Eliza Coffee. All Rights Reserved.</p>
                </div> */}
            </div>

            {/* Mobile Footer */}
            {/* <div className="container md:hidden py-5  mx-auto text-[#FFF3E0]">
                <div className="flex flex-wrap items-center">
                    <div className="w-1/2 pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">About</h3>
                        <ul className="space-y-5">
                            <li>Our Story</li>
                            <li>FAQ</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">Customer Resourses</h3>
                        <ul className="space-y-5">
                            <li>Menu</li>
                            <li>Locations</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pt-[55px] pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-5">
                            <li>Payment Options</li>
                            <li>Refunds & Exchanges</li>
                            <li>Limitation Of Liability</li>
                        </ul>
                    </div>
                    <div className="w-1/2 pt-[55px] pl-4 box-border overflow-hidden">
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-5">
                            <li className="flex items-center gap-1"><FaLocationDot />Sector V, Kolkata,7000026</li>
                            <li className="flex items-center gap-1"><IoMdMail />FAQ</li>
                            <li className="flex items-center gap-1"><FaMobileScreen />Careers</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            {/* End Mobile Footer */}
        </div>
    );
}
export default Footer;