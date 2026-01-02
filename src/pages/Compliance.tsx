import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const viewport = { once: true, amount: 0.25 };

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 text-sm text-muted-foreground space-y-2">{children}</div>
    </section>
  );
}

export default function Compliance() {
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
            Compliance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3"
          >
            Compliance Readiness
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-muted-foreground"
          >
            Practical guidance to help teams design controls, build evidence, and pass audits with confidence.
          </motion.p>

          <div className="mt-10 grid gap-6">
            <Section id="soc2" title="SOC 2">
              <p>Scope trust services criteria, define control ownership, and build an evidence calendar.</p>
              <p>Improve repeatability with policy + control mapping and a lightweight risk register.</p>
            </Section>

            <Section id="iso27001" title="ISO 27001">
              <p>Support ISMS setup: context, risk assessment, SoA, policies, and internal audit readiness.</p>
              <p>Focus on operational controls that match your environment (cloud, endpoints, apps, suppliers).</p>
            </Section>

            <Section id="gdpr" title="GDPR">
              <p>Assess data flows, lawful basis, DPIA needs, and vendor processing arrangements.</p>
              <p>Strengthen privacy-by-design in product and engineering workflows.</p>
            </Section>

            <Section id="hipaa" title="HIPAA">
              <p>Help align administrative, physical, and technical safeguards for healthcare systems.</p>
              <p>Build incident response, access controls, and audit trails suited for regulated data.</p>
            </Section>

            <Section id="pci" title="PCI DSS">
              <p>Reduce cardholder data scope, segment environments, and improve logging + monitoring.</p>
              <p>Prepare evidence and remediation plans for common gaps (IAM, vulnerability management, change control).</p>
            </Section>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link to="/services/governance-risk-compliance">Explore GRC Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Request Readiness Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
