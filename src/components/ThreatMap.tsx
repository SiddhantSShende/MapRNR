import { useMemo, useRef, useEffect, useState } from "react";
import DottedMap from "dotted-map";
import { Attack } from "@/data/countries";
import { AttackLine } from "./AttackLine";
import { CountryLabels } from "./CountryLabels";

interface ThreatMapProps {
  activeAttacks: Attack[];
}

export const ThreatMap = ({ activeAttacks }: ThreatMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });

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

  // Generate the dotted map SVG
  const mapSvg = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    
    const svgMap = map.getSVG({
      radius: 0.35,
      color: "hsl(190, 100%, 50%)",
      shape: "circle",
      backgroundColor: "transparent",
    });
    
    return svgMap;
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden threat-map-bg"
    >
      {/* Dotted world map */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-60"
        dangerouslySetInnerHTML={{ __html: mapSvg }}
        style={{
          filter: "drop-shadow(0 0 8px hsl(190, 100%, 50%, 0.3))"
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
          <clipPath id="mapClip">
            <rect x="50" y="30" width="1100" height="540" rx="8" />
          </clipPath>
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

        {/* Attack lines - clipped to map area */}
        <g clipPath="url(#mapClip)">
          {activeAttacks.map((attack) => (
            <AttackLine
              key={attack.id}
              attack={attack}
              mapWidth={1200}
              mapHeight={600}
            />
          ))}
        </g>
      </svg>

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none threat-map-vignette"
      />
    </div>
  );
};
