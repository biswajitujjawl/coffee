import logo from '../Images/logo.png';
import { useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        // <nav className='sticky top-0 bg-white'>
        <nav className='absolute top-0 left-0 w-full z-50 text-white'>
            <div className="container mx-auto px-4">
                <div className='flex items-center justify-between'>
                    <div className='w-[60px] cursor-pointer'>
                        <img src={logo} alt="logo" />
                    </div>
                    {/* DesktopMenu */}
                    <div className='md:flex hidden items-center gap-10'>
                        {/* Icon */}
                        <div className='flex items-center gap-4 text-[26px]'>
                            <IoPersonOutline className='cursor-pointer hover:text-yellow-600 duration-300' />
                            <div className='relative cursor-pointer'>
                                <CiShoppingCart className='cursor-pointer hover:text-yellow-600 duration-300' />
                                <span className='absolute -top-2 -right-2 text-[12px] bg-red-500 text-white w-4 h-4 rounded-full items-center justify-center'>2</span>
                            </div>
                        </div>

                        <ul className='flex items-center gap-6 text-[17px]'>
                            <li className='hover:text-yellow-500 cursor-pointer duration-300'>Home</li>
                            <li className=''>Menu</li>
                            <li className=''>Services</li>
                            <li className=''>Product</li>
                            <li className=''>Blog</li>
                            <li className=''>Contact</li>
                        </ul>
                    </div>

                    {/* HamburgerMenu */}
                <button className='md:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
                    {
                        menuOpen? <ImCross />:<GiHamburgerMenu />
                    }
                    </button>
                </div>    
            </div>
            {/* Mobile Menu */}
            <div className={menuOpen ? "md:hidden bg-[#6a3a2b]/50 backdrop-blur py-6" : "hidden"}>
                <ul className='flex flex-col items-center gap-5 text-white text-[18px]'>
                    <li className='hover:text-yellow-500 cursor-pointer duration-300'>Home</li>
                    <li className=''>Menu</li>
                    <li className=''>Services</li>
                    <li className=''>Product</li>
                    <li className=''>Blog</li>
                    <li className=''>Contact</li>
                </ul>
            </div>

        </nav>
    );

}

export default Navbar;