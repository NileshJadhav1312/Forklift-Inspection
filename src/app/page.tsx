import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import SubHeroSection from "@/components/hero/SubHeroSection";
import Checklist from "@/components/checklist/Checklist";
import Features from "@/components/features/Features";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Industries from "@/components/industries/Industries";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/layout/Footer";

// Main landing page assembling the complete forklift inspection showcase
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SubHeroSection />
        <Checklist />
        <Features />
        <HowItWorks />
        <Industries />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}