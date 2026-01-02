import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const viewport = { once: true, amount: 0.25 };

export default function ThreatDetectionService() {
  return (
    <PageLayout>
      <section className="py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="text-sm font-mono uppercase tracking-[0.2em] text-primary"
          >
            Service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3"
          >
            Threat Detection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-muted-foreground"
          >
            Improve visibility and reduce response time with detection use-cases, alert tuning, and operational
            playbooks aligned to your environment.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Use-case Design",
                text: "Prioritize detections based on real threats and business impact.",
              },
              {
                title: "Tuning & Noise Reduction",
                text: "Make alerts actionable with rules refinement and routing.",
              },
              {
                title: "Response Playbooks",
                text: "Define steps, owners, and escalation for consistent handling.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6 shadow-sm shadow-primary/10"
              >
                <h2 className="font-display text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/services">Browse All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
