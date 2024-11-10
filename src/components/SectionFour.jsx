import React from 'react'
import cloud from '/assets/cloud-1.png'
import cloudTwo from '/assets/cloud-2.png'
import { TbMessage2Search } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsBarChartLine } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SiLibreofficewriter } from "react-icons/si";


export default function SectionFour() {
  const process = [
    {steps: 'Email Marketing Audit',
     icon: <TbMessage2Search />,
     text: 'Schedule a 15-minute discovery call to discuss your specific needs and provide you with a complimentary Email Marketing Audit.',
     number: 1,
    },
    {steps: 'Consultation & Strategy Call',
      icon: <FaComputer />,
      text: 'We craft a customized strategy plan on how to best market your brand. Learn about our expertise, services offered, and how we can help scale your business.',
      number: 2,
    },
    {steps: 'Onboarding & Kickoff Call',
      icon: <BsRocketTakeoff />,
      text: 'Once you are ready to partner with us, we get you onboarded and get the party started. We get your sales and customer engagement high as a kite.',
      number: 3,
    },
    {steps: 'Split test, Analyze, and Improve Performance',
      icon: <BsBarChartLine/>,
      text: 'We review performance data, make improvements, and constantly split-test to achieve better metrics over time.',
      number: 6,
    },
    {
     steps: 'Launch Campaigns & Flows',
     icon: <HiOutlineMailOpen />,
     text: 'We get your campaigns and automations live and generating revenue, engagement and customers.',
     number: 5,
    },
    {
     steps: 'Produce First Designs',
     icon: <SiLibreofficewriter />,
     text: 'Within the first few days, we deliver the initial email design drafts. You provide feedback, and we revise as needed.',
     number: 4,
    }
  ];

  return (
      <div style={{background: 'linear-gradient(to bottom, #4528B6 50%, #1E1250 100%)'}}
                   className='text-black h-fit-content pt-[100px] pb-[300px] relative'>
          
            <img src={cloud} alt="Cloud Photo"
                 className='w-full absolute top-[-10px]'/>

            <img src={cloudTwo} alt="Cloud Photo"
                 className='w-full  absolute bottom-0'/>

            

            <div>
              <h2 className='text-white text-center font-bold font-cinzel text-[40px] pt-[200px]'>OUR PROCESS</h2>
              <div className='text-white text-center font-bold font-cinzel'>
                <p>Ready to grow your cannabis brand?</p>
                <p>Here's how we work together</p>
              </div>

              <div className='flex flex-wrap gap-x-10 gap-y-5 mt-[50px] justify-center pb-[100px] px-[150px]'>
                {process.map((item, index) => (
                  <div index={index} className='text-white'>
                    <p className='bg-perfume text-darkBlue font-bold h-[40px] w-[40px] pt-1  rounded-full opacity-70 text-2xl text-center mx-auto'>{item.number}</p>

                    <div className='bg-navyBlue w-[280px] h-[270px] rounded-lg py-6 px-[36px] flex flex-col items-center'
                          style={{padding: index === 3 ? '24px 22px' : '24px 36px'}}>
                      <p className='text-center text-[55px]'>{item.icon}</p>
                      <div className='text-center text-[22px]'>{item.steps}</div>
                      <div className='text-[12px] text-center pt-2'>{item.text}</div>
                    </div>

                  </div>
                  ))}

              </div>
            
              <div className='flex justify-center mt-[50px]'>
                      <a href='#' className='py-2 px-6 bg-white rounded-lg mt-[-8px] text-darkPurple font-dhyana  font-bold'>GET STARTED NOW</a>
              </div>
        </div>
    </div>
  )
}
