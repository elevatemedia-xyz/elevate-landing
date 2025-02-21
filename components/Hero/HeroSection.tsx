import Link from 'next/link'
import React from 'react'
import { NumberTicker } from '../magicui/number-ticker'

const HeroSection: React.FC = () => {
    return (
        <section className='w-full min-h-screen py-44 flex flex-col items-center justify-center gap-12 bg-black'>
            <div className="flex flex-col justify-start items-center bg-cover bg-center relative left-[0%] z-[1] top-[0%] gap-[24px] max-sm:gap-[16px] 2xl:min-w-[1280px]">
                <h1 className="text-3xl sm:text-5xl md:text-[9vh] font-[Montserrat] text-primary font-black  max-md:tracking-[autopx] leading-[105%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[120%] text-text-dark text-center w-[65%] max-lg:w-[90%]">
                    Unlock Your Brand’s Full Potential
                </h1>
                <h2 className="font-[Montserrat] text-primary font-normal text-[24px] max-md:text-[24px] max-sm:text-[14px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-center w-[50%] max-lg:w-[90%] max-md:w-full max-sm:w-full border-white text-black">
                    Your success, our strategy.
                </h2>
                <Link className="bg-cover bg-center rounded-[48px] max-md:rounded-[32px] flex flex-row justify-center items-center bg-black hover:bg-primary pt-[14px] pr-[32px] pb-[14px] pl-[32px] transition-all duration-[300ms] ease-linear delay-[0ms] border-solid border-2 border-primary group" href="https://form.typeform.com/to/k193DcdQ" target='_blank' aria-label="Link Button">
                    <span className="font-[Montserrat] text-center font-bold text-[24px] max-md:text-[24px] max-sm:text-[20px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-primary group-hover:text-black transition-all duration-[300ms] ease-linear delay-[0ms]">
                        Let’s Elevate Together
                    </span>
                </Link>
            </div>

            <div className="flex gap-0 flex-row w-full max-w-[1200px] bg-black items-center justify-center xl:min-h-[280px] p-2 sm:p-8">
                <div className="flex w-full flex-col h-full justify-center gap-4 xl:gap-10 items-center flex-1">
                    <h3 className="font-[Montserrat] font-medium text-[24px] max-md:text-[24px]  max-sm:text-[14px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-primary text-center ">
                        Amount Generated
                    </h3>
                    <h2 className="text-[40px] max-md:text-[32px] max-sm:text-[24px] hidden xl:block font-[Montserrat] font-bold leading-[130%] max-sm:leading-[100%] text-primary text-center w-full">
                        <NumberTicker className='text-primary' duration={2} value={15275343} prefix='$' suffix='+' />
                    </h2>
                    <h2 className="text-[40px] max-md:text-[32px] max-sm:text-[24px] block xl:hidden font-[Montserrat] font-bold leading-[130%] max-sm:leading-[100%] text-primary text-center w-full">
                        <NumberTicker className='text-primary' duration={2} value={15} prefix='$' suffix='M+' />
                    </h2>
                </div>
                <div className="flex w-full flex-col h-full justify-center gap-4 xl:gap-10 items-center p-2 sm:p-0 flex-1 border-primary border-l-2 border-r-2 ">
                    <h3 className="font-[Montserrat] font-medium text-[24px] max-md:text-[24px]  max-sm:text-[14px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-primary text-center ">
                        Businesses Elevated
                    </h3>
                    <h2 className="text-[40px] max-md:text-[32px] max-sm:text-[24px] font-[Montserrat] font-bold leading-[130%] max-sm:leading-[100%] text-primary text-center w-full">
                        <NumberTicker className='text-primary' duration={2} value={125} suffix='+' />
                    </h2>
                </div>
                <div className="flex w-full flex-col h-full justify-center gap-4 xl:gap-10 items-center flex-1">
                    <h3 className="font-[Montserrat] font-medium text-[24px] max-md:text-[24px]  max-sm:text-[14px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-primary text-center ">
                        Industries Elevated
                    </h3>
                    <h2 className="text-[40px] max-md:text-[32px] max-sm:text-[24px] font-[Montserrat] font-bold leading-[130%] max-sm:leading-[100%] text-primary text-center w-full">
                        <NumberTicker className='text-primary' duration={2} value={15} suffix='+' />
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
