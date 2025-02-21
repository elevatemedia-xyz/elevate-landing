'use client'
import Link from 'next/link'
import React from 'react'

import FirstAnimationData from "@/assets/animations/lottie/ELEVATE_01_DISCOVERY_CALL.json"
import SecondAnimationData from "@/assets/animations/lottie/ELEVATE_02_SETUP_REVISING.json"
import ThirdAnimationData from "@/assets/animations/lottie/ELEVATE_03_EXECUTION.json"
import FourthAnimationData from "@/assets/animations/lottie/ELEVATE_04_SCALING.json"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AnimatedBar from '../ui/animated-bar'
import ScrollTypography from '../ui/animated-text'

const FourStepsSection: React.FC = () => {
    return (
        <section id='the-process' className='flex w-full pt-[200px] max-lg:pt-[70px] max-md:pt-[60px] max-sm:pt-[80px] pb-[200px] max-lg:pb-[70px] max-md:pb-[60px] max-sm:pb-[80px] flex-col justify-center items-center bg-cover bg-center bg-black gap-[64px] z-[1] rounded-[0px] overflow-clip relative max-md:static left-[0%]'>
            <div className="w-[1200px] max-lg:w-[90%] flex bg-cover bg-center max-w-full flex-col justify-center items-center h-[100%] gap-[100px] max-lg:gap-[64px] max-md:gap-[40px]">
                <ScrollTypography className='text-4xl sm:text-[7vw] font-[Montserrat] text-primary font-black  max-md:tracking-[autopx] leading-[105%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[120%] text-text-dark text-center h-[100%]  max-sm:w-[90%]'>
                    4 Steps to Elevate Your Business
                </ScrollTypography>
                <div className="flex flex-col justify-center items-center bg-cover bg-center w-full max-lg:w-full gap-[32px] max-md:gap-[48px]">
                    <div className="flex w-full flex-row max-md:flex-col-reverse justify-center items-center bg-cover bg-center">
                        <div className="flex flex-col max-lg:flex-col max-sm:flex-col max-lg:justify-center items-start max-lg:items-center max-sm:items-center bg-cover bg-center justify-between max-sm:justify-normal gap-[32px] max-sm:gap-[8px] h-[100%] w-[50%] max-md:w-full">
                            <div className="flex flex-col justify-center items-end bg-cover bg-center gap-[16px] w-full">
                                <h3 className='text-[48px] max-md:text-[40px] max-sm:text-[28px] font-[Montserrat] text-primary font-bold tracking-[autopx] leading-[140%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[100%] text-text-dark text-right'>
                                    01
                                </h3>
                                <h3 className='font-[Montserrat] text-primary font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%] text-right text-black'>
                                    Discovery Call<br />& Planning
                                </h3>
                                <h3 className='font-[Montserrat] text-primary font-normal text-[24px] max-md:text-[24px] max-sm:text-[18px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-right'>
                                    We analyze the flaws, current issues, and hurdles your business is facing.
                                </h3>
                            </div>
                            <AnimatedBar />
                        </div>
                        <div className="flex flex-col justify-center items-center bg-cover bg-center w-[50%] max-md:w-[80%]">
                            <div className="w-full static z-[3]">
                                <DotLottieReact
                                    // src={"/animations/first.lottie"}
                                    data={FirstAnimationData}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-lg:w-full max-sm:w-[90100%] flex bg-cover bg-center max-w-full flex-row max-md:flex-col max-sm:flex-col items-center justify-normal  max-lg:gap-[32px] max-sm:gap-[10px] grid-cols-2 h-[100%]">
                        <div className="flex flex-col justify-center items-center bg-cover bg-center w-[50%] max-md:w-[80%]">
                            <div className="w-full static z-[3]">
                                <DotLottieReact
                                    // src={"/animations/first.lottie"}
                                    data={SecondAnimationData}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                        <div className="flex flex-col max-lg:flex-col max-sm:flex-col max-lg:justify-center items-start max-lg:items-center max-sm:items-center bg-cover bg-center justify-between max-sm:justify-normal gap-[32px] max-sm:gap-[8px] h-[100%] w-[50%] max-md:w-full">
                            <div className="flex flex-col justify-center items-start bg-cover bg-center gap-[16px] w-full">
                                <h3 className='text-[48px] max-md:text-[40px] max-sm:text-[28px] font-[Montserrat] text-primary font-bold tracking-[autopx] leading-[140%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[100%] text-text-dark'>
                                    02
                                </h3>
                                <h3 className="font-[Montserrat] text-primary font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%]">
                                    Setup & Revising
                                </h3>
                                <h3 className="font-[Montserrat] text-primary font-normal text-[24px] max-md:text-[24px] max-sm:text-[18px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-left">
                                    Once onboarded, we will start implementing our proven strategies to refine all aspects of your business, preparing it for success.
                                </h3>
                            </div>
                            <AnimatedBar />
                        </div>
                    </div>
                    <div className="flex w-full flex-row max-md:flex-col-reverse justify-center items-center bg-cover bg-center">
                        <div className="flex flex-col max-lg:flex-col max-sm:flex-col max-lg:justify-center items-start max-lg:items-center max-sm:items-center bg-cover bg-center justify-between max-sm:justify-normal gap-[32px] max-sm:gap-[8px] h-[100%] w-[50%] max-md:w-full">
                            <div className="flex flex-col justify-center items-end bg-cover bg-center gap-[16px] w-full">
                                <h3 className='text-[48px] max-md:text-[40px] max-sm:text-[28px] font-[Montserrat] text-primary font-bold tracking-[autopx] leading-[140%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[100%] text-text-dark text-right'>
                                    03
                                </h3>
                                <h3 className='font-[Montserrat] text-primary font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%] text-right text-black'>
                                    Execution
                                </h3>
                                <h3 className='font-[Montserrat] text-primary font-normal text-[24px] max-md:text-[24px] max-sm:text-[18px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-right'>
                                    Relaunch your business to its prime self, learn from prior mistakes, and overcome hurdles.
                                </h3>
                            </div>
                            <AnimatedBar />
                        </div>
                        <div className="flex flex-col justify-center items-center bg-cover bg-center w-[50%] max-md:w-[80%]">
                            <div className="w-full static z-[3]">
                                <DotLottieReact
                                    // src={"/animations/first.lottie"}
                                    data={ThirdAnimationData}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-lg:w-full max-sm:w-[90100%] flex bg-cover bg-center max-w-full flex-row max-md:flex-col max-sm:flex-col items-center justify-normal  max-lg:gap-[32px] max-sm:gap-[10px] grid-cols-2 h-[100%]">
                        <div className="flex flex-col justify-center items-center bg-cover bg-center w-[50%] max-md:w-[80%]">
                            <div className="w-full static z-[3]">
                                <DotLottieReact
                                    // src={"/animations/first.lottie"}
                                    data={FourthAnimationData}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                        <div className="flex flex-col max-lg:flex-col max-sm:flex-col max-lg:justify-center items-start max-lg:items-center max-sm:items-center bg-cover bg-center justify-between max-sm:justify-normal gap-[32px] max-sm:gap-[8px] h-[100%] w-[50%] max-md:w-full">
                            <div className="flex flex-col justify-center items-start bg-cover bg-center gap-[16px] w-full">
                                <h3 className='text-[48px] max-md:text-[40px] max-sm:text-[28px] font-[Montserrat] text-primary font-bold tracking-[autopx] leading-[140%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[100%] text-text-dark'>
                                    04
                                </h3>
                                <h3 className="font-[Montserrat] text-primary font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%]">
                                    Scaling Above <br /> & Beyond
                                </h3>
                                <h3 className="font-[Montserrat] text-primary font-normal text-[24px] max-md:text-[24px] max-sm:text-[18px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-left">
                                    Once equipped with the right tools and a dedicated team to assist your needs, go beyond and elevate your business to the next level.
                                </h3>
                            </div>
                            <AnimatedBar />
                        </div>
                    </div>
                </div>
                <Link href={'https://form.typeform.com/to/k193DcdQ'} target='_blank' className='bg-cover bg-center rounded-[48px] max-md:rounded-[32px] flex flex-row justify-center items-center bg-black hover:bg-white pt-[14px] pr-[32px] pb-[14px] pl-[32px] transition-all duration-[300ms] ease-linear delay-[0ms] border-solid border-2 border-primary  max-sm:w-full group' >
                    <span className='font-[Montserrat] font-bold text-[24px] max-md:text-[24px] max-sm:text-[20px] tracking-[autopx] leading-[140%] max-lg:leading-[140%] text-primary group-hover:text-black transition-all duration-[300ms] ease-linear delay-[0ms]'>
                        Click Here To Elevate Now
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default FourStepsSection
