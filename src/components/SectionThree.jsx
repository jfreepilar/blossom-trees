import React from 'react'
import imageOne from '/assets/image-1.png'
import imageTwo from '/assets/image-2.png'
import imageThree from '/assets/image-3.png'
import imageFour from '/assets/image-4.png'
import { TbTargetArrow } from "react-icons/tb";
import { SiLibreofficewriter } from "react-icons/si";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CgCopy } from "react-icons/cg";
import cloud from '/assets/cloud-thin.png'
import sideDesignOne from '/assets/side-design-1.svg'
import sideDesigntwo from '/assets/side-design-2.svg'

const cardContent = [
  {title: 'Brand Strategy',
   text: "Our team understands the cannabis industry's unique regulations and challenges. We create tailored strategies to increase your brand’s presence and revenue, while ensuring full compliance.",
   image: imageOne,
   icon: <TbTargetArrow />,},
  {title: 'Copy Writting',
  text: "We craft engaging, compliant copy that resonates with your audience and adheres to industry regulations. Overcome the limitations of social media and paid ads with our expert copy.",
  image: imageTwo,
  icon: <CgCopy />,},
  {title: 'Email Design',
  text: "Our designs stand out and drive engagement, focusing on creativity and compliance. Navigate email provider restrictions with our expertly crafted emails.",
  image: imageThree,
  icon: <SiLibreofficewriter />,},
  {title: 'Klaviyo Management',
    text: "Leave the heavy lifting to us! We manage your Klaviyo account, ensuring optimal performance and compliance with cannabis industry regulations.",
  image: imageFour,
  icon: <HiOutlineMailOpen />,},
];

const wires = [
  {source : sideDesignOne}, 
  {source : sideDesigntwo}, 
];

export default function SectionThree() {


  return (
  <div className='mb-[150px] mt-[-80px] relative'
       style={{background: `
        linear-gradient(to right, #EFDFFB 0%, #BAD7FC 100%), 
        linear-gradient(to bottom, rgba(239, 223, 251, 0.5) 0%, rgba(239, 223, 251, 0) 50%, #ffffff 100%)`,
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'overlay',
        }}>
    
      <img src={cloud} alt="Cloud Photo"
          className='w-full absolute top-0'/>

      {wires.map((item, index) => (
          <img key={index} 
              src={item.source} 
              className='absolute h-[1700px] top-[200px]
                         max-xl:w-[180px]'
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))',
                position: 'absolute',
                left: index === 0 ? '0' : '',
                right: index !== 0 ? '0' : '',
              }} />
      ))}

      <div className='text-darkPurple px-[300px] mb-[40px] pt-[300px] z-[100] relative
                         max-xl:px-[200px]
                         max-md:px-[150px]
                         max-sm:px-[50px]'>
          <h2 className='text-center font-cinzel font-bold text-[60px]
                         max-xl:text-[50px]
                         max-md:text-[40px]
                         '>
              Full Stack Email & SMS
          </h2>
          <p className='text-[32px] text-center
                        max-xl:text-[26px]
                        max-md:text-[18px]'>
            We create your strategy, craft compelling copy, design engaging emails, and constantly measure, analyze, test, and optimize
          your campaigns to keep your brand ahead of the competition.
          </p>
      </div>

      <div className='flex flex-col items-center gap-[20px] position relative z-10'>
          {cardContent.map((item, index) => (
            <div key={index}
                style={{ boxShadow: 'var(--box-shadow)' }}
                className='flex items-center bg-[#f0f2fc] rounded-lg shadow-lg h-[280px] w-[880px] p-[40px]
                           max-xl:w-[700px]
                           max-lg:w-[600px] max-lg:h-[400px]
                           max-md:w-[450px]'>

              <div className='flex items-center rounded-lg gap-4
                              max-lg:flex-col'>

                <img src={item.image} className='h-[300px] w-[480px]
                              max-lg:mt-[-55px]' />

                <div className='flex flex-col gap-2 text-darkPurple px-[30px]
                                max-lg:px-[10px]'>

                  <div className='flex items-center gap-2
                                  max-lg:mt-[-50px]'>
                    <div className='rounded-full w-[40px] h-[40px]'
                        style={{background: 'linear-gradient(90deg, #BBAAFF, #97A0EF'}}>
                      <p className='text-white p-[12px]'>{item.icon}</p>
                    </div>

                    <p className='text-[32px] font-bold text-lg text-center text-darkPurple'>{item.title}</p>
                  </div>

                  <div>
                    <p className=' text-start'>{item.text}</p>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      <div className='flex justify-center mt-[50px]'>
        <a href='#' className='py-2 px-6 bg-darkPurple rounded-lg mt-[-8px] text-white font-dhyana z-10'>FREE CONSULTATION</a>
      </div>
    </div>
  )
}
