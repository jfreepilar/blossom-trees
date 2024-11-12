import React from 'react';
import purpleBg from '/assets/purple-bg.svg';
import waveOne from '/assets/wave-1.svg';
import waveTwo from '/assets/wave-2.svg';
import peanut from '/assets/peanut.png';
import destino from '/assets/destino.png';
import wholesale from '/assets/wholesale.png';
import attentive from '/assets/attentive.png';
import bigCommerce from '/assets/big-commerce.png';
import shopify from '/assets/shopify.png';
import openSend from '/assets/opensend.png';
import klaviyo from '/assets/klaviyo.png';

const productList = [
  {name: 'Jeeter Cannabis', image: peanut},
  {name: 'Destino Farms', image: destino},
  {name: 'CannaWholesaler', image: wholesale},
];

const techPartners = [
  {image: attentive},
  {image: bigCommerce},
  {image: shopify},
  {image: openSend},
  {image: klaviyo},
];


export default function SectionTwo() {
  return (
    <div className='mt-[80px] max-sm:mb-[-130px]' >
      <div className='w-full bg-center relative
                      max-xl:h-[900px]
                      max-lg:h-[800px]
                      max-md:h-[1000px]'
                      style={{backgroundImage: `url(${purpleBg})`}}>
    
          <img className='top top-0 w-full opacity-.5' src={waveTwo} alt="wave" />

          <div className='absolute top-[120px] left-0 right-0 text-center text-white font-cinzel'>
            <h2 className='text-[50px] font-bold font-cinzel max-md:text-[40px] max-sm:text-[35px]'>OUR SUCCESS STORIES</h2>
            <h3 className='text-3xl font-bold font-cinzel max-md:text-2xl'>WILL YOU BE NEXT?</h3>
          </div>

          <div className='absolute top-[250px] w-full'>
              <div className='flex justify-center gap-5 pl-6
                              max-md:flex-wrap'>
                {productList.map((item, index) => (
                  <div key={index}
                      style={{boxShadow: '0px 4px 12.2px 0px rgba(104, 84, 136, 1)'}}
                      className='px-4 py-6 rounded-md flex flex-wrap flex-col gap-5 items-center bg-white'>
                    <img src={item.image} alt="Product image"
                        className='h-[280px] w-[350px]
                                   max-lg:h-[210px] max-lg:w-[210px]
                                   max-md:h-[180px] max-md:w-[180px]'/>
                    <p className='text-center font-dhyana text-darkPurple font-bold text-2xl'>{item.name}</p>
                    <a href='#' 
                      className='bg-darkPurple text-center w-[120px] rounded-lg text-white py-1 z-10'> Explore</a>     
                  </div>
              ))};
              </div>
          
          </div>
          <img className='absolute bottom-0 w-full' src={waveOne} alt="wave" />
      </div>

      <div>
        <h2 className='text-[50px] text-darkPurple text-center font-bold font-cinzel
                      max-md:text-[40px]'>OUR TECH PARTNERS</h2>

        <div className='flex w-full flex-wrap justify-center mt-[-40px]
                        max-xl:gap-0
                        max-sm:flex-col max-md:items-center'>
          {techPartners.map((item,index) => (
            <img index={index}
                 src={item.image} 
                 alt="Partners' logo"
                 className='w-[250px]
                            max-sm:mb-[-100px]'/>
          ))} 
        </div>
      </div>

    </div>

  )
}
