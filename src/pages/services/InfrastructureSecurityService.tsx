import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, ArrowRight, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const infrastructureModules = [
  {
    id: "network-architecture-review",
    title: "Network Architecture Review",
    sections: {
      "What is it?":
        "A structured review of your network design (segmentation, trust boundaries, routing, remote access, and critical paths) to reduce exposure and improve resilience.",
      "Why It Matters": [
        "Overly flat networks increase blast radius during incidents.",
        "Weak trust boundaries enable lateral movement and privilege escalation.",
        "Unclear exposure paths and misrouted traffic can create hidden risks.",
      ],
      "Methodology of RNR": [
        "Understand business flows and crown‑jewel systems.",
        "Review diagrams, VLANs/subnets, routing, and segmentation controls.",
        "Validate remote access patterns and third‑party connectivity.",
        "Provide risk-ranked architecture recommendations aligned to operations.",
      ],
      Deliverables: [
        "Findings and risk summary",
        "Recommended segmentation and control improvements",
        "Prioritized remediation roadmap",
      ],
    },
  },
  {
    id: "firewall-rule-review",
    title: "Firewall Rule Review",
    sections: {
      "What is it?":
        "A review of firewall policies to remove risky, unused, overly permissive, or conflicting rules and to align access with least privilege.",
      "Why It Matters": [
        "Broad allow rules can expose critical services.",
        "Rule sprawl increases operational risk and troubleshooting time.",
        "Shadowed/duplicate rules can mask gaps and bypass intent.",
      ],
      "Methodology of RNR": [
        "Collect rulebase exports and validate scope/ownership.",
        "Analyze rules for permissiveness, overlaps, and stale entries.",
        "Map rules to business justification and traffic flows.",
        "Recommend cleanup, tightening, and governance controls.",
      ],
      Deliverables: [
        "Rule cleanup recommendations (remove/merge/reorder)",
        "Least‑privilege rule tuning list",
        "Governance suggestions for ongoing rule management",
      ],
    },
  },
  {
    id: "firewall-configuration-review",
    title: "Firewall Configuration Review",
    sections: {
      "What is it?":
        "A configuration health check of firewall platform settings (management access, logging, AAA, updates, hardening options, and security profiles) to ensure the control is operating securely.",
      "Why It Matters": [
        "Insecure management settings can lead to device compromise.",
        "Weak logging/monitoring reduces detection and response capability.",
        "Misconfigured profiles may allow known threats through.",
      ],
      "Methodology of RNR": [
        "Review management plane exposure and administrative controls.",
        "Validate logging, time sync, backups, and change controls.",
        "Assess hardening, patch level, and security profile usage.",
        "Provide prioritized configuration hardening guidance.",
      ],
      Deliverables: [
        "Configuration gaps and hardening checklist",
        "Logging/monitoring improvement recommendations",
        "Risk-ranked remediation actions",
      ],
    },
  },
  {
    id: "system-hardening-checks",
    title: "System Hardening Checks",
    sections: {
      "What is it?":
        "An assessment of servers and key platforms against secure configuration baselines to reduce attack surface and prevent common misconfiguration-driven breaches.",
      "Why It Matters": [
        "Default/weak configurations are frequently exploited.",
        "Missing controls can enable privilege escalation and persistence.",
        "Hardening improves reliability, audit readiness, and resilience.",
      ],
      "Methodology of RNR": [
        "Review OS/service configurations against recognized benchmarks.",
        "Validate access controls, patching, and security tooling coverage.",
        "Check critical services, ports, and exposed management interfaces.",
        "Provide fix-oriented hardening recommendations.",
      ],
      Deliverables: [
        "Hardening gaps and recommended settings",
        "Priority fixes for high-risk exposures",
        "Baseline guidance for standard builds",
      ],
    },
  },
  {
    id: "infrastructure-vapt",
    title: "Infrastructure VAPT",
    sections: {
      "What is it?":
        "Vulnerability Assessment and Penetration Testing for infrastructure (internal/external) to identify exploitable weaknesses in networked assets and validate real-world risk.",
      "Why It Matters": [
        "Finds exploitable vulnerabilities before attackers do.",
        "Validates impact and prioritization beyond scanner output.",
        "Supports compliance and continuous security improvement.",
      ],
      "Methodology of RNR": [
        "Define scope, asset inventory, and testing rules of engagement.",
        "Perform vulnerability discovery and manual verification.",
        "Exploit where approved to confirm impact and pathways.",
        "Deliver actionable remediation guidance and retest support.",
      ],
      Deliverables: [
        "Executive summary and technical findings",
        "Proof-of-concept (where applicable) and remediation steps",
        "Optional retest and closure verification",
      ],
    },
  },
  {
    id: "infrastructure-configuration-review",
    title: "Infrastructure Configuration Review",
    sections: {
      "What is it?":
        "A review of configurations across key infrastructure components (servers, databases, middleware, network devices) to identify security-impacting misconfigurations and enforce baselines.",
      "Why It Matters": [
        "Misconfigurations are a leading cause of breaches.",
        "Baseline drift introduces silent risk over time.",
        "Consistent configurations improve operational stability and auditability.",
      ],
      "Methodology of RNR": [
        "Collect configuration snapshots and baseline expectations.",
        "Check for insecure defaults, unnecessary services, and weak controls.",
        "Validate encryption, authN/authZ, logging, and exposure settings.",
        "Provide prioritized remediation aligned to feasibility.",
      ],
      Deliverables: [
        "Configuration gap report",
        "Baseline recommendations and quick wins",
        "Prioritized remediation plan",
      ],
    },
  },
];

export default function InfrastructureSecurityService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Server className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Infrastructure Security Services</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              Our Infrastructure Security Services help secure your core IT environment — including servers, networks, databases, endpoints, and firewalls — against evolving cyber threats.
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
                <h3 className="text-2xl font-bold text-foreground mb-6">Infrastructure Security Services</h3>
                <Accordion type="single" collapsible className="w-full">
                  {infrastructureModules.map((module) => (
                    <AccordionItem key={module.id} value={module.id}>
                      <AccordionTrigger className="text-left">
                        {module.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {Object.entries(module.sections).map(([heading, body]) => (
                            <div key={heading} className="space-y-2">
                              <div className="text-sm font-semibold text-foreground">{heading}</div>
                              {Array.isArray(body) ? (
                                <ul className="space-y-2">
                                  {body.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                      <span className="text-sm text-muted-foreground">{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
