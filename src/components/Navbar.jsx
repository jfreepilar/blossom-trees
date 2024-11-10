import React, { useState } from 'react';
import blossomTrees from '/assets/blossom-tree-logo.svg'
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    const [isDropMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = ['CASE STUDIES', 'WHAT WE DO', 'OUR PROCESS', 'FAQ'];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isDropMenuOpen);
    };

    return (
        <div className='flex pt-7 px-[80px] max-lg:px-[5px]'>
            <img 
                src={blossomTrees} 
                alt='Blossom Trees Logo' 
                className='mr-auto w-[150px] h-[150px] mt-[-65px]' 
            />
        
            <ul className='flex ml-auto mr-[-310px] w-[55%] justify-evenly max-lg:mr-5 max-md:hidden'>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a href="#" className='font-dhyana max-md:text-blue-300'>{item}</a>
                    </li>
                ))}
            </ul>
        
            <div className='relative hidden max-md:flex justify-center items-center w-full'>
                <div 
                    className='text-[70px] text-darkPurple cursor-pointer mt-[-50px] ml-[-30px]'
                    onClick={toggleMobileMenu}>
                    <IoMenu />
                </div>
                
                {isDropMenuOpen && (
                    <ul className='absolute left-0 top-full mt-[-40px] bg-perfume/70 rounded shadow-lg w-[150px]  
                                    transition-all duration-300 ease-in max-md:w-[100%] max-md:left-0 max-md:right-0 text-center'>
                        {navItems.map((item, index) => (
                            <li key={index} className="px-4 py-2 hover:bg-gray-100">
                                <a href="#" className="text-darkPurple">{item}</a>
                            </li>
                        ))}
                    </ul>
                    )}
            </div>
        
            <div className='flex justify-end h-[30px] w-[500px] mt-0 max-md:mt-[5px]'>
                <a href='#' className='py-2 px-4 bg-darkPurple rounded-full text-white font-dhyana 
                           mt-[-8px] text-sm max-md:text-[12px] max-md:px-4'>
                    INCREASE REVENUE
                </a>
            </div>


        </div>
    );
}