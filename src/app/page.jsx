import BookCallSection from "@/containers/Home/BookCallSection";
import ClientSection from "@/containers/Home/ClientSection";
import EmpoweringBusinessSection from "@/containers/Home/EmpoweringBusinessSection";
import EndToEndSolutionSection from "@/containers/Home/EndToEndSolutionSection";
import HeroSection from "@/containers/Home/HeroSection";
import ServicesSection from "@/containers/Home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EndToEndSolutionSection />
      <ServicesSection />
      <EmpoweringBusinessSection />
      <ClientSection />
      <BookCallSection />
    </main>
  );
}
