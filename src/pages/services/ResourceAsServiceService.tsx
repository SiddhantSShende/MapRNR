import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ServiceModulesAccordion } from "@/components/ServiceModulesAccordion";

const resourceModules = [
  {
    id: "grc-specialists",
    title: "GRC Specialists (ISO 27001, sector guidelines, audits)",
    sections: {
      "What is it?":
        "On-demand GRC professionals who help you build and run governance, risk, and compliance activities—policies, risk registers, audits, and continuous control monitoring.",
      "Why it matters": [
        "Maintains audit readiness and evidence discipline.",
        "Improves risk visibility and remediation tracking.",
        "Accelerates governance programs without long hiring cycles.",
      ],
      "How we work": [
        "Define scope: frameworks, audit timelines, and stakeholder needs.",
        "Embed with your team to operate documentation and controls.",
        "Deliver measurable outputs and regular status reporting.",
      ],
      "Typical outputs": [
        "Policy and SOP updates",
        "Risk register maintenance",
        "Audit preparation and evidence packs",
      ],
    },
  },
  {
    id: "security-analysts",
    title: "Information Security Analysts",
    sections: {
      "What is it?":
        "Security analysts who support day-to-day security operations—triage, monitoring support, investigations, and operational hygiene.",
      "Why it matters": [
        "Improves response speed and consistency.",
        "Reduces operational backlog for internal teams.",
        "Strengthens routine security discipline (patching, reviews, reporting).",
      ],
      "How we work": [
        "Align on tooling and workflows (tickets, alerts, escalation).",
        "Operate with defined SLAs and reporting cadence.",
        "Coordinate closely with IT and leadership for closure.",
      ],
      "Typical outputs": [
        "Triage and investigation notes",
        "Operational reports and trends",
        "Runbooks and process improvements",
      ],
    },
  },
  {
    id: "security-engineers",
    title: "Cybersecurity Engineers (SIEM, EDR, Firewall, etc.)",
    sections: {
      "What is it?":
        "Hands-on engineers to implement and tune security controls—log onboarding, detection content, endpoint protection, firewall hygiene, and integrations.",
      "Why it matters": [
        "Makes security tooling effective—not just deployed.",
        "Improves detection coverage and reduces alert noise.",
        "Accelerates hardening and integration work.",
      ],
      "How we work": [
        "Assess current tooling maturity and gaps.",
        "Implement prioritized improvements with change control.",
        "Handover runbooks and documentation for sustainment.",
      ],
      "Typical outputs": [
        "Use-case coverage and tuning plan",
        "Integration playbooks and runbooks",
        "Configuration baselines and hardening changes",
      ],
    },
  },
  {
    id: "vapt-testers",
    title: "VAPT & Application Security Testers",
    sections: {
      "What is it?":
        "Skilled testers to support assessment cycles across applications and infrastructure—helping identify, validate, and prioritize security issues with fix guidance.",
      "Why it matters": [
        "Scales security testing without slowing delivery.",
        "Improves vulnerability triage and remediation outcomes.",
        "Enables planned testing cycles and retesting.",
      ],
      "How we work": [
        "Define scope, rules of engagement, and test plan.",
        "Execute testing with clear reporting and proof where needed.",
        "Support remediation validation and retesting.",
      ],
      "Typical outputs": [
        "Technical findings and remediation guidance",
        "Executive summary for leadership",
        "Retest/closure verification notes",
      ],
    },
  },
  {
    id: "compliance-consultants",
    title: "Compliance & Risk Consultants",
    sections: {
      "What is it?":
        "Consultants who help align controls, documentation, and operations to your compliance needs while keeping risk management practical.",
      "Why it matters": [
        "Reduces compliance-driven friction by creating clear processes.",
        "Improves leadership visibility into risk posture.",
        "Supports audits and continuous compliance operations.",
      ],
      "How we work": [
        "Map requirements to controls and operational ownership.",
        "Build evidence and reporting mechanisms.",
        "Run periodic reviews and improvement planning.",
      ],
      "Typical outputs": [
        "Control mapping and evidence guidance",
        "Governance and reporting cadence",
        "Improvement roadmap and prioritization",
      ],
    },
  },
];

export default function ResourceAsServiceService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Server className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Resource as a Service</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              RNR Consulting offers skilled cybersecurity professionals on a flexible, contract-based model — from Security Analysts and GRC experts to VAPT specialists and vCISOs.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            <div className="space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-muted/30 border border-border/40 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Resource as a Service</h3>
                <ServiceModulesAccordion modules={resourceModules} />
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild><Link to="/contact">Get Started <ArrowRight className="w-4 h-4" /></Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/services">View All Services</Link></Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
