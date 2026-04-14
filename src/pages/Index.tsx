import { useState, useCallback } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ServicesSection from "@/components/ServicesSection";
import ForWhoSection from "@/components/ForWhoSection";
import JourneySection from "@/components/JourneySection";
import SocialProofSection from "@/components/SocialProofSection";
import ResultsSection from "@/components/ResultsSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <DifferentialsSection />
        <ServicesSection />
        <ForWhoSection />
        <JourneySection />
        <SocialProofSection />
        <ResultsSection />
        <FinalCTASection />
      </main>
      <FooterSection />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
