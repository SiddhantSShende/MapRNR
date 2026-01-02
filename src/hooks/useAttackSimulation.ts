import { useState, useEffect, useCallback, useRef } from "react";
import {
  countries,
  Attack,
  AttackType,
  attackNames,
  Country,
} from "@/data/countries";

const generateAttack = (): Attack => {
  const types: AttackType[] = ["malware", "phishing", "exploit"];
  const type = types[Math.floor(Math.random() * types.length)];
  
  const sourceIndex = Math.floor(Math.random() * countries.length);
  let targetIndex = Math.floor(Math.random() * countries.length);
  while (targetIndex === sourceIndex) {
    targetIndex = Math.floor(Math.random() * countries.length);
  }

  const names = attackNames[type];
  const name = names[Math.floor(Math.random() * names.length)];

  return {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type,
    source: countries[sourceIndex],
    target: countries[targetIndex],
    timestamp: new Date(),
    name,
  };
};

export const useAttackSimulation = (rate: number = 4) => {
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [recentAttacks, setRecentAttacks] = useState<Attack[]>([]);
  const [totalAttacks, setTotalAttacks] = useState(8543355);
  const [activeAttacks, setActiveAttacks] = useState<Attack[]>([]);
  const [targetedCountries, setTargetedCountries] = useState<Map<string, number>>(new Map());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const addAttack = useCallback(() => {
    const newAttack = generateAttack();
    
    setAttacks((prev) => [...prev.slice(-100), newAttack]);
    setRecentAttacks((prev) => [newAttack, ...prev].slice(0, 10));
    setTotalAttacks((prev) => prev + 1);
    
    setActiveAttacks((prev) => [...prev, newAttack]);
    
    // Update targeted countries
    setTargetedCountries((prev) => {
      const newMap = new Map(prev);
      const count = newMap.get(newAttack.target.code) || 0;
      newMap.set(newAttack.target.code, count + 1);
      return newMap;
    });

    // Remove attack after animation
    setTimeout(() => {
      setActiveAttacks((prev) => prev.filter((a) => a.id !== newAttack.id));
    }, 3000);
  }, []);

  useEffect(() => {
    // Generate initial attacks
    for (let i = 0; i < 5; i++) {
      setTimeout(() => addAttack(), i * 200);
    }

    // Start continuous attack generation
    const interval = 1000 / rate;
    intervalRef.current = setInterval(addAttack, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [rate, addAttack]);

  const getTopTargetedCountries = useCallback((): { country: Country; count: number }[] => {
    const entries = Array.from(targetedCountries.entries());
    entries.sort((a, b) => b[1] - a[1]);
    
    return entries.slice(0, 5).map(([code, count]) => ({
      country: countries.find((c) => c.code === code) || countries[0],
      count,
    }));
  }, [targetedCountries]);

  return {
    attacks,
    recentAttacks,
    totalAttacks,
    activeAttacks,
    getTopTargetedCountries,
  };
};
