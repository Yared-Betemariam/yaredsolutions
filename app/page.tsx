import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorksSection from "@/components/WorksSection";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="flex flex-col flex-1 gap-2">
      <HeroSection />
      <WorksSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
