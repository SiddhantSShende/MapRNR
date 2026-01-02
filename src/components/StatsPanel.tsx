import { motion } from "framer-motion";
import { Country } from "@/data/countries";
import { topTargetedIndustries, topMalwareTypes } from "@/data/countries";

interface StatsPanelProps {
  topCountries: { country: Country; count: number }[];
}

export const StatsPanel = ({ topCountries }: StatsPanelProps) => {
  return (
    <div className="space-y-4">
      {/* Top Targeted Countries */}
      <div className="gradient-card border border-border/50 rounded-lg p-4 backdrop-blur-sm">
        <h3 className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-1">
          Top Targeted Countries
        </h3>
        <p className="text-[10px] text-muted-foreground/70 mb-3">
          Highest rate of attacks per organization in the last day.
        </p>
        
        <div className="space-y-2">
          {topCountries.length > 0 ? (
            topCountries.map(({ country, count }, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm text-foreground">{country.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {count}
                </span>
              </motion.div>
            ))
          ) : (
            <div className="text-xs text-muted-foreground">Loading...</div>
          )}
        </div>
      </div>

      {/* Top Targeted Industries */}
      <div className="gradient-card border border-border/50 rounded-lg p-4 backdrop-blur-sm">
        <h3 className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-1">
          Top Targeted Industries
        </h3>
        <p className="text-[10px] text-muted-foreground/70 mb-3">
          Highest rate of attacks per organization in the last day.
        </p>
        
        <div className="space-y-2">
          {topTargetedIndustries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{industry.icon}</span>
              <span className="text-sm text-foreground">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top Malware Types */}
      <div className="gradient-card border border-border/50 rounded-lg p-4 backdrop-blur-sm">
        <h3 className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-1">
          Top Malware Types
        </h3>
        <p className="text-[10px] text-muted-foreground/70 mb-3">
          Malware types with the highest global impact in the last day.
        </p>
        
        <div className="space-y-2">
          {topMalwareTypes.map((malware, index) => (
            <motion.div
              key={malware.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{malware.icon}</span>
              <span className="text-sm text-foreground">{malware.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
