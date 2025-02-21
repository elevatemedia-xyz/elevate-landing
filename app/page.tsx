import ElevateNowSection from "@/components/ElevateNow/ElevateNowSection";
import FAQsSection from "@/components/FAQs/FAQsSection";
import Footer from "@/components/Footer/Footer";
import FourStepsSection from "@/components/FourSteps/FourStepsSection";
import HeroSection from "@/components/Hero/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import WhatWeDoSection from "@/components/WhatWeDo/WhatWeDoSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-black min-h-screen w-full relative overflow-hidden">
        <HeroSection />
        <WhatWeDoSection />
        <FourStepsSection />
        <FAQsSection />
        <ElevateNowSection />
      </main>
      <footer className="gap-[32px] w-full z-[auto] relative left-[0%]">
        <Footer />
      </footer>
    </>
  );
}
