'use client'
import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault(); // Prevents the default instant jump behavior
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="flex justify-center items-center h-auto bg-black py-[20px] w-full rounded-tl-[0px] rounded-tr-[0px]">
            <div className="w-[90%] flex flex-row max-lg:flex-col justify-between items-center">
                <Link href="/" className="inline-block w-[300px] max-sm:w-[200px]">
                    <video src="/ElevateLogo.webm" autoPlay playsInline loop muted></video>
                </Link>
                <nav className="flex flex-row max-md:flex-col justify-center items-center gap-[32px] max-sm:gap-[24px] max-md:pb-6">
                    <Link href="/#our-services" onClick={(e) => handleSmoothScroll(e, '#our-services')} className="cursor-pointer">
                        <h5 className="font-[Montserrat] font-bold text-[24px] max-sm:text-[18px] text-white hover:text-primary transition-all duration-300">
                            Our Services
                        </h5>
                    </Link>
                    <Link href="/#the-process" onClick={(e) => handleSmoothScroll(e, '#the-process')} className="cursor-pointer">
                        <h5 className="font-[Montserrat] font-bold text-[24px] max-sm:text-[18px] text-white hover:text-primary transition-all duration-300">
                            The Process
                        </h5>
                    </Link>
                    <Link href="/#faqs" onClick={(e) => handleSmoothScroll(e, '#faqs')} className="cursor-pointer">
                        <h5 className="font-[Montserrat] font-bold text-[24px] max-sm:text-[18px] text-white hover:text-primary transition-all duration-300">
                            FAQ
                        </h5>
                    </Link>
                    <Link href="https://form.typeform.com/to/k193DcdQ" target='_blank' className="cursor-pointer">
                        <h5 className="font-[Montserrat] font-bold text-[24px] max-sm:text-[18px] text-white hover:text-primary transition-all duration-300">
                            ELEVATE NOW
                        </h5>
                    </Link>
                </nav>
                <div className="flex flex-row gap-[16px]">
                    <Link href="https://www.facebook.com/share/1MEvJhgQHr/?mibextid=wwXIfr" target='_blank'>
                        <div className="p-[8px] bg-primary rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </div>
                    </Link>
                    <Link href="https://www.instagram.com/elev8temedia" target='_blank'>
                        <div className="p-[8px] bg-primary rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </div>
                    </Link>
                    <Link href="https://www.linkedin.com/company/elev8temedia" target='_blank'>
                        <div className="p-[8px] bg-primary rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
