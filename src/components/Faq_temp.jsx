import React from 'react'

const answerList = [
  'A dedicated team including an Email Marketing Specialist, Copywriter, Designer, Email         Marketing Technician, and Account Manager.',
  'Customer-centered marketing strategy with Customer Lifecycle Flows and Advanced Flows.',
  'Regular account audits and ongoing adjustments.',
  'Advanced segmentation and targeting.',
  'Optimized ROI and engagement.',
  'Customizable email and SMS communication from your Email Marketing Specialist.',
  'Comprehensive monthly campaign review.',
  'Monthly reports that are in-depth with common KPIs we track and prioritize for your account.'
];

const questionsAndAnswers= [
   {question:'Which ESPs & eCommerce platforms do you work with?',
    answer: 'We specialize in Klaviyo, one of the only platforms that allows Cannabis-related marketing. We work with Shopify, Shopify Plus, Magento, WooCommerce, and other eCommerce stores. Our expertise ensures compliance with cannabis industry regulations across all platforms.',
   },
   {question:'How many emails come with my plan?',
    answer: 'We have several plan options based on the number of emails you would like us to create for your strategy each month. Depending on your company & marketing objectives, your Account Executive will help you select the plan that best fits your needs.',
   },
   {question:'What does onboarding look like?',
    answer: 'The first thing we do is have you fill out a simple onboarding document. Then, we launch your project with a kick-off call where you meet your Email Marketing Specialist.',
   },
   {question:'Is there a minimum commitment required for your services?',
    answer: 'Absolutely not. We don’t believe in tying anyone down. If you stay, it’s because of the excellent service we provide, not a binding contract.',
   },

]

export default function Faq() {
  return (
    <div className='mt-[-1px] text-darkPurple py-[100px]'>
        <h2 className='font-sans font-bold text-[50px] text-center'>FREQUENTLY ASKED QUESTIONS</h2>
        <div className='flex justify-center font-dhyana'> 
          <ul className='list-disc my-5 shadow-custom rounded-lg w-[1100px] px-[80px] py-[30px]'>
            <p className='text-[26px] font-bold ml-[-20px]'>What do your service plans include?</p>
            {answerList.map((item, index) => (
              <li key={index}
                  className='font-dhyana text-[18px]'>
                  {item}
              </li>
            ))}
          </ul>
        </div>


        <div className='flex flex-col gap-4 items-center'>
          {questionsAndAnswers.map((item, index) => (
            <div key={index}
                 className='shadow-custom rounded-lg max-w-[1100px] px-[80px] py-[30px] text-darkPurple font-dhyana'>
              <p className='text-[26px] font-bold mb-[20px]'>{item.question}</p>
              <p className='text-[18px]'>{item.answer}</p>
            </div>
          ))}
        </div>











    </div>
  )
}
