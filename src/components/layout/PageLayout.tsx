import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { SiteFooter } from "./SiteFooter";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CompanyChatbot } from "@/components/CompanyChatbot";

interface PageLayoutProps {
  children: ReactNode;
  showParticles?: boolean;
}

export const PageLayout = ({ children, showParticles = true }: PageLayoutProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    setIsTransitioning(true);
    const timeout = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-cyber relative overflow-hidden">
      {showParticles && <ParticleBackground />}
      
      <Navbar />

      {isTransitioning && (
        <motion.div
          className="fixed left-0 right-0 top-0 z-50 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 shadow-[0_0_18px_rgba(56,189,248,0.9)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "0% 50%" }}
        />
      )}

      <main className="relative z-10 pt-16 lg:pt-20">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <CompanyChatbot />
      <SiteFooter />
    </div>
  );
};
