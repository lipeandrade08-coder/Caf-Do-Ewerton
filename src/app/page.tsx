import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutCoffee from "@/components/AboutCoffee";
import CoffeeExperience from "@/components/CoffeeExperience";
import CinematicSection from "@/components/CinematicSection";
import RoastSection from "@/components/RoastSection";
import BrandStory from "@/components/BrandStory";
import InstagramGrid from "@/components/InstagramGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-charcoal)] selection:bg-[var(--color-brand-gold)]/30 selection:text-[var(--color-brand-cream)]">
      <Header />
      <Hero />
      <AboutCoffee />
      <CoffeeExperience />
      <CinematicSection />
      <RoastSection />
      <BrandStory />
      <InstagramGrid />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
