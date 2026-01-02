import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const viewport = { once: true, amount: 0.25 };

export default function CloudSolution() {
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
            Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3"
          >
            Cloud Security
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-muted-foreground"
          >
            Secure cloud foundations that scale — identity, network segmentation, posture management, and incident
            readiness.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cloud Baseline",
                text: "Landing zone and guardrails for accounts/projects, IAM, logging, and key management.",
              },
              {
                title: "Posture & Detection",
                text: "Improve visibility and monitoring with practical alerting, triage, and response workflows.",
              },
              {
                title: "Secure Delivery",
                text: "Shift-left security for IaC and deployments without slowing engineering velocity.",
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
              <Link to="/services/cloud-security">Explore Cloud Security Service</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Request a Review</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
