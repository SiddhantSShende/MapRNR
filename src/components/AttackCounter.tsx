import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AttackCounterProps {
  totalAttacks: number;
}

export const AttackCounter = ({ totalAttacks }: AttackCounterProps) => {
  const [displayCount, setDisplayCount] = useState(totalAttacks);

  useEffect(() => {
    // Animate number changes
    const diff = totalAttacks - displayCount;
    if (diff > 0) {
      const step = Math.ceil(diff / 10);
      const interval = setInterval(() => {
        setDisplayCount((prev) => {
          const next = prev + step;
          if (next >= totalAttacks) {
            clearInterval(interval);
            return totalAttacks;
          }
          return next;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [totalAttacks, displayCount]);

  const formattedCount = displayCount.toLocaleString();

  return (
    <div className="text-center">
      <motion.h1 
        className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-wide italic"
        style={{
          background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Live Cyber Threat Map
      </motion.h1>
      <motion.p 
        className="text-cyber-orange text-lg md:text-xl font-display mt-2 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span
          key={displayCount}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          {formattedCount}
        </motion.span>
        {" "}attacks on this day
      </motion.p>
    </div>
  );
};
