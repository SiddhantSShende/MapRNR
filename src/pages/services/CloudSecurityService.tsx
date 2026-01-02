import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ServiceModulesAccordion } from "@/components/ServiceModulesAccordion";

const cloudModules = [
  {
    id: "posture-review",
    title: "Cloud Security Posture Review (AWS / Azure / GCP)",
    sections: {
      "What is it?":
        "A structured review of your cloud environment to identify misconfigurations, risky exposures, and control gaps across identity, networking, compute, storage, logging, and monitoring.",
      "Why it matters": [
        "Misconfigurations can silently expose data and services.",
        "Visibility gaps reduce detection and response speed.",
        "Baseline drift increases risk as teams ship faster.",
      ],
      "Methodology of RNR": [
        "Scope and inventory critical cloud accounts/subscriptions/projects.",
        "Review IAM, network controls, storage permissions, and security services.",
        "Validate logging, alerting, and incident readiness.",
        "Deliver risk-ranked findings with fix-first guidance.",
      ],
      Deliverables: [
        "Cloud posture findings report",
        "Prioritized remediation backlog",
        "Baseline recommendations for secure-by-default cloud",
      ],
    },
  },
  {
    id: "iam-hardening",
    title: "Identity & Access Management (IAM) Hardening",
    sections: {
      "What is it?":
        "Hardening cloud identity and access controls to enforce least privilege, reduce credential risk, and prevent unauthorized access to critical services and data.",
      "Why it matters": [
        "Identity is a primary attack path in cloud environments.",
        "Over-privileged roles increase blast radius.",
        "Weak MFA and key hygiene lead to account compromise.",
      ],
      "Methodology of RNR": [
        "Review roles, policies, groups, and service identities.",
        "Tighten permissions and remove unused/stale access.",
        "Recommend MFA, key rotation, and access governance.",
        "Validate break-glass and privileged access workflows.",
      ],
      Deliverables: [
        "Least-privilege recommendations",
        "Access hygiene checklist (keys, MFA, privileged workflows)",
        "Governance guidance for ongoing access reviews",
      ],
    },
  },
  {
    id: "secure-architecture",
    title: "Secure Cloud Architecture Design",
    sections: {
      "What is it?":
        "Security-focused architecture guidance to ensure workloads are designed with strong trust boundaries, secure networking, resilient controls, and secure data handling patterns.",
      "Why it matters": [
        "Good architecture reduces recurring security debt.",
        "Segmentation and secure-by-default patterns reduce incident impact.",
        "Design choices determine long-term cost and resilience.",
      ],
      "Methodology of RNR": [
        "Review target architecture and key data flows.",
        "Define network and identity trust boundaries.",
        "Recommend secure patterns for secrets, encryption, and logging.",
        "Provide practical reference controls aligned to your delivery model.",
      ],
      Deliverables: [
        "Architecture review notes and risk summary",
        "Recommended reference architecture controls",
        "Implementation roadmap aligned to delivery priorities",
      ],
    },
  },
  {
    id: "cloud-vapt",
    title: "Cloud Infrastructure VAPT",
    sections: {
      "What is it?":
        "Vulnerability assessment and penetration testing focused on cloud-exposed services and cloud infrastructure pathways to validate real-world risk.",
      "Why it matters": [
        "Validates exploitable risk beyond scanner output.",
        "Finds exposure paths across cloud networking and identity.",
        "Improves resilience through fix verification and retesting.",
      ],
      "Methodology of RNR": [
        "Define scope and rules of engagement for internal/external testing.",
        "Perform discovery, verification, and (approved) exploitation.",
        "Provide fix guidance and optional retesting support.",
      ],
      Deliverables: [
        "Executive and technical VAPT report",
        "Proof-of-concept (where applicable) and remediation steps",
        "Optional retest and closure validation",
      ],
    },
  },
];

export default function CloudSecurityService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Server className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Cloud Security</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              As organizations move to the cloud, so do the threats. RNR's Cloud Security services ensure your cloud infrastructure is secure, compliant, and resilient. We help identify misconfigurations, enforce access controls, secure APIs, and protect data across platforms like AWS, Azure, and GCP.
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
                <h3 className="text-2xl font-bold text-foreground mb-6">Cloud Security Services</h3>
                <ServiceModulesAccordion modules={cloudModules} />
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
