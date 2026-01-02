import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ServiceModulesAccordion,
  type ServiceModule,
} from "@/components/ServiceModulesAccordion";

const applicationModules: ServiceModule[] = [
  {
    id: "application-vapt",
    title: "Application VAPT (Web & Mobile)",
    sections: {
      "What it is":
        "A combined Vulnerability Assessment (VA) and Penetration Test (PT) to find and validate weaknesses across your application surface—authentication, sessions, data handling, business logic, and integrations.",
      "Why it matters": [
        "Reduces breach risk by validating real exploitability, not just scanner findings",
        "Protects customer data, revenue flows, and critical workflows",
        "Supports audit and assurance needs (ISO 27001, PCI DSS, SOC 2, etc.)",
      ],
      Methodology: [
        "Scope & threat model aligned to your architecture and risk appetite",
        "Automated + manual testing mapped to OWASP Top 10 / MASVS where applicable",
        "Business-logic and authorization testing for real-world abuse cases",
        "Clear risk ratings, proof-of-concept, and remediation guidance",
      ],
      Deliverables: [
        "Executive summary and technical report with evidence",
        "Prioritized remediation plan with recommendations",
        "Optional re-test to validate fixes",
      ],
    },
  },
  {
    id: "api-security",
    title: "API Security Assessment",
    sections: {
      "What it is":
        "Security testing for REST/GraphQL and internal APIs to prevent broken authorization, data leaks, injection, insecure deserialization, and abuse of business logic.",
      "Why it matters": [
        "APIs expose backend data and core business functionality",
        "Shadow/legacy endpoints often bypass modern controls",
        "A single insecure endpoint can enable account takeover or large-scale data exposure",
      ],
      Methodology: [
        "Inventory endpoints, auth flows, roles, and sensitive data paths",
        "Test against OWASP API Top 10 (BOLA/BFLA, auth, rate limits, injection, etc.)",
        "Validate token/session handling, CORS, and error/metadata leakage",
        "Assess abuse scenarios (enumeration, replay, mass assignment)",
      ],
      Deliverables: [
        "OWASP API Top 10 mapping with severity ratings",
        "Proof-of-concept and step-by-step remediation",
        "Optional post-fix validation",
      ],
    },
  },
  {
    id: "source-code-review",
    title: "Source Code Review",
    sections: {
      "What it is":
        "A deep review of your codebase (manual + tooling) to identify security flaws, insecure patterns, and high-risk logic paths before attackers do.",
      "Why it matters": [
        "Finds issues scanners and black-box testing can miss",
        "Improves engineering quality and secure-by-design practices",
        "Reduces cost of fixing issues late in the SDLC",
      ],
      Methodology: [
        "Identify critical modules (auth, payments, admin, data processing)",
        "Perform automated checks for insecure patterns and dependency risks",
        "Manual review for authorization, crypto usage, secrets, and business logic",
        "Report with actionable fixes and validation guidance",
      ],
      Deliverables: [
        "Findings report with risk ratings and remediation steps",
        "OWASP mapping where relevant",
        "Developer handoff session (optional)",
      ],
    },
  },
  {
    id: "secure-sdlc",
    title: "Secure SDLC / DevSecOps Integration",
    sections: {
      "What it is":
        "Embedding security into planning, development, CI/CD, and release so vulnerabilities are prevented early and caught continuously.",
      "Why it matters": [
        "Shifts security left and reduces rework",
        "Creates repeatable controls for releases and changes",
        "Improves compliance readiness with measurable evidence",
      ],
      Methodology: [
        "Define secure requirements, threat modeling, and secure coding standards",
        "Introduce SAST/SCA/secret scanning and IaC checks in CI",
        "Establish security gates, exception workflow, and KPIs",
        "Enable secure code review and release hardening practices",
      ],
      Deliverables: [
        "Security controls blueprint and CI/CD security recommendations",
        "Pipeline guardrails and reporting approach",
        "Secure coding and review guidance tailored to your stack",
      ],
    },
  },
  {
    id: "thick-client-vapt",
    title: "Thick Client VAPT",
    sections: {
      "What it is":
        "Specialized testing for desktop applications, including local storage, client-side processing, update mechanisms, and network communications.",
      "Why it matters": [
        "Desktop apps often store sensitive data or tokens locally",
        "Weak client-server validation can enable fraud or privilege escalation",
        "Insecure update channels can become a malware distribution path",
      ],
      Methodology: [
        "Assess local data handling (files, registry, caches) and encryption",
        "Analyze runtime behavior and client-server protocol security",
        "Review auth/session handling and tampering resistance",
        "Validate secure update/signing and integrity controls",
      ],
      Deliverables: [
        "Detailed findings with proof-of-concept and remediation",
        "Prioritized security improvements for client and backend",
        "Optional re-test after fixes",
      ],
    },
  },
];

export default function ApplicationSecurityService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Lock className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Application Security</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              Applications are prime targets for attackers. Our Application Security services help identify and fix vulnerabilities across web, mobile, and cloud-native applications — right from the development phase to post-deployment.
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
                className="rounded-2xl bg-muted/30 border border-border/40 p-4 sm:p-6 lg:p-8"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Application Security Services
                </h3>
                <ServiceModulesAccordion modules={applicationModules} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}


