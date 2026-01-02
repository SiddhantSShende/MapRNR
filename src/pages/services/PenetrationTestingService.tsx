import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const viewport = { once: true, amount: 0.25 };

export default function PenetrationTestingService() {
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
            Penetration Testing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-muted-foreground"
          >
            Identify exploitable weaknesses across applications, infrastructure, and cloud environments, and leave
            your team with clear remediation guidance.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Scoping",
                text: "Define targets, rules of engagement, and risk boundaries.",
              },
              {
                title: "Testing",
                text: "Manual + tool-assisted testing aligned to modern attack paths.",
              },
              {
                title: "Remediation Support",
                text: "Fix prioritization and verification to close gaps quickly.",
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
              <Link to="/contact">Request a Test</Link>
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
