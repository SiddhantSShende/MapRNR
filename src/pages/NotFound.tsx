import { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const NotFound = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const digitsRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useLayoutEffect(() => {
    if (!containerRef.current || !digitsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        digitsRef.current?.querySelectorAll("span"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "elastic.out(1, 0.7)",
          stagger: 0.08,
        }
      );

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.1,
          opacity: 0.9,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen gradient-cyber flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40 scanline" />
      <div className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-cyan-400/30 blur-3xl" ref={glowRef} />
      <div className="relative z-10 max-w-xl text-center space-y-8">
        <div
          ref={digitsRef}
          className="flex justify-center gap-3 font-display text-[72px] md:text-[96px] font-bold tracking-[0.2em] text-primary drop-shadow-lg"
        >
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
          The page you’re looking for drifted off the map. Let’s guide you back to
          safer territory.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium shadow-lg shadow-primary/40 hover:bg-primary/90 transition-colors"
          >
            Go to Home
          </Link>
          <Link
            to="/threat-map"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 border border-border/60 bg-background/60 text-sm font-medium text-foreground hover:border-primary/60 hover:bg-primary/10 transition-colors"
          >
            View Threat Map
          </Link>
        </div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Error code: 404 • Route: {location.pathname}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
