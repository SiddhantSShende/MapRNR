import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ServiceModulesAccordion } from "@/components/ServiceModulesAccordion";

const mobileModules = [
  {
    id: "mobile-vapt",
    title: "Mobile Application VAPT (Android / iOS)",
    sections: {
      "What is it?":
        "A structured security assessment of your mobile application to identify and validate vulnerabilities across storage, authentication, session handling, APIs, cryptography, and runtime behavior—aligned with OWASP MASVS practices.",
      "Why it matters": [
        "Protects sensitive user and business data.",
        "Reduces risk of account takeover and unauthorized access.",
        "Improves security posture prior to audits and releases.",
      ],
      "Our methodology": [
        "Pre-engagement scoping and artifact collection",
        "Static analysis (SAST) and binary review",
        "Dynamic testing (DAST) and runtime validation",
        "API and network communication assessment",
        "Reporting with remediation guidance",
      ],
      Deliverables: [
        "Executive summary report",
        "Technical vulnerability report with severity and fixes",
        "Optional walkthrough session",
      ],
    },
  },
  {
    id: "source-code-review",
    title: "Mobile Source Code Review",
    sections: {
      "What is it?":
        "A manual + tool-assisted review of mobile application source code to detect insecure coding patterns, secrets exposure, weak crypto usage, insecure storage, and risky third-party SDK usage.",
      "Why it matters": [
        "Finds issues scanners may miss (logic flaws, unsafe patterns).",
        "Catches hardcoded keys, credentials, and sensitive data exposure.",
        "Reduces cost by fixing earlier in the development lifecycle.",
      ],
      Methodology: [
        "Access setup (code, build, configs, docs)",
        "Automated scanning + manual deep review",
        "Risk categorization and OWASP MASVS mapping",
        "Fix-oriented reporting and developer support",
      ],
      Deliverables: [
        "Findings report with evidence and remediation guidance",
        "Priority fixes list and secure coding recommendations",
      ],
    },
  },
];

export default function MobileAppSecurityService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Eye className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Mobile App Security</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              Mobile applications are prime targets for attackers due to the sensitive data they process. RNR's Mobile App Security service ensures your Android and iOS applications are tested against the latest OWASP MASVS standards.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-muted/30 border border-border/40 p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Mobile App Security Services</h3>
                <ServiceModulesAccordion modules={mobileModules} />
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
