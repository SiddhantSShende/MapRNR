import { useState, useCallback } from "react";
import { ThreatMapInteractive } from "@/components/ThreatMapInteractive";
import { AttackFeed } from "@/components/AttackFeed";
import { StatsPanel } from "@/components/StatsPanel";
import { AttackLegend } from "@/components/AttackLegend";
import { AttackCounter } from "@/components/AttackCounter";
import { DailyChart } from "@/components/DailyChart";
import { TimeRangeFilter, TimeRange } from "@/components/TimeRangeFilter";
import { SoundControl } from "@/components/SoundControl";
import { useAttackSimulation } from "@/hooks/useAttackSimulation";
import { useAttackSounds } from "@/hooks/useAttackSounds";
import { PageLayout } from "@/components/layout/PageLayout";
import { Attack } from "@/data/countries";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThreatMapPage() {
  const { 
    recentAttacks, 
    totalAttacks, 
    activeAttacks, 
    getTopTargetedCountries 
  } = useAttackSimulation(4);

  const topCountries = getTopTargetedCountries();
  const [timeRange, setTimeRange] = useState<TimeRange>("24h");
  const [showStats, setShowStats] = useState(true);
  
  const {
    isEnabled: soundEnabled,
    volume,
    playAttackSound,
    toggleSound,
    setVolume,
  } = useAttackSounds({ enabled: false, volume: 0.3 });

  const handleAttackDetected = useCallback((attack: Attack) => {
    playAttackSound(attack.type);
  }, [playAttackSound]);

  return (
    <PageLayout showParticles={false}>
      <div className="min-h-[calc(100vh-5rem)] flex flex-col p-4 md:p-6 lg:p-8">
        {/* Top Controls */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <AttackCounter totalAttacks={totalAttacks} />
          <div className="flex items-center gap-3">
            <TimeRangeFilter value={timeRange} onChange={setTimeRange} />
            <SoundControl
              isEnabled={soundEnabled}
              volume={volume}
              onToggle={toggleSound}
              onVolumeChange={setVolume}
            />
            <button
              type="button"
              onClick={() => setShowStats((prev) => !prev)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-border/40 bg-background/60 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
           >
              {showStats ? (
                <EyeOff className="w-3 h-3" />
              ) : (
                <Eye className="w-3 h-3" />
              )}
              <span className="hidden sm:inline">Insights</span>
              <span className="sm:hidden">{showStats ? "Hide" : "Show"}</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-4 lg:h-[calc(100vh-9rem)]">
          {/* Left Panel */}
          <div className="space-y-4 order-2 lg:order-1 lg:overflow-y-auto lg:pr-1">
            <DailyChart />
            <AttackFeed recentAttacks={recentAttacks} />
          </div>

          {/* Center - Map */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <div className="flex-1 min-h-[400px] lg:min-h-0 relative rounded-lg overflow-hidden border border-border/30">
              <ThreatMapInteractive 
                activeAttacks={activeAttacks} 
                onAttackDetected={handleAttackDetected}
              />
            </div>

            <AttackLegend />
          </div>

          {/* Right Panel */}
          <div className={cn("order-3", !showStats && "hidden") }>
            <div className="h-full overflow-y-auto pr-1">
              <StatsPanel topCountries={topCountries} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
