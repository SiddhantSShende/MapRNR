import { motion } from "framer-motion";
import { attackTypes } from "@/data/countries";

export const AttackLegend = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      {Object.entries(attackTypes).map(([type, { label, color }], index) => {
        const dotColor = 
          type === "malware" ? "bg-cyber-red" :
          type === "phishing" ? "bg-cyber-purple" :
          "bg-cyber-orange";
        
        const glowClass =
          type === "malware" ? "box-glow-red" :
          type === "phishing" ? "box-glow-purple" :
          "box-glow-orange";

        return (
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className={`w-3 h-3 rounded-full ${dotColor} ${glowClass}`} />
            <span className="text-sm text-foreground font-medium">{label}</span>
          </motion.div>
        );
      })}
    </div>
  );
};
