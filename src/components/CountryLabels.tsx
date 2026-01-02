import { motion } from "framer-motion";
import { countries } from "@/data/countries";

interface CountryLabelsProps {
  mapWidth: number;
  mapHeight: number;
}

// Major hotspot countries to display labels for
const hotspotCountries = ["US", "CN", "RU", "DE", "GB", "JP", "IN", "BR", "AU", "ZA"];

export const CountryLabels = ({ mapWidth, mapHeight }: CountryLabelsProps) => {
  const hotspotsToShow = countries.filter(c => hotspotCountries.includes(c.code));

  return (
    <g className="country-labels">
      {hotspotsToShow.map((country, index) => {
        const xPercent = country.x + (country.offsetX ?? 0);
        const yPercent = country.y + (country.offsetY ?? 0);

        const x = (xPercent / 100) * mapWidth;
        const y = (yPercent / 100) * mapHeight;

        return (
          <motion.g
            key={country.code}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {/* Pulsing dot */}
            <circle
              cx={x}
              cy={y}
              r={4}
              fill="#ffffff"
              opacity={0.9}
            >
              <animate
                attributeName="r"
                values="3;5;3"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0.4;0.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Outer ring */}
            <circle
              cx={x}
              cy={y}
              r={8}
              fill="none"
              stroke="hsl(190, 100%, 50%)"
              strokeWidth={0.5}
              opacity={0.4}
            >
              <animate
                attributeName="r"
                values="6;12;6"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0.1;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Country label */}
            <text
              x={x}
              y={y - 12}
              textAnchor="middle"
              className="fill-white font-mono text-[8px] uppercase tracking-wider"
              style={{
                filter: "drop-shadow(0 0 4px hsl(190, 100%, 50%))",
              }}
            >
              {country.code}
            </text>
          </motion.g>
        );
      })}
    </g>
  );
};
