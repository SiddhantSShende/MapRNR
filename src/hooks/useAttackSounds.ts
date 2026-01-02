import { useCallback, useRef, useEffect, useState } from "react";
import { AttackType } from "@/data/countries";

interface UseAttackSoundsOptions {
  enabled?: boolean;
  volume?: number;
}

// AudioContext singleton for better performance
let audioContextInstance: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioContextInstance) {
    audioContextInstance = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContextInstance;
};

export const useAttackSounds = ({ enabled = false, volume = 0.3 }: UseAttackSoundsOptions = {}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);
  const [currentVolume, setCurrentVolume] = useState(volume);
  const lastPlayTime = useRef(0);
  const minInterval = 150; // Minimum ms between sounds

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = "sine") => {
    if (!isEnabled) return;
    
    const now = Date.now();
    if (now - lastPlayTime.current < minInterval) return;
    lastPlayTime.current = now;

    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Configure filter for softer sound
      filter.type = "lowpass";
      filter.frequency.value = 2000;
      filter.Q.value = 1;

      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      // Envelope for smooth attack/decay
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(currentVolume * 0.15, ctx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback failed:", e);
    }
  }, [isEnabled, currentVolume]);

  const playAttackSound = useCallback((attackType: AttackType) => {
    if (!isEnabled) return;

    // Different frequencies and patterns for each attack type
    switch (attackType) {
      case "malware":
        // Deep threatening tone
        playTone(180, 0.3, "sawtooth");
        setTimeout(() => playTone(150, 0.2, "sawtooth"), 100);
        break;
      case "phishing":
        // Quick alert blips
        playTone(800, 0.1, "sine");
        setTimeout(() => playTone(600, 0.15, "sine"), 80);
        break;
      case "exploit":
        // Sharp warning sound
        playTone(440, 0.15, "square");
        setTimeout(() => playTone(550, 0.1, "square"), 60);
        break;
      default:
        playTone(400, 0.2, "sine");
    }
  }, [isEnabled, playTone]);

  const playImpactSound = useCallback(() => {
    if (!isEnabled) return;
    
    try {
      const ctx = getAudioContext();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Create impact sound with noise
      const bufferSize = ctx.sampleRate * 0.1;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
      }

      const source = ctx.createBufferSource();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "lowpass";
      filter.frequency.value = 400;

      source.buffer = buffer;
      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      gainNode.gain.setValueAtTime(currentVolume * 0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      source.start();
    } catch (e) {
      console.warn("Impact sound failed:", e);
    }
  }, [isEnabled, currentVolume]);

  const toggleSound = useCallback(() => {
    setIsEnabled(prev => !prev);
  }, []);

  const setVolume = useCallback((vol: number) => {
    setCurrentVolume(Math.max(0, Math.min(1, vol)));
  }, []);

  return {
    isEnabled,
    volume: currentVolume,
    playAttackSound,
    playImpactSound,
    toggleSound,
    setVolume,
  };
};
