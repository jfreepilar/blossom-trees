import React from 'react'
import { GoShieldCheck } from "react-icons/go";
import { FaScaleBalanced } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import GradientIcon from './GradientIcon';
import { BsBarChartLine } from "react-icons/bs";
import jeeter from '/assets/jeeter.png';
import cannawholesaler from '/assets/cannawholesaler.png';
import destinoFarm from '/assets/destino-farm.png';

const container = [
  {icon: GoShieldCheck, text: 'Market & REGULATION COMPLIANT'},
  {icon: FaScaleBalanced, text: 'ATTORNEY REVIEWED CONTENT' },
  {icon: VscSend, text: 'GUARANTEED EMAIL DELIVERABILITY' },
  {icon: BsBarChartLine, text: 'INCREASE CUSTOMERS & REVENUE' },
];

const brands = [
  {source: jeeter},
  {source: cannawholesaler},
  {source: destinoFarm},
];



export default function SectionOne() {
  return (
    <div >
      <div className='mt-10 flex pb-[600px]'>

        <div className='relative mt-5 mb-[100px]'>
          <img src="assets/cannabis.png"
                alt="Cannabis Photo"
                className='w-[989px] left-[300px] absolute max-xl:left-[250px]
                           max-xl:top-[-20px]
                           max-md:left-[30px]'
                style={{ maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))'
                        }}/>

          <img src="assets/glass.svg"
                        alt="Glass Photo"
                        className='w-full'/>
          </div>

        </div>


        <div className='flex flex-col mt-[-450px] items-center'>

            <div className='flex w-[90%] rounded-lg  items-center shadow-custom mt-400px
                            max-lg:flex-col
                            max-lg:pt-[20px]'
                  style={{background: 'linear-gradient(to bottom, rgba(245, 245, 245, 1), rgba(245, 245, 245, 0))'}}>

                <div className='text-darkPurple font-semibold text-3xl font-dhyana w-[40%] pl-10 max-lg:text-2xl
                               max-md:text-xl max-lg:w-full max-lg:text-center'>
                  <div>TRUSTED BY LEADING</div>
                  <div>CANNABIS BRANDS</div>
                </div>

                <div className='flex justify-around w-[60%] 
                                max-lg:mt-[-20px]
                                max-lg:mr-[55px] max-md:w-full'>
                  {brands.map((item, index) => (
                    <img key={index} 
                         src={item.source} 
                         alt="Brand Logo"
                         style={{width: index === 1 ? '100px': '200px' ,
                                 height: index === 1 ? '100px': '200px',
                                 marginTop: index === 1 ? '50px' : '0',
                         }}/>
                  ))}
                </div>

            </div>


            <div className='flex flex-wrap gap-2 mt-10 justify-between w-[90%]
                            max-sm:ml-[200px]'>
              {container.map((item, index) => (
                <div key={index}
                     className='flex flex-col w-[250px] h-[200px] rounded-lg justify-around items-center py-8 px-20'
                     style={{boxShadow: '0px 4px 12.2px 0px rgba(104, 84, 136, 1)',
                             background: 'linear-gradient(to bottom, rgba(245, 245, 245, 1), rgba(245, 245, 245, 0))'}}>
                      
                      <div className='text-[60px] mt-[-20px] mb-[-60px] ml-[60px]'>
                            <GradientIcon icon={item.icon} index={index} />
                      </div>

                      <p className='text-center font-dhyana text-darkPurple font-semibold text-[18px]'>{item.text}</p>

                </div>
              ))}

            </div>
          

        </div>
    </div>
  )
}
