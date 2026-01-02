import { motion } from "framer-motion";
import { Volume2, VolumeX, Volume1 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SoundControlProps {
  isEnabled: boolean;
  volume: number;
  onToggle: () => void;
  onVolumeChange: (volume: number) => void;
}

export const SoundControl = ({
  isEnabled,
  volume,
  onToggle,
  onVolumeChange,
}: SoundControlProps) => {
  const VolumeIcon = !isEnabled ? VolumeX : volume > 0.5 ? Volume2 : Volume1;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 gap-2 font-mono text-xs ${
            isEnabled ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <VolumeIcon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Sound</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        align="end" 
        className="w-48 bg-card/95 backdrop-blur-xl border-border/50 p-4"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-foreground">Attack Sounds</span>
            <motion.button
              onClick={onToggle}
              className={`relative w-10 h-5 rounded-full transition-colors ${
                isEnabled ? "bg-primary" : "bg-muted"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-0.5 w-4 h-4 rounded-full bg-foreground"
                animate={{ left: isEnabled ? "calc(100% - 18px)" : "2px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>
          
          {isEnabled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Volume</span>
                <span className="text-xs font-mono text-primary">
                  {Math.round(volume * 100)}%
                </span>
              </div>
              <Slider
                value={[volume * 100]}
                onValueChange={([val]) => onVolumeChange(val / 100)}
                max={100}
                step={1}
                className="w-full"
              />
            </motion.div>
          )}
          
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            Audio cues play when new attacks are detected on the map.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
