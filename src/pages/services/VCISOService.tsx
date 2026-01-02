import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ServiceModulesAccordion } from "@/components/ServiceModulesAccordion";

const vcisoModules = [
  {
    id: "security-leadership",
    title: "Security Leadership & Governance",
    sections: {
      "What is it?":
        "Senior cybersecurity leadership delivered as a service—helping you establish governance, decision-making, and accountability without needing a full-time in-house CISO.",
      "Why it matters": [
        "Security programs fail without clear ownership and governance.",
        "Leaders need a consistent view of risk and priorities.",
        "Well-defined governance reduces reactive, ad-hoc security decisions.",
      ],
      "Methodology of RNR": [
        "Understand business objectives, threat landscape, and risk appetite.",
        "Define governance structure, roles, and operating cadence.",
        "Establish policies and standards aligned to business realities.",
      ],
      Deliverables: [
        "Governance operating model (cadence, roles, escalation)",
        "Policy/standard recommendations and ownership model",
        "Quarterly priorities and risk focus areas",
      ],
    },
  },
  {
    id: "roadmap",
    title: "Cybersecurity Strategy & Roadmap",
    sections: {
      "What is it?":
        "A practical, phased security roadmap that aligns initiatives to your business goals, risk exposure, and budget—so progress is measurable and sustainable.",
      "Why it matters": [
        "Avoids scattered tooling and unprioritized security work.",
        "Creates a clear plan leadership can fund and track.",
        "Improves security maturity systematically over time.",
      ],
      "Methodology of RNR": [
        "Assess current posture across people/process/technology.",
        "Identify gaps and risk hot-spots.",
        "Create a prioritized roadmap with quick wins and long-term initiatives.",
      ],
      Deliverables: [
        "Strategy brief and target-state guidance",
        "Prioritized roadmap and milestones",
        "KPIs/KRIs and tracking recommendations",
      ],
    },
  },
  {
    id: "risk-compliance",
    title: "Risk & Compliance Oversight",
    sections: {
      "What is it?":
        "Ongoing support to manage cyber risk and maintain compliance readiness—covering risk registers, control monitoring, and audit preparation.",
      "Why it matters": [
        "Reduces audit surprises and control drift.",
        "Improves visibility into priority risks and remediation status.",
        "Aligns security controls to regulatory and contractual expectations.",
      ],
      "Methodology of RNR": [
        "Maintain risk register and remediation tracking.",
        "Review control effectiveness and evidence readiness.",
        "Support internal/external audit coordination and action closure.",
      ],
      Deliverables: [
        "Risk register governance and periodic reporting",
        "Audit readiness checklists and evidence approach",
        "Remediation tracking and closure verification",
      ],
    },
  },
  {
    id: "board-reporting",
    title: "Executive & Board Reporting",
    sections: {
      "What is it?":
        "Clear, decision-ready reporting that translates security posture into business risk—so leadership can make informed investment and priority decisions.",
      "Why it matters": [
        "Leaders need actionable insight, not raw technical metrics.",
        "Creates alignment between business priorities and security spend.",
        "Helps track maturity improvements over time.",
      ],
      "Methodology of RNR": [
        "Define KPIs/KRIs aligned to business and risk appetite.",
        "Build concise dashboards and narrative reporting.",
        "Review trends, key incidents, and remediation progress.",
      ],
      Deliverables: [
        "Executive security dashboard recommendations",
        "Monthly/quarterly leadership reporting pack",
        "Priority actions and decisions required",
      ],
    },
  },
  {
    id: "incident-readiness",
    title: "Incident Readiness & Response Advisory",
    sections: {
      "What is it?":
        "Preparedness planning to improve how your organization detects, responds to, and recovers from incidents—through playbooks, roles, and exercises.",
      "Why it matters": [
        "Reduces downtime and impact when incidents occur.",
        "Improves coordination across IT, security, legal, and business teams.",
        "Strengthens learning loops via post-incident reviews.",
      ],
      "Methodology of RNR": [
        "Review current IR processes and tooling.",
        "Create or refine response playbooks and escalation.",
        "Run tabletop simulations and improve based on outcomes.",
      ],
      Deliverables: [
        "Incident response playbooks and escalation matrix",
        "Tabletop exercise plan and improvement actions",
        "Post-incident review checklist and metrics",
      ],
    },
  },
];

export default function VCISOService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Shield className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Virtual CISO (vCISO) Services</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              A vCISO (Virtual Chief Information Security Officer) is an outsourced cybersecurity expert who acts as a senior security advisor to your organization—delivering strategic leadership, risk management, and governance without the cost of a full-time, in-house CISO.
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
                <h3 className="text-2xl font-bold text-foreground mb-6">vCISO Services</h3>
                <ServiceModulesAccordion modules={vcisoModules} />
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
