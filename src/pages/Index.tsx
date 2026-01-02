import { Header } from "@/components/Header";
import { ThreatMap } from "@/components/ThreatMap";
import { AttackFeed } from "@/components/AttackFeed";
import { StatsPanel } from "@/components/StatsPanel";
import { AttackLegend } from "@/components/AttackLegend";
import { AttackCounter } from "@/components/AttackCounter";
import { DailyChart } from "@/components/DailyChart";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useAttackSimulation } from "@/hooks/useAttackSimulation";

const Index = () => {
  const { 
    recentAttacks, 
    totalAttacks, 
    activeAttacks, 
    getTopTargetedCountries 
  } = useAttackSimulation(4);

  const topCountries = getTopTargetedCountries();

  return (
    <div className="min-h-screen gradient-cyber relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col p-4 md:p-6 lg:p-8">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-4 mt-4">
          {/* Left Panel */}
          <div className="space-y-4 order-2 lg:order-1">
            <DailyChart />
            <AttackFeed recentAttacks={recentAttacks} />
          </div>

          {/* Center - Map */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <AttackCounter totalAttacks={totalAttacks} />
            
            <div className="flex-1 min-h-[400px] lg:min-h-0 relative rounded-lg overflow-hidden border border-border/30">
              <ThreatMap activeAttacks={activeAttacks} />
            </div>

            <AttackLegend />
          </div>

          {/* Right Panel */}
          <div className="order-3">
            <StatsPanel topCountries={topCountries} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
