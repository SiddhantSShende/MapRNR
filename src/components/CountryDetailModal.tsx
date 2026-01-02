import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, AlertTriangle, Activity, TrendingUp, Clock } from "lucide-react";
import { Country, attackTypes, AttackType } from "@/data/countries";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar } from "recharts";
import { useMemo } from "react";

interface CountryDetailModalProps {
  country: Country | null;
  isOpen: boolean;
  onClose: () => void;
  attackHistory: { type: AttackType; count: number }[];
}

// Generate mock historical data
const generateHistoryData = (countryCode: string) => {
  const seed = countryCode.charCodeAt(0) + countryCode.charCodeAt(1);
  const data = [];
  for (let i = 23; i >= 0; i--) {
    const hour = new Date();
    hour.setHours(hour.getHours() - i);
    data.push({
      time: hour.toLocaleTimeString([], { hour: "2-digit" }),
      attacks: Math.floor(Math.random() * 500 + seed * 10) % 800 + 50,
      blocked: Math.floor(Math.random() * 400 + seed * 8) % 600 + 30,
    });
  }
  return data;
};

// Generate attack type distribution
const generateAttackDistribution = () => {
  return [
    { type: "Malware", value: Math.floor(Math.random() * 40) + 20, fill: "hsl(0, 85%, 55%)" },
    { type: "Phishing", value: Math.floor(Math.random() * 30) + 15, fill: "hsl(280, 100%, 65%)" },
    { type: "Exploit", value: Math.floor(Math.random() * 25) + 10, fill: "hsl(35, 100%, 55%)" },
    { type: "DDoS", value: Math.floor(Math.random() * 20) + 10, fill: "hsl(190, 100%, 50%)" },
    { type: "Ransomware", value: Math.floor(Math.random() * 15) + 5, fill: "hsl(45, 100%, 55%)" },
  ];
};

export const CountryDetailModal = ({
  country,
  isOpen,
  onClose,
  attackHistory,
}: CountryDetailModalProps) => {
  const historyData = useMemo(() => 
    country ? generateHistoryData(country.code) : [], 
    [country]
  );
  
  const attackDistribution = useMemo(() => generateAttackDistribution(), [country]);
  
  const riskScore = useMemo(() => {
    if (!country) return 0;
    const seed = country.code.charCodeAt(0) + country.code.charCodeAt(1);
    return Math.min(95, Math.floor((seed % 50) + 45));
  }, [country]);

  const riskLevel = riskScore >= 75 ? "CRITICAL" : riskScore >= 50 ? "HIGH" : "MEDIUM";
  const riskColor = riskScore >= 75 ? "text-cyber-red" : riskScore >= 50 ? "text-cyber-orange" : "text-cyber-yellow";

  if (!country) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh] bg-card/95 backdrop-blur-xl border-primary/30 p-0 overflow-y-auto">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-6 border-b border-border/50">
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div className="text-5xl">{country.flag}</div>
              <div>
                <DialogTitle className="font-display text-2xl text-foreground">
                  {country.name}
                </DialogTitle>
                <p className="text-sm text-muted-foreground font-mono mt-1">
                  Threat Intelligence Dashboard
                </p>
              </div>
            </div>
          </DialogHeader>
          
          {/* Risk Score Badge */}
          <div className="absolute top-6 right-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center p-4 rounded-xl bg-background/80 border border-border/50"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Risk Score</span>
              <span className={`font-display text-3xl font-bold ${riskColor}`}>
                {riskScore}
              </span>
              <span className={`text-xs font-bold mt-1 ${riskColor}`}>{riskLevel}</span>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-border/30">
          {[
            { label: "Total Attacks", value: Math.floor(Math.random() * 10000) + 5000, icon: AlertTriangle, color: "text-cyber-red" },
            { label: "Blocked", value: Math.floor(Math.random() * 8000) + 4000, icon: Shield, color: "text-cyber-green" },
            { label: "Active Threats", value: Math.floor(Math.random() * 50) + 10, icon: Activity, color: "text-cyber-orange" },
            { label: "Trend", value: "+12%", icon: TrendingUp, color: "text-primary" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/30"
            >
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <div>
                <div className={`font-display text-xl font-bold ${stat.color}`}>
                  {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Attack History Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-lg bg-muted/20 border border-border/30"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <h3 className="font-display text-sm font-semibold text-foreground">24-Hour Attack History</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={historyData}>
                <defs>
                  <linearGradient id="attackGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(0, 85%, 55%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(0, 85%, 55%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="blockedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(145, 80%, 45%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(145, 80%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="time" 
                  stroke="hsl(200, 20%, 40%)" 
                  fontSize={10}
                  tickLine={false}
                />
                <YAxis 
                  stroke="hsl(200, 20%, 40%)" 
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 25%, 10%)",
                    border: "1px solid hsl(220, 20%, 20%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="attacks"
                  stroke="hsl(0, 85%, 55%)"
                  fill="url(#attackGradient)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="blocked"
                  stroke="hsl(145, 80%, 45%)"
                  fill="url(#blockedGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyber-red" />
                <span className="text-xs text-muted-foreground">Attacks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyber-green" />
                <span className="text-xs text-muted-foreground">Blocked</span>
              </div>
            </div>
          </motion.div>

          {/* Attack Type Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-muted/20 border border-border/30"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-primary" />
              <h3 className="font-display text-sm font-semibold text-foreground">Attack Type Distribution</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={attackDistribution} layout="vertical">
                <XAxis type="number" stroke="hsl(200, 20%, 40%)" fontSize={10} tickLine={false} />
                <YAxis 
                  type="category" 
                  dataKey="type" 
                  stroke="hsl(200, 20%, 40%)" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                  width={70}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 25%, 10%)",
                    border: "1px solid hsl(220, 20%, 20%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 border-t border-border/30"
        >
          <h3 className="font-display text-sm font-semibold text-foreground mb-4">Recent Threat Activity</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { time: "2 min ago", type: "malware", name: "Trojan.GenericKD.47892" },
              { time: "5 min ago", type: "phishing", name: "Credential Harvester" },
              { time: "12 min ago", type: "exploit", name: "CVE-2024-3271 RCE" },
              { time: "18 min ago", type: "malware", name: "Ransomware.LockBit" },
              { time: "24 min ago", type: "phishing", name: "Business Email Compromise" },
              { time: "31 min ago", type: "exploit", name: "SQL Injection Attack" },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border/30"
              >
                <div 
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "malware" ? "bg-cyber-red" :
                    activity.type === "phishing" ? "bg-cyber-purple" :
                    "bg-cyber-orange"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-foreground truncate">{activity.name}</div>
                  <div className="text-[10px] text-muted-foreground">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
