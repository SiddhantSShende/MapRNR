import { motion } from "framer-motion";

export const DailyChart = () => {
  // Generate random data for the chart
  const data = Array.from({ length: 14 }, () => Math.random() * 15 + 5);
  const maxValue = Math.max(...data);
  
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  return (
    <div className="gradient-card border border-border/50 rounded-lg p-4 backdrop-blur-sm">
      <h3 className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-4">
        Recent Daily Attacks
      </h3>
      
      <div className="flex items-end gap-1 h-24">
        {data.map((value, index) => {
          const height = (value / maxValue) * 100;
          return (
            <motion.div
              key={index}
              className="flex-1 relative group"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div 
                className="w-full h-full rounded-t bg-gradient-to-t from-cyber-green/60 to-cyber-green"
                style={{ boxShadow: '0 0 10px hsl(145 80% 45% / 0.3)' }}
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {dates[index]}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-between mt-8 text-[9px] text-muted-foreground">
        <span>20,000,000</span>
        <span className="flex-1" />
        <span>10,000,000</span>
        <span className="flex-1" />
        <span>5,000,000</span>
      </div>
    </div>
  );
};
