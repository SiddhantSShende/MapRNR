import { motion } from "framer-motion";
import { Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type TimeRange = "1h" | "6h" | "24h" | "7d" | "30d";

interface TimeRangeFilterProps {
  value: TimeRange;
  onChange: (range: TimeRange) => void;
}

const timeRanges: { value: TimeRange; label: string }[] = [
  { value: "1h", label: "Last Hour" },
  { value: "6h", label: "Last 6 Hours" },
  { value: "24h", label: "Last 24 Hours" },
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
];

export const TimeRangeFilter = ({ value, onChange }: TimeRangeFilterProps) => {
  const currentRange = timeRanges.find(r => r.value === value) || timeRanges[2];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/10 gap-2 font-mono text-xs"
        >
          <Clock className="w-3.5 h-3.5 text-primary" />
          <span>{currentRange.label}</span>
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-card/95 backdrop-blur-xl border-border/50 min-w-[160px]"
      >
        {timeRanges.map((range) => (
          <DropdownMenuItem
            key={range.value}
            onClick={() => onChange(range.value)}
            className={`font-mono text-xs cursor-pointer ${
              value === range.value 
                ? "text-primary bg-primary/10" 
                : "text-foreground hover:text-primary"
            }`}
          >
            <motion.div
              initial={false}
              animate={{ x: value === range.value ? 4 : 0 }}
              className="flex items-center gap-2"
            >
              {value === range.value && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
              {range.label}
            </motion.div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
