'use client'
import React from 'react'
import EmailSMSAnimationData from "@/assets/animations/lottie/ELEVATE_EMAIL_SMS_MARKETING.json"
import CROAnimationData from "@/assets/animations/lottie/ELEVATE_WEBSITE_CRO_DESIGN.json"
import AdsAnimationData from "@/assets/animations/lottie/ELEVATE_AD_CAMPAIGN_OPTIMIZATION.json"
import BackendAnimationData from "@/assets/animations/lottie/ELEVATE_BACKEND_SETUP_GUIDENCE.json"
import SocialAnimationData from "@/assets/animations/lottie/ELEVATE_SOCIAL_MEDIA_STRATEGY.json"
import PaidAnimationData from "@/assets/animations/lottie/ELEVATE_ADS.json"
import BrandAnimationData from "@/assets/animations/lottie/ELEVATE_BRANDING.json"
import PerformanceAnimationData from "@/assets/animations/lottie/ELEVATE_PERFORMANCE_STRATEGY.json"
import SeoAnimationData from "@/assets/animations/lottie/ELEVATE_SEO_DOMAIN_OPTIMIZATION.json"
import AdditionalAnimationData from "@/assets/animations/lottie/ELEVATE_ADDITIONAL_SERVICES.json"


import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ScrollTypography from '../ui/animated-text'
const WhatWeDoSection: React.FC = () => {
    return (
        <section id='our-services' className='flex w-full pt-[200px] max-lg:pt-[70px] max-md:pt-[60px] max-sm:pt-[80px] pb-[200px] max-lg:pb-[70px] max-md:pb-[60px] max-sm:pb-[80px] flex-col justify-center items-center bg-cover bg-center bg-black bg-fixed'>
            <div className="justify-start items-center gap-[64px] max-sm:gap-[32px] w-[90%] flex flex-col max-w-full p-[40px] max-lg:p-[32px] max-md:p-[0px] max-sm:p-[0px] h-[100%]">
                <ScrollTypography className="font-[Montserrat] text-4xl sm:text-[10vw] font-black leading-[100%] max-lg:leading-[100%] max-md:leading-[100%] max-sm:leading-[100%] tracking-[0px] text-primary text-left max-lg:text-center  max-lg:w-full">
                    Our Services
                </ScrollTypography>
                <div className="flex flex-row max-lg:flex-col justify-center items-start bg-cover bg-center gap-[24px] max-sm:gap-[24px] w-full max-lg:w-full  max-lg:h-[100%]">
                    <div className="flex flex-col justify-between max-sm:justify-center items-start max-sm:items-center h-[1000px] max-lg:h-[100%] w-[35%] max-lg:w-full rounded-[48px] max-sm:rounded-[32px] p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[40px] max-lg:gap-[48px] max-md:gap-[20px] max-sm:gap-[40px] border-solid border-[2px] border-black">
                        <div className="flex flex-col justify-center items-start bg-cover bg-center w-full gap-[24px]">
                            <h2 id="Design Branding Text" className="font-[Montserrat] font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%]" >
                                Email & SMS Marketing
                            </h2>
                            <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                Develop and manage campaigns to engage customers, increase retention, and drive sales through targeted communication.
                            </h3>
                        </div>
                        <div className="flex flex-col justify-center items-center bg-cover bg-center w-full flex-1">
                            <div className="w-full static z-[3]">
                                <DotLottieReact
                                    // src={"/animations/first.lottie"}
                                    data={EmailSMSAnimationData}
                                    loop
                                    autoplay
                                    className='xl:h-[280px]'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-cover bg-center w-[65%] max-lg:w-full gap-[24px] h-[1000px] max-lg:h-[100%]">
                        <div className="flex flex-col items-start max-sm:items-center h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[80px] max-lg:gap-[48px] max-md:gap-[20px] max-sm:gap-[40px] justify-between max-sm:justify-normal border-solid border-[2px] border-black">
                            <div className="flex flex-row max-lg:flex-col items-start max-lg:items-center bg-cover bg-center w-full justify-between max-lg:justify-normal  max-lg:gap-[32px]">
                                <div className="flex flex-col justify-center items-start bg-cover bg-center gap-[32px] w-[70%] max-lg:w-full">
                                    <h2 className="font-[Montserrat] font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%] " >
                                        Website & CRO Optimization
                                    </h2>
                                    <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                        Revamp your website with a complete redesign that aligns with your brand’s vision. We optimize UI/UX, landing pages, and site performance to enhance user experience, maximize engagement, and drive conversions.
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-cover bg-center w-full flex-1">
                                <div className="w-full static z-[3]">
                                    <DotLottieReact
                                        // src={"/animations/first.lottie"}
                                        data={CROAnimationData}
                                        loop
                                        autoplay
                                        className='xl:h-[288px]'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-lg:flex-col justify-center items-center bg-cover bg-center w-full gap-[24px]">
                            <div className="flex flex-col max-sm:justify-center items-start max-sm:items-center h-[250px] max-lg:h-[100%] max-sm:h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[32px] max-lg:p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[0px] max-lg:gap-[024px] max-md:gap-[20px] max-sm:gap-[32px] justify-between max-lg:justify-normal border-solid border-[2px] border-black">
                                <div className="flex flex-row items-center bg-cover bg-center w-full justify-between">
                                    <h2 className="font-[Montserrat] text-[32px] max-md:text-[28px] max-sm:text-[32px] font-bold tracking-[autopx] max-w-[70%] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-sm:leading-[120%] text-text-dark" >
                                        Ad Campaign Optimization
                                    </h2>
                                    <div className="flex justify-center items-center bg-cover bg-center flex-1">
                                        <div className="w-full static z-[3]">
                                            <DotLottieReact
                                                // src={"/animations/first.lottie"}
                                                data={AdsAnimationData}
                                                loop
                                                autoplay
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center max-lg:items-start bg-cover bg-center justify-between max-lg:justify-normal  max-lg:gap-[64px] max-sm:gap-[40px]">
                                    <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px]" >
                                        Track performance, analyze KPIs, and fine-tune campaigns to reduce ad spend waste.
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col max-sm:justify-center items-start max-sm:items-center h-[250px] max-lg:h-[100%] max-sm:h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[32px] max-lg:p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[0px] max-lg:gap-[024px] max-md:gap-[20px] max-sm:gap-[32px] justify-between max-lg:justify-normal border-solid border-[2px] border-black">
                                <div className="flex flex-row items-center bg-cover bg-center w-full justify-between">
                                    <h2 className="font-[Montserrat] text-[32px] max-md:text-[28px] max-w-[70%] max-sm:text-[32px] font-bold tracking-[autopx] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-sm:leading-[120%] text-text-dark" >
                                        Backend Setup & Guidance
                                    </h2>
                                    <div className="flex justify-center items-center bg-cover bg-center flex-1">
                                        <div className="w-full static z-[3]">
                                            <DotLottieReact
                                                // src={"/animations/first.lottie"}
                                                data={BackendAnimationData}
                                                loop
                                                autoplay
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center max-lg:items-start bg-cover bg-center justify-between max-lg:justify-normal  max-lg:gap-[64px] max-sm:gap-[40px]">
                                    <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px]" >
                                        Provide expert support for Facebook Pixels, Shopify payments, and operational efficiency.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse max-lg:flex-col justify-center items-start bg-cover bg-center gap-[24px] max-sm:gap-[24px] w-full max-lg:w-full  max-lg:h-[100%]">
                    <div className="flex flex-col justify-center items-center bg-cover bg-center w-[35%] max-lg:w-full gap-[24px] h-[1000px] max-lg:h-[100%]">
                        <div className="flex flex-col items-start max-sm:items-center h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary max-lg:gap-[48px] max-md:gap-[20px] max-sm:gap-[40px] justify-between max-sm:justify-normal border-solid border-[2px] border-black">
                            <div className="flex flex-col justify-center items-start bg-cover bg-center w-full gap-[24px]">
                                <h2 id="Design Branding Text" className="font-[Montserrat] font-bold text-[54px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%]">
                                    Paid Advertising Management
                                </h2>
                                <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                    Manage and optimize high-performing paid ad campaigns across Meta, Google, TikTok, and Snapchat to maximize ROI.
                                </h3>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-cover bg-center w-full flex-1">
                                <div className="w-full static z-[3]">
                                    <DotLottieReact
                                        // src={"/animations/first.lottie"}
                                        data={PaidAnimationData}
                                        loop
                                        autoplay
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-lg:flex-col justify-center items-center bg-cover bg-center w-full gap-[24px]">
                            <div className="flex flex-col max-sm:justify-center items-start max-sm:items-center h-[250px] max-lg:h-[100%] max-sm:h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[32px] max-lg:p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[0px] max-lg:gap-[024px] max-md:gap-[20px] max-sm:gap-[32px] justify-between max-lg:justify-normal border-solid border-[2px] border-black">
                                <div className="flex flex-row items-center bg-cover bg-center w-full justify-between">
                                    <h2 className="font-[Montserrat] text-[32px] max-w-[70%] max-md:text-[28px] max-sm:text-[32px] font-bold tracking-[autopx] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-sm:leading-[120%] text-text-dark" >
                                        Social Media Strategy
                                    </h2>
                                    <div className="flex justify-center items-center bg-cover bg-center flex-1">
                                        <div className="w-[70%] static z-[3]">
                                            <DotLottieReact
                                                // src={"/animations/first.lottie"}
                                                data={SocialAnimationData}
                                                loop
                                                autoplay
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center max-lg:items-start bg-cover bg-center justify-between max-lg:justify-normal  max-lg:gap-[64px] max-sm:gap-[40px]">
                                    <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px]" >
                                        Develop a structured posting plan to strengthen brand presence and engagement.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-cover bg-center w-[65%] max-lg:w-full gap-[24px] h-[1000px] max-lg:h-[100%]">
                        <div className="flex flex-col items-start max-sm:items-center h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[80px] max-lg:gap-[48px] max-md:gap-[20px] max-sm:gap-[40px] justify-between max-sm:justify-normal border-solid border-[2px] border-black">
                            <div className="flex flex-row max-lg:flex-col items-start max-lg:items-center bg-cover bg-center w-full justify-between max-lg:justify-normal  max-lg:gap-[32px]">
                                <div className="flex flex-col justify-center items-start bg-cover bg-center gap-[32px] w-[70%] max-lg:w-full">
                                    <h2 className="font-[Montserrat] font-bold text-[60px] max-md:text-[44px] max-sm:text-[32px] tracking-[autopx] leading-[100%] max-sm:leading-[100%] " >
                                        Brand Development
                                    </h2>
                                    <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                        Establish a scalable brand identity with strategic messaging, design, and positioning for long-term growth.
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-cover bg-center w-full flex-1">
                                <div className="w-full static z-[3]">
                                    <DotLottieReact
                                        // src={"/animations/first.lottie"}
                                        data={BrandAnimationData}
                                        loop
                                        autoplay
                                        className='xl:h-[288px]'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-lg:flex-col justify-center items-center bg-cover bg-center w-full gap-[24px]">
                            <div className="flex flex-col max-sm:justify-center items-start max-sm:items-center h-[250px] max-lg:h-[100%] max-sm:h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[32px] max-lg:p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[0px] max-lg:gap-[024px] max-md:gap-[20px] max-sm:gap-[32px] justify-between max-lg:justify-normal border-solid border-[2px] border-black">
                                <div className="flex flex-row items-center bg-cover bg-center w-full justify-between">
                                    <h2 className="font-[Montserrat] text-[32px] max-w-[70%] max-md:text-[28px] max-sm:text-[32px] font-bold tracking-[autopx] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-sm:leading-[120%] text-text-dark" >
                                        Performance Strategy
                                    </h2>
                                    <div className="flex justify-center items-center bg-cover bg-center flex-1">
                                        <div className="w-full static z-[3]">
                                            <DotLottieReact
                                                // src={"/animations/first.lottie"}
                                                data={PerformanceAnimationData}
                                                loop
                                                autoplay
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center max-lg:items-start bg-cover bg-center justify-between max-lg:justify-normal  max-lg:gap-[64px] max-sm:gap-[40px]">
                                    <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px]" >
                                        Conduct weekly strategy calls to optimize campaigns and make data-driven adjustments.
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col max-sm:justify-center items-start max-sm:items-center h-[250px] max-lg:h-[100%] max-sm:h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[32px] max-lg:p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[0px] max-lg:gap-[024px] max-md:gap-[20px] max-sm:gap-[32px] justify-between max-lg:justify-normal border-solid border-[2px] border-black">
                                <div className="flex flex-row items-center bg-cover bg-center w-full justify-between">
                                    <h2 className="font-[Montserrat] max-w-[70%] text-[32px] max-md:text-[28px] max-sm:text-[32px] font-bold tracking-[autopx] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-sm:leading-[120%] text-text-dark" >
                                        SEO & Domain Optimization
                                    </h2>
                                    <div className="flex justify-center items-center bg-cover bg-center flex-1">
                                        <div className="w-full static z-[3]">
                                            <DotLottieReact
                                                // src={"/animations/first.lottie"}
                                                data={SeoAnimationData}
                                                loop
                                                autoplay
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center max-lg:items-start bg-cover bg-center justify-between max-lg:justify-normal  max-lg:gap-[64px] max-sm:gap-[40px]">
                                    <h3 className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px]" >
                                        Improve search visibility and ranking with targeted keyword strategies.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex 2xl:flex-row flex-col max-sm:items-center h-[100%] w-full rounded-[48px] max-sm:rounded-[32px] p-[40px] max-md:p-[40px] max-sm:p-[20px] bg-primary gap-[80px] max-lg:gap-[48px] max-md:gap-[20px] max-sm:gap-[40px] justify-between max-sm:justify-normal border-solid border-[2px] border-black">
                    <div className="flex flex-col items-start max-lg:items-center bg-cover bg-center flex-1 justify-between max-lg:justify-normal gap-[32px]">
                        <h2 className="font-[Montserrat] text-[32px] max-md:text-[28px] max-sm:text-[32px] font-bold tracking-[autopx] leading-[120%] max-lg:leading-[120%] max-md:leading-[150%] max-sm:leading-[120%] text-text-dark" >
                            Additional Offerings
                        </h2>
                        <ul className="flex flex-col justify-center items-start list-disc bg-cover bg-center gap-2 w-full">
                            <li className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                Cost-Effective Shipping Solutions for eCommerce stores.
                            </li>
                            <li className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                Manufacturing & Fulfillment Partners to streamline logistics.
                            </li>
                            <li className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                Platform Insiders ensuring priority and compliance across major channels.
                            </li>
                            <li className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                Payment Processing Partners to keep your store in good standing.
                            </li>
                            <li className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                In-House Creative & Branding for seamless design and operations.
                            </li>
                            <li className="font-[Montserrat] text-[20px] max-md:text-base max-sm:text-base font-normal tracking-[autopx] leading-[160%] max-md:leading-[24px] max-sm:leading-[20px] w-full" >
                                AI Automations to optimize and streamline your business workflow.
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center bg-cover bg-center flex-1">
                        <div className="w-full lg:w-[70%] static z-[3]">
                            <DotLottieReact
                                // src={"/animations/first.lottie"}
                                data={AdditionalAnimationData}
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDoSection
