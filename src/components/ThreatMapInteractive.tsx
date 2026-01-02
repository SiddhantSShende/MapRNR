import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import DottedMap from "dotted-map";
import { Attack, countries, Country, AttackType } from "@/data/countries";
import { EnhancedAttackLine } from "./EnhancedAttackLine";
import { CountryLabels } from "./CountryLabels";
import { CountryDetailModal } from "./CountryDetailModal";
import { motion, AnimatePresence } from "framer-motion";

interface ThreatMapInteractiveProps {
  activeAttacks: Attack[];
  onAttackDetected?: (attack: Attack) => void;
}

interface MagnifyState {
  active: boolean;
  x: number;
  y: number;
   // Whether the hover panel should render to the left of the cursor
   alignLeft: boolean;
  countryCode: string | null;
  countryName: string | null;
  internalAttacks: { from: string; to: string; type: string }[];
}

// Simulated internal attacks for magnify view
const generateInternalAttacks = (countryCode: string) => {
  const attackTypes = ["DDoS", "Ransomware", "Phishing", "Malware", "SQL Injection"];
  const regions: Record<string, string[]> = {
    US: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Seattle", "Miami", "Boston"],
    CN: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Hangzhou", "Xi'an", "Wuhan"],
    RU: ["Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan", "Samara"],
    DE: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne", "Stuttgart"],
    GB: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Liverpool"],
    JP: ["Tokyo", "Osaka", "Nagoya", "Fukuoka", "Sapporo", "Kyoto"],
    IN: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata"],
    BR: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"],
    AU: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    ZA: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"],
  };

  const countryRegions = regions[countryCode] || ["Region A", "Region B", "Region C", "Region D"];
  const numAttacks = Math.floor(Math.random() * 4) + 3;
  const attacks = [];

  for (let i = 0; i < numAttacks; i++) {
    const from = countryRegions[Math.floor(Math.random() * countryRegions.length)];
    let to = countryRegions[Math.floor(Math.random() * countryRegions.length)];
    while (to === from && countryRegions.length > 1) {
      to = countryRegions[Math.floor(Math.random() * countryRegions.length)];
    }
    attacks.push({
      from,
      to,
      type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
    });
  }

  return attacks;
};

export const ThreatMapInteractive = ({ activeAttacks, onAttackDetected }: ThreatMapInteractiveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });
  const [magnify, setMagnify] = useState<MagnifyState>({
    active: false,
    x: 0,
    y: 0,
    alignLeft: false,
    countryCode: null,
    countryName: null,
    internalAttacks: [],
  });
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const prevAttackCountRef = useRef(activeAttacks.length);

  // Notify parent when new attacks arrive
  useEffect(() => {
    if (activeAttacks.length > prevAttackCountRef.current && onAttackDetected) {
      const newAttack = activeAttacks[activeAttacks.length - 1];
      onAttackDetected(newAttack);
    }
    prevAttackCountRef.current = activeAttacks.length;
  }, [activeAttacks, onAttackDetected]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Generate higher resolution dotted map
  const mapSvg = useMemo(() => {
    const map = new DottedMap({ height: 80, grid: "diagonal" });
    
    const svgMap = map.getSVG({
      radius: 0.3,
      color: "hsl(190, 100%, 50%)",
      shape: "circle",
      backgroundColor: "transparent",
    });
    
    return svgMap;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    const x = (localX / rect.width) * 100;
    const y = (localY / rect.height) * 100;

    // Find nearest country within threshold
    const threshold = 5;
    let nearestCountry = null;
    let minDistance = threshold;

    for (const country of countries) {
      const distance = Math.sqrt(Math.pow(country.x - x, 2) + Math.pow(country.y - y, 2));
      if (distance < minDistance) {
        minDistance = distance;
        nearestCountry = country;
      }
    }

    if (nearestCountry && nearestCountry.code !== magnify.countryCode) {
      // If we're near the right edge of the map, render panel on the left
      const alignLeft = localX > rect.width * 0.6;

      setMagnify({
        active: true,
        x: localX,
        y: localY,
        alignLeft,
        countryCode: nearestCountry.code,
        countryName: nearestCountry.name,
        internalAttacks: generateInternalAttacks(nearestCountry.code),
      });
    } else if (nearestCountry) {
      setMagnify(prev => ({
        ...prev,
        x: localX,
        y: localY,
      }));
    } else if (!nearestCountry && magnify.active) {
      setMagnify(prev => ({ ...prev, active: false, countryCode: null, countryName: null }));
    }
  }, [magnify.countryCode, magnify.active]);

  const handleMouseLeave = useCallback(() => {
    setMagnify(prev => ({ ...prev, active: false, countryCode: null, countryName: null }));
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Find nearest country
    const threshold = 6;
    let nearestCountry = null;
    let minDistance = threshold;

    for (const country of countries) {
      const distance = Math.sqrt(Math.pow(country.x - x, 2) + Math.pow(country.y - y, 2));
      if (distance < minDistance) {
        minDistance = distance;
        nearestCountry = country;
      }
    }

    if (nearestCountry) {
      setSelectedCountry(nearestCountry);
      setIsModalOpen(true);
    }
  }, []);

  return (
    <>
      <div 
        ref={containerRef} 
        className="relative w-full h-full overflow-hidden cursor-crosshair threat-map-bg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(190, 100%, 50%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(190, 100%, 50%) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Dotted world map */}
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-70"
          dangerouslySetInnerHTML={{ __html: mapSvg }}
          style={{
            filter: "drop-shadow(0 0 10px hsl(190, 100%, 50%, 0.4))"
          }}
        />

        {/* Attack lines overlay */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0"
        >
          <defs>
            <clipPath id="mapClipInteractive">
              <rect x="0" y="0" width="1200" height="600" />
            </clipPath>
            <radialGradient id="magnifyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.3" />
              <stop offset="70%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Latitude lines */}
          <g stroke="hsl(190 100% 50% / 0.05)" strokeWidth="0.5" fill="none">
            <line x1="0" y1="100" x2="1200" y2="100" strokeDasharray="4 8" />
            <line x1="0" y1="200" x2="1200" y2="200" strokeDasharray="4 8" />
            <line x1="0" y1="300" x2="1200" y2="300" strokeDasharray="4 8" />
            <line x1="0" y1="400" x2="1200" y2="400" strokeDasharray="4 8" />
            <line x1="0" y1="500" x2="1200" y2="500" strokeDasharray="4 8" />
          </g>

          {/* Longitude lines */}
          <g stroke="hsl(190 100% 50% / 0.05)" strokeWidth="0.5" fill="none">
            <line x1="200" y1="0" x2="200" y2="600" strokeDasharray="4 8" />
            <line x1="400" y1="0" x2="400" y2="600" strokeDasharray="4 8" />
            <line x1="600" y1="0" x2="600" y2="600" strokeDasharray="4 8" />
            <line x1="800" y1="0" x2="800" y2="600" strokeDasharray="4 8" />
            <line x1="1000" y1="0" x2="1000" y2="600" strokeDasharray="4 8" />
          </g>

          {/* Country labels */}
          <CountryLabels mapWidth={1200} mapHeight={600} />

          {/* Enhanced attack lines */}
          <g clipPath="url(#mapClipInteractive)">
            {activeAttacks.map((attack) => (
              <EnhancedAttackLine
                key={attack.id}
                attack={attack}
                mapWidth={1200}
                mapHeight={600}
              />
            ))}
          </g>
        </svg>

        {/* Magnify Lens Effect */}
        <AnimatePresence>
          {magnify.active && magnify.countryCode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute pointer-events-none z-50"
              style={{
                  left: magnify.alignLeft ? Math.max(8, magnify.x - 320) : magnify.x + 20,
                  top: magnify.y - 10,
                transform: "translateY(-100%)",
              }}
            >
              {/* Magnify panel */}
              <div className="bg-background/95 backdrop-blur-xl border border-primary/40 rounded-lg p-4 min-w-[280px] shadow-2xl shadow-primary/20">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-lg">
                      {countries.find(c => c.code === magnify.countryCode)?.flag || "🌐"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm">
                      {magnify.countryName}
                    </h3>
                    <p className="text-xs text-primary font-mono">
                      Click for detailed view
                    </p>
                  </div>
                </div>

                {/* Internal attacks visualization */}
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Active Internal Attacks
                  </div>
                  {magnify.internalAttacks.map((attack, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-2 text-xs"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-red animate-pulse" />
                      <span className="text-muted-foreground">{attack.from}</span>
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      <span className="text-foreground font-medium">{attack.to}</span>
                      <span className="ml-auto px-1.5 py-0.5 rounded text-[10px] bg-cyber-red/20 text-cyber-red">
                        {attack.type}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats footer */}
                <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                  <div className="text-muted-foreground">
                    <span className="text-cyber-red font-bold">{magnify.internalAttacks.length}</span> active threats
                  </div>
                  <div className="text-primary font-mono">
                    Threat Level: HIGH
                  </div>
                </div>
              </div>

              {/* Connector line */}
              <div 
                className="absolute bottom-0 left-0 w-px h-4 bg-gradient-to-b from-primary/50 to-transparent"
                style={{ transform: "translateY(100%)" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover glow effect */}
        <AnimatePresence>
          {magnify.active && magnify.countryCode && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute pointer-events-none rounded-full"
              style={{
                left: magnify.x - 80,
                top: magnify.y - 80,
                width: 160,
                height: 160,
                background: "radial-gradient(circle, hsl(190, 100%, 50%, 0.25) 0%, transparent 70%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary/30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/30 pointer-events-none" />

        {/* Vignette overlay */}
        <div 
          className="absolute inset-0 pointer-events-none threat-map-vignette"
        />

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            initial={{ top: "-1px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Click hint */}
        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-md bg-background/60 backdrop-blur-sm border border-border/30 text-xs text-muted-foreground pointer-events-none">
          Click country for details
        </div>
      </div>

      {/* Country Detail Modal */}
      <CountryDetailModal
        country={selectedCountry}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        attackHistory={[]}
      />
    </>
  );
};
