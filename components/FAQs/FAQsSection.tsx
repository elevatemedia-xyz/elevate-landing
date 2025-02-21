'use client'
import React, { useState } from 'react'

const FAQs = [
    {
        question: "Does Elevate Media work with my industry?",
        awnser: "We partner with businesses in beauty, fashion, ecommerce, and service-based industries looking to scale. If your business relies on digital marketing but isn’t seeing consistent, scalable results, we optimize every stage from acquisition to retention to ensure long term success."
    },
    {
        question: "How can Elevate Media take my business to the next level?",
        awnser: "Most businesses plateau because they focus on traffic instead of conversion and retention. We don’t just run ads—we build high converting systems using CRO, full funnel automation, and retention strategies to turn traffic into long term revenue."
    },
    {
        question: "How do I know if my business qualifies for Elevation?",
        awnser: "We don’t work with everyone. Elevate Media is invite only, partnering with business owners serious about scaling. Schedule a one-time consultation to see if your business meets our criteria and how we can help accelerate your growth."
    },
    {
        question: "What’s stopping my business from scaling?",
        awnser: "Small inefficiencies kill big growth. Many businesses waste time and money by overlooking gaps in acquisition, conversion, and retention. We pinpoint and fix these bottlenecks to maximize revenue. Book a free consultation now and see what’s holding you back."
    },
]

const FAQsSection: React.FC = () => {
    // Changed state to store multiple open indices
    const [openIndices, setOpenIndices] = useState<number[]>([0])

    const toggleFAQ = (index: number) => {
        if (openIndices.includes(index)) {
            // Remove the index if it's already open
            setOpenIndices(openIndices.filter((i) => i !== index))
        } else {
            // Add the index if it's not open
            setOpenIndices([...openIndices, index])
        }
    }

    return (
        <section
            id='faqs'
            className='flex w-full pt-[200px] max-lg:pt-[70px] max-md:pt-[60px] max-sm:pt-[80px] pb-[200px] max-lg:pb-[70px] max-md:pb-[60px] max-sm:pb-[80px] flex-col justify-center items-center bg-cover bg-black bg-center'>
            <div className="w-[1200px] max-lg:w-[90%] flex bg-cover bg-center max-w-full flex-col justify-end max-sm:justify-center items-start max-sm:items-start gap-2">
                <div className="flex flex-col justify-center items-start bg-cover bg-center w-full max-lg:w-[50%] max-md:w-full static top-[60%] left-[0%] z-[1] gap-[24px]">
                    <h2 className="text-[7vw] max-lg:text-[10vw] max-md:text-[10vw] max-sm:text-[11vw] font-[Montserrat] font-black max-md:tracking-[autopx] leading-[105%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[120%] text-primary text-center max-sm:text-left h-[100%] max-sm:w-[90%]">
                        FAQs
                    </h2>
                </div>
                {FAQs.map((faq, index) => (
                    <div key={index} className="flex flex-col justify-center items-center bg-cover bg-center gap-2 p-[20px] max-sm:p-[0px] w-full">
                        <div className="flex flex-col justify-center items-center border-solid border-primary border-t-0 border-r-0 border-b-2 border-l-0 pt-[32px] max-sm:pt-0 pr-[32px] max-sm:pr-0 pb-[32px] pl-0">
                            <div
                                onClick={() => toggleFAQ(index)}
                                className="cursor-pointer flex flex-col justify-center items-start w-full h-full"
                            >
                                <div className="flex flex-row items-center bg-cover bg-center justify-between w-full h-full">
                                    <h2 className="text-[40px] max-md:text-[32px] max-sm:text-[24px] font-[Montserrat] font-bold leading-[130%] max-sm:leading-[100%] text-primary text-left w-full">
                                        {faq.question}
                                    </h2>
                                    {/* Single SVG with animated vertical line */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-black bg-primary rounded-sm"
                                    >
                                        {/* Horizontal line remains unchanged */}
                                        <path d="M5 12h14" />
                                        {/* Vertical line rotates from its center */}
                                        <path
                                            d="M12 5v14"
                                            className={`transition-transform duration-300 origin-center ${openIndices.includes(index) ? 'rotate-90' : 'rotate-0'}`}
                                        />
                                    </svg>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndices.includes(index) ? 'max-h-[500px] opacity-100 p-4' : 'max-h-0 opacity-0'}`}
                                >
                                    <h3 className="font-[Montserrat] font-normal text-[24px] max-md:text-[24px] max-sm:text-[18px] tracking-[autopx] text-primary leading-[140%] max-lg:leading-[140%]">
                                        {faq.awnser}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQsSection
