import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const viewport = { once: true, amount: 0.25 };

const posts = [
  {
    title: "Building a Practical Security Baseline for Fast-Growing Teams",
    description:
      "A pragmatic checklist for hardening identity, endpoints, and cloud controls without slowing delivery.",
    tags: ["Security Program", "Zero Trust"],
  },
  {
    title: "Readiness for SOC 2 & ISO 27001: Where to Start",
    description:
      "How to structure policies, evidence, and controls so audits become predictable and repeatable.",
    tags: ["Compliance", "GRC"],
  },
  {
    title: "Incident Response Tabletop: What Good Looks Like",
    description:
      "Run exercises that improve decision-making, coordination, and recovery time in real incidents.",
    tags: ["Incident Response", "Resilience"],
  },
];

export default function Blog() {
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
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3"
          >
            RNR Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-muted-foreground"
          >
            Short, practical notes on cybersecurity, risk, and compliance — written for builders and decision-makers.
          </motion.p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post, idx) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: idx * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6 shadow-sm shadow-primary/10"
              >
                <h2 className="font-display text-lg font-semibold text-foreground">{post.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{post.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-border/60 bg-background/60 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">Want a security roadmap?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your environment — we’ll recommend a practical plan.
              </p>
            </div>
            <Button asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
