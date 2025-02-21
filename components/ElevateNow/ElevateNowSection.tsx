import Link from 'next/link'
import React from 'react'

const ElevateNowSection: React.FC = () => {
    return (
        <section id='elevate-now' className='flex w-[90%] mx-auto sm:w-full pt-[200px] max-lg:pt-[70px] flex-col gap-8 xl:flex-row max-md:pt-[60px] max-sm:pt-[80px] pb-[200px] sm:px-8 max-lg:pb-[70px] max-md:pb-[60px] max-sm:pb-[80px] justify-center items-center bg-cover bg-center bg-black max-lg:overflow-clip visible z-[1] relative max-md:static left-[0%]'>
            <div className="flex flex-col gap-8 flex-1 min-h-[300px] justify-between bg-primary text-black rounded-3xl py-8">
                <h4 className="font-[Montserrat] font-black text-2xl sm:text-5xl  max-md:tracking-[autopx] leading-[105%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[120%] text-black text-center h-[100%] w-full">
                    Elevate With Us
                </h4>
                <div className="flex flex-col justify-center items-center bg-cover bg-center gap-[32px] max-sm:gap-[16px]">
                    <h4 className="font-[Montserrat] sm:text-2xl  font-bold tracking-[autopx] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-w-[90%] max-sm:leading-[120%] text-black text-center h-[100%] w-full max-lg:w-[80%] max-sm:w-full">
                        We don’t work with just anyone, only businesses ready to scale. Book a free consultation to assess your growth potential, identify key bottlenecks, and see if you qualify for our expertise. Let’s take your business to the next level.
                    </h4>
                    <div className="flex flex-col justify-center items-center bg-cover bg-center group">
                        <Link href={'https://form.typeform.com/to/k193DcdQ'} target='_blank' className='bg-cover bg-center rounded-[48px] max-md:rounded-[32px] z-[1] border-primary border-solid border-[2px] flex flex-row justify-center items-center bg-black group-hover:bg-primary pt-[14px] pr-[32px] max-sm:pr-[23px] pb-[14px] pl-[32px] max-sm:pl-[24px] gap-[12px] transition-all duration-[300ms] ease-linear delay-[0ms] cursor-pointer'>
                            <h4 className="font-[Montserrat] font-bold text-[20px] max-md:text-[18px] max-sm:text-[16px] tracking-[autopx] leading-[28px] max-lg:leading-[24px] max-md:leading-[20px] max-sm:leading-[18px] text-white group-hover:text-black text-center h-[100%] w-full max-sm:w-full">
                                ELEVATE NOW
                            </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-[24px] h-[24px] text-white group-hover:text-black">
                                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z">
                                </path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 flex-1 min-h-[300px] justify-between bg-primary text-black rounded-3xl py-8">
                <h4 className="font-[Montserrat] font-black text-2xl sm:text-5xl  max-md:tracking-[autopx] leading-[105%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[120%] text-black text-center h-[100%] w-full">
                    Join the Elevate Team
                </h4>
                <div className="flex flex-col justify-center items-center bg-cover bg-center gap-[32px] max-sm:gap-[16px]">
                    <h4 className="font-[Montserrat] sm:text-2xl  font-bold tracking-[autopx] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-w-[90%] max-sm:leading-[120%] text-black text-center h-[100%] w-full max-lg:w-[80%] max-sm:w-full">
                        We’re building a team of high impact talent only those ready to commit, grow, and thrive. Work alongside industry experts, gain hands-on experience, and be part of something bigger. Do you have what it takes?
                    </h4>
                    <div className="flex flex-col justify-center items-center bg-cover bg-center group">
                        <Link href={'https://form.typeform.com/to/HAzDs6B2'} target='_blank' className='bg-cover bg-center rounded-[48px] max-md:rounded-[32px] z-[1] border-primary border-solid border-[2px] flex flex-row justify-center items-center bg-black group-hover:bg-primary pt-[14px] pr-[32px] max-sm:pr-[23px] pb-[14px] pl-[32px] max-sm:pl-[24px] gap-[12px] transition-all duration-[300ms] ease-linear delay-[0ms] cursor-pointer'>
                            <h4 className="font-[Montserrat] font-bold text-[20px] max-md:text-[18px] max-sm:text-[16px] tracking-[autopx] leading-[28px] max-lg:leading-[24px] max-md:leading-[20px] max-sm:leading-[18px] text-white group-hover:text-black text-center h-[100%] w-full max-sm:w-full">
                                WORK WITH US
                            </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-[24px] h-[24px] text-white group-hover:text-black">
                                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z">
                                </path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ElevateNowSection
