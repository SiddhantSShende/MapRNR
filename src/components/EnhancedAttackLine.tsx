import { motion } from "framer-motion";
import { Attack, attackTypes } from "@/data/countries";
import { useMemo } from "react";

interface EnhancedAttackLineProps {
  attack: Attack;
  mapWidth: number;
  mapHeight: number;
}

export const EnhancedAttackLine = ({ attack, mapWidth, mapHeight }: EnhancedAttackLineProps) => {
  const { source, target, type } = attack;
  
  // Calculate pixel positions (with optional fine-tuning offsets)
  const x1Percent = source.x + (source.offsetX ?? 0);
  const y1Percent = source.y + (source.offsetY ?? 0);
  const x2Percent = target.x + (target.offsetX ?? 0);
  const y2Percent = target.y + (target.offsetY ?? 0);

  const x1 = (x1Percent / 100) * mapWidth;
  const y1 = (y1Percent / 100) * mapHeight;
  const x2 = (x2Percent / 100) * mapWidth;
  const y2 = (y2Percent / 100) * mapHeight;

  // Calculate distance for dynamic animation speed
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const normalizedDistance = Math.min(distance / 600, 1);
  
  // Slower animations for longer distances
  const animationDuration = 1.5 + normalizedDistance * 1.5;

  // Enhanced cubic Bezier curve calculation
  const { pathD, controlPoints } = useMemo(() => {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    // Calculate perpendicular vector for curve direction
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    
    // Perpendicular unit vector
    const perpX = -dy / len;
    const perpY = dx / len;
    
    // Curve amount based on distance (more curve for longer lines)
    const curveAmount = Math.min(len * 0.25, 100);
    
    // Control points for cubic Bezier (S-curve effect)
    const cp1x = x1 + dx * 0.25 + perpX * curveAmount;
    const cp1y = y1 + dy * 0.25 + perpY * curveAmount;
    const cp2x = x1 + dx * 0.75 + perpX * curveAmount * 0.5;
    const cp2y = y1 + dy * 0.75 + perpY * curveAmount * 0.5;
    
    return {
      pathD: `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`,
      controlPoints: { cp1x, cp1y, cp2x, cp2y }
    };
  }, [x1, y1, x2, y2]);

  // Get colors based on attack type
  const strokeColor = 
    type === "malware" ? "hsl(0, 85%, 55%)" :
    type === "phishing" ? "hsl(280, 100%, 65%)" :
    "hsl(35, 100%, 55%)";
  
  const glowColor = 
    type === "malware" ? "hsl(0, 85%, 55%)" :
    type === "phishing" ? "hsl(280, 100%, 65%)" :
    "hsl(35, 100%, 55%)";

  const uniqueId = attack.id;

  return (
    <g>
      {/* Animated gradient definition */}
      <defs>
        <linearGradient id={`lineGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0" />
          <stop offset="20%" stopColor={strokeColor} stopOpacity="1" />
          <stop offset="80%" stopColor={strokeColor} stopOpacity="1" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
        </linearGradient>
        
        <filter id={`glow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Traveling dot gradient */}
        <radialGradient id={`dotGradient-${uniqueId}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="1" />
          <stop offset="50%" stopColor={strokeColor} stopOpacity="0.6" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow path */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={strokeColor}
        strokeWidth={6}
        strokeLinecap="round"
        opacity={0.15}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0, 0.2, 0.2, 0] 
        }}
        transition={{ duration: animationDuration, ease: "easeInOut" }}
        filter={`url(#glow-${uniqueId})`}
      />
      
      {/* Main path with gradient */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={`url(#lineGradient-${uniqueId})`}
        strokeWidth={2}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0, 1, 1, 0] 
        }}
        transition={{ duration: animationDuration, ease: "easeOut" }}
        filter={`url(#glow-${uniqueId})`}
      />

      {/* Thin core line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="white"
        strokeWidth={0.5}
        strokeLinecap="round"
        opacity={0.8}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0, 0.8, 0.8, 0] 
        }}
        transition={{ duration: animationDuration, ease: "easeOut" }}
      />

      {/* Source point - pulsing origin */}
      <motion.g>
        {/* Outer pulse ring */}
        <motion.circle
          cx={x1}
          cy={y1}
          r={8}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={1}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 2, 2.5], 
            opacity: [0, 0.5, 0] 
          }}
          transition={{ duration: animationDuration * 0.5, ease: "easeOut" }}
        />
        
        {/* Inner source dot */}
        <motion.circle
          cx={x1}
          cy={y1}
          r={3}
          fill={strokeColor}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1], 
            opacity: [0, 1, 0] 
          }}
          transition={{ duration: animationDuration, ease: "easeOut" }}
          filter={`url(#glow-${uniqueId})`}
        />
      </motion.g>

      {/* Traveling dot along path */}
      <motion.circle
        r={4}
        fill={`url(#dotGradient-${uniqueId})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: animationDuration, ease: "linear" }}
        filter={`url(#glow-${uniqueId})`}
      >
        <animateMotion
          dur={`${animationDuration}s`}
          path={pathD}
          fill="freeze"
        />
      </motion.circle>

      {/* Target point - impact effect */}
      <motion.g>
        {/* Multiple expanding rings */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={x2}
            cy={y2}
            r={5}
            fill="transparent"
            stroke={strokeColor}
            strokeWidth={1.5 - i * 0.5}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2 + i, 3 + i], 
              opacity: [0, 0.6 - i * 0.2, 0] 
            }}
            transition={{ 
              duration: animationDuration * 0.6, 
              delay: animationDuration * 0.5 + i * 0.1,
              ease: "easeOut" 
            }}
          />
        ))}
        
        {/* Target core */}
        <motion.circle
          cx={x2}
          cy={y2}
          r={4}
          fill={strokeColor}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 1.2], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: animationDuration * 0.5, 
            delay: animationDuration * 0.5,
            ease: "easeOut" 
          }}
          filter={`url(#glow-${uniqueId})`}
        />
        
        {/* White center flash */}
        <motion.circle
          cx={x2}
          cy={y2}
          r={2}
          fill="white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 0.3, 
            delay: animationDuration * 0.6,
            ease: "easeOut" 
          }}
        />
      </motion.g>
    </g>
  );
};
