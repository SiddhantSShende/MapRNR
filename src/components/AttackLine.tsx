import { motion } from "framer-motion";
import { Attack, attackTypes } from "@/data/countries";

interface AttackLineProps {
  attack: Attack;
  mapWidth: number;
  mapHeight: number;
}

export const AttackLine = ({ attack, mapWidth, mapHeight }: AttackLineProps) => {
  const { source, target, type } = attack;
  
  const x1Percent = source.x + (source.offsetX ?? 0);
  const y1Percent = source.y + (source.offsetY ?? 0);
  const x2Percent = target.x + (target.offsetX ?? 0);
  const y2Percent = target.y + (target.offsetY ?? 0);

  const x1 = (x1Percent / 100) * mapWidth;
  const y1 = (y1Percent / 100) * mapHeight;
  const x2 = (x2Percent / 100) * mapWidth;
  const y2 = (y2Percent / 100) * mapHeight;

  // Calculate control point for curved line
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const curvature = Math.min(distance * 0.3, 80);
  
  // Curve upward
  const controlX = midX;
  const controlY = midY - curvature;

  const pathD = `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;

  const colorClass = attackTypes[type].color;
  const strokeColor = 
    type === "malware" ? "#ff4757" :
    type === "phishing" ? "#a855f7" :
    "#ff9f43";

  const glowFilter = `drop-shadow(0 0 4px ${strokeColor}) drop-shadow(0 0 8px ${strokeColor})`;

  return (
    <g>
      {/* Glow path */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.3}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.3, 0.3, 0] }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{ filter: glowFilter }}
      />
      
      {/* Main path */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{ filter: glowFilter }}
      />

      {/* Source point */}
      <motion.circle
        cx={x1}
        cy={y1}
        r={4}
        fill={strokeColor}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{ filter: glowFilter }}
      />

      {/* Target point with pulse */}
      <motion.circle
        cx={x2}
        cy={y2}
        r={6}
        fill="transparent"
        stroke={strokeColor}
        strokeWidth={2}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2, 3], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        style={{ filter: glowFilter }}
      />
      
      <motion.circle
        cx={x2}
        cy={y2}
        r={4}
        fill={strokeColor}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        style={{ filter: glowFilter }}
      />
    </g>
  );
};
