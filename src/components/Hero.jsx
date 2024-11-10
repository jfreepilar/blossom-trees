import React from 'react'

export default function Hero() {
  return (
    <div className='mt-20'>
        <h1 className='text-center text-[70px] font-bold text-darkPurple leading-[76px] font-cinzel max-md:text-[50px]'>EMAIL & SMS EXPERTS FOR</h1>
        <h1 className='text-center text-[106px] font-bold leading-[137px] max-md:text-[90px] max-md:leading-[117px]'>CANNABIS BRANDS</h1>
        <div className='font-dhyana text-[20px] text-center mt-12 px-[250px] max-md:px-[100px] max-md:text-[16px]'>
            We specialize in crafting compliant, results-driven email and SMS campaigns specifically for cannabis brands. We help you overcome social media restrictions, banned substance regulations, and email provider limitations. Boost your brand's revenue, engage your customers, and turn your email subscribers into loyal customers.
        </div>

        <div className='mt-9 flex justify-center gap-8 font-poppins'>
            <a href='#' className='text-[30px] leading-[50px] font-semibold py-3 px-10 rounded-3xl text-white bg-darkPurple max-md:text-[20px] max-md:p-4'>INCREASE REVENUE</a>

            <a href='#' className='text-[30px] leading-[50px] font-semibold py-3 px-10 rounded-3xl border-4 border-gray-800 max-md:text-[20px] max-md:p-4'>HOW IT WORKS</a>
        </div>

    </div>
  )
}