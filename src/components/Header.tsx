import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <motion.div 
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <Shield className="w-8 h-8 text-cyber-red" />
          <div className="absolute inset-0 blur-md bg-cyber-red/40" />
        </div>
        <span className="font-display text-xl font-bold tracking-wider text-foreground">
          CYBER<span className="text-primary">SHIELD</span>
        </span>
      </motion.div>

      <motion.div
        className="hidden md:flex items-center gap-2 border border-cyber-red/50 rounded px-4 py-2 bg-cyber-red/10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-foreground text-xs font-display uppercase tracking-widest">
          Don't wait to be attacked
        </span>
        <span className="text-cyber-red font-display font-bold">
          Prevention starts
        </span>
        <span className="bg-cyber-yellow text-background px-2 py-0.5 rounded text-xs font-bold">
          NOW &gt;
        </span>
      </motion.div>
    </header>
  );
};
