import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const showcaseItems = [
  {
    number: '01',
    title: 'Zero Trust Architecture',
    description: 'Never trust, always verify. Our zero-trust framework ensures every access request is fully authenticated and authorized before granting access.',
    stats: [
      { value: '100%', label: 'Verification' },
      { value: 'Real-time', label: 'Analysis' },
      { value: 'Zero', label: 'Implicit Trust' },
    ],
  },
  {
    number: '02',
    title: 'Automated Incident Response',
    description: 'AI-powered threat detection and automated response workflows that neutralize threats before they impact your business.',
    stats: [
      { value: '<15min', label: 'Response Time' },
      { value: '99.9%', label: 'Accuracy' },
      { value: '24/7', label: 'Protection' },
    ],
  },
];

export default function ShowcaseSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={containerRef}
      id="showcase"
      className="py-24 lg:py-32 relative z-10 overflow-hidden border-y border-border/20 bg-gradient-to-b from-muted/40 via-background/60 to-muted/30"
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-secondary/15 to-transparent"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          style={{ y: y1 }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {showcaseItems.map((item, index) => (
          <ShowcaseItem key={item.number} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function ShowcaseItem({ item, index }: { item: typeof showcaseItems[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } items-center gap-10 md:gap-12 lg:gap-20 ${index > 0 ? 'mt-16 md:mt-24 lg:mt-32' : ''}`}
    >
      {/* Content side */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Number */}
        <motion.span
          className="inline-block text-7xl md:text-8xl font-bold text-primary/20 font-mono mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {item.number}
        </motion.span>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-8 max-w-lg">
          {item.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-6">
          {item.stats.map((stat, statIndex) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + statIndex * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold font-mono text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Visual side - Security visualization */}
      <motion.div
        className="flex-1 relative"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative aspect-square max-w-md mx-auto">
          {/* Animated security rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {/* Ring nodes */}
            {[0, 90, 180, 270].map((deg) => (
              <div
                key={deg}
                className="absolute w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${50 + 50 * Math.cos((deg * Math.PI) / 180)}%`,
                  top: `${50 + 50 * Math.sin((deg * Math.PI) / 180)}%`,
                }}
              />
            ))}
          </motion.div>
          
          <motion.div
            className="absolute inset-8 rounded-full border border-secondary/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
          
          <motion.div
            className="absolute inset-16 rounded-full border border-primary/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          {/* Center glow */}
          <div className="absolute inset-20 rounded-full bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/15 blur-xl" />
          
          {/* Center shield icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-20 h-20 rounded-xl bg-background/80 backdrop-blur-xl border border-primary/30 shadow-sm shadow-primary/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </motion.div>

          {/* Data flow indicators */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: -4,
                marginTop: -4,
              }}
              animate={{
                x: [0, Math.cos(((i * 120) * Math.PI) / 180) * 100, 0],
                y: [0, Math.sin(((i * 120) * Math.PI) / 180) * 100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}