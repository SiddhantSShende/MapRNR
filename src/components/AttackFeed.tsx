import { motion } from "framer-motion";
import { Attack, attackTypes } from "@/data/countries";

interface AttackFeedProps {
  recentAttacks: Attack[];
}

export const AttackFeed = ({ recentAttacks }: AttackFeedProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="gradient-card border border-border/50 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        <h3 className="text-xs font-display uppercase tracking-widest text-muted-foreground">
          Attacks
        </h3>
        <span className="text-xs text-muted-foreground ml-auto">Current rate</span>
        <div className="flex items-center gap-1">
          <button className="w-5 h-5 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            −
          </button>
          <span className="text-primary font-bold text-sm">4</span>
          <button className="w-5 h-5 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            +
          </button>
        </div>
      </div>

      <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
        {recentAttacks.map((attack, index) => {
          const typeInfo = attackTypes[attack.type];
          const dotColor = 
            attack.type === "malware" ? "bg-cyber-red" :
            attack.type === "phishing" ? "bg-cyber-purple" :
            "bg-cyber-orange";

          return (
            <motion.div
              key={attack.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 py-2 border-b border-border/30 last:border-0"
            >
              <div className={`w-2 h-2 rounded-full ${dotColor} mt-1.5 animate-pulse-glow flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-foreground truncate font-medium">
                  {attack.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  <span className="text-primary">{formatTime(attack.timestamp)}</span>
                  {" "}
                  <span>{attack.source.name}</span>
                  {" "}
                  <span className="text-cyber-orange">→</span>
                  {" "}
                  <span>{attack.target.name}</span>
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
