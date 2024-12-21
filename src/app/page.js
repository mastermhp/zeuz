import { CTASection } from "./components/CTASection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { ManualTestManagement } from "./components/ManualTestManagement";
import { NavBar } from "./components/NavBar";
import OrbitLogos from "./components/OrbitLogos";
import { ServicesSection } from "./components/ServicesSection";
import { SoftwareManagement } from "./components/SoftwareManagement";
import SupportSection from "./components/SupportSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <SoftwareManagement/>
      <ManualTestManagement/>
      <OrbitLogos/>
      <SupportSection/>
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

