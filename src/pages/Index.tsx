import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import MissionSection from "@/components/home/MissionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <StatsSection />
      </main>
    </div>
  );
};

export default Index;
