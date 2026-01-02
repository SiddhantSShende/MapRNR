import { Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="relative">
          <Shield className="w-6 h-6 text-primary" />
          <Zap className="w-3 h-3 text-cyber-orange absolute -top-1 -right-1" />
        </div>
        <span className="font-display text-sm tracking-widest">
          THREAT<span className="text-primary">CLOUD</span>
          <span className="text-cyber-red ml-1">AI</span>
        </span>
      </motion.div>
    </footer>
  );
};
