export type ServiceSlug =
  | "governance-risk-compliance"
  | "third-party-risk-management"
  | "business-continuity-management"
  | "application-security"
  | "cloud-security"
  | "mobile-app-security"
  | "training-and-awareness"
  | "infrastructure-security"
  | "vciso-services"
  | "resource-as-a-service"
  | "dpdp";

export interface ServiceDefinition {
  slug: ServiceSlug;
  title: string;
  description: string;
  features: string[];
}

export const services: ServiceDefinition[] = [
  {
    slug: "governance-risk-compliance",
    title: "Governance, Risk and Compliance (GRC)",
    description:
      "Build a unified GRC foundation that aligns security, risk and compliance with your business strategy and regulatory obligations.",
    features: [
      "Design and rollout of information security policies and governance frameworks",
      "Cybersecurity strategy and multi‑year roadmap definition for leadership",
      "Enterprise IT and cyber risk assessments with risk register and treatment plans",
      "Regulatory gap assessments and remediation planning across RBI, SEBI, CERT‑In and others",
      "Implementation and audit readiness support for ISO 27001, SOC 2, PCI‑DSS and similar standards",
    ],
  },
  {
    slug: "third-party-risk-management",
    title: "Third-Party Risk Management (TPRM) Services",
    description:
      "Establish a structured program to assess, score and continuously monitor risks introduced by vendors, partners and other third parties.",
    features: [
      "Design of an end‑to‑end TPRM framework with policies, processes and governance",
      "Risk‑based vendor onboarding with security questionnaires, due‑diligence checks and evidence reviews",
      "Scoring and tiering of third parties based on data sensitivity, access and criticality",
      "Set‑up or optimization of TPRM / GRC platforms and dashboards for ongoing monitoring",
      "Periodic reassessments, issue tracking and contract / SLA clauses for security and compliance",
    ],
  },
  {
    slug: "business-continuity-management",
    title: "Business Continuity Management System (BCMS) Services",
    description:
      "Make sure critical services keep running during disruptions through a practical, tested business continuity and disaster recovery framework.",
    features: [
      "BCMS policy, governance structure and roles aligned with ISO 22301 and sector guidance",
      "Business impact analysis to identify critical processes, dependencies and recovery objectives (RTO / RPO)",
      "Risk assessment and continuity strategy design covering people, process, technology and alternate sites",
      "Development of business continuity, disaster recovery and crisis management plans with clear playbooks",
      "Table‑top exercises, simulations and periodic reviews to validate readiness and update plans",
    ],
  },
  {
    slug: "application-security",
    title: "Application Security",
    description:
      "Secure web, mobile and API‑based applications across the SDLC through targeted testing, secure design and developer enablement.",
    features: [
      "Application vulnerability assessment and penetration testing for web and APIs",
      "Thick‑client and cloud‑native application security reviews",
      "Secure SDLC integration including threat modelling, security checkpoints and CI/CD controls",
      "Source code and configuration reviews to uncover design and implementation weaknesses",
      "Remediation guidance and collaboration with development teams to close findings effectively",
    ],
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    description:
      "Improve the security posture of your AWS, Azure, GCP and hybrid cloud environments while staying compliant and resilient.",
    features: [
      "Cloud security posture and architecture reviews across IaaS, PaaS and SaaS workloads",
      "Identity and access management (IAM) hardening and least‑privilege implementation",
      "Secure design of landing zones, network segmentation and connectivity patterns",
      "Cloud infrastructure VAPT and configuration baselining to catch misconfigurations",
      "Controls and guidance mapped to industry standards and regulator expectations for cloud use",
    ],
  },
  {
    slug: "mobile-app-security",
    title: "Mobile App Security",
    description:
      "Test mobile applications against current attack techniques and OWASP MASVS guidance so that sensitive data stays protected.",
    features: [
      "Mobile application vulnerability assessment and penetration testing for Android and iOS",
      "Checks for insecure storage, authentication, authorisation and session handling",
      "Review of app communication with APIs, back‑end services and third‑party SDKs",
      "Static and dynamic analysis of application binaries and configurations",
      "Clear reporting and fix‑oriented recommendations for internal and external development teams",
    ],
  },
  {
    slug: "training-and-awareness",
    title: "Training and Awareness",
    description:
      "Strengthen your human firewall with tailored cybersecurity training and awareness initiatives for different roles across the organisation.",
    features: [
      "Cybersecurity awareness sessions for employees, leadership and specialised functions",
      "Phishing simulation campaigns with targeted follow‑up training",
      "Secure coding and application security training for developers and DevOps teams",
      "BCP / incident response workshops and playbook walkthroughs",
      "ISMS and compliance‑focused training aligned to frameworks like ISO 27001 and DPDP",
    ],
  },
  {
    slug: "infrastructure-security",
    title: "Infrastructure Security Services",
    description:
      "Assess and harden on‑premise and cloud infrastructure including networks, servers, databases and security controls.",
    features: [
      "Network architecture assessment and firewall / VPN rule and configuration reviews",
      "Host and system hardening checks for servers, databases and key platforms",
      "Infrastructure‑level VAPT for internal and external environments",
      "Configuration baselines and benchmarks for operating systems and middleware",
      "Actionable recommendations to improve resilience of core IT infrastructure",
    ],
  },
  {
    slug: "vciso-services",
    title: "Virtual CISO (vCISO) Services",
    description:
      "Access senior cybersecurity leadership on a flexible model to steer your security, risk and compliance programmes.",
    features: [
      "Definition of cybersecurity vision, objectives and risk appetite with leadership",
      "Creation and oversight of security roadmaps, policies and governance structures",
      "Regular board‑level and management reporting on security posture and key risks",
      "Alignment of security initiatives with business priorities, budgets and regulations",
      "Hands‑on guidance for running the security function without the cost of a full‑time CISO",
    ],
  },
  {
    slug: "resource-as-a-service",
    title: "Resource as a Service",
    description:
      "Extend your team with vetted cybersecurity and GRC professionals available on a flexible, as‑a‑service basis.",
    features: [
      "Provision of GRC specialists familiar with ISO, RBI, SEBI, CERT‑In and sector guidelines",
      "Information security analysts for monitoring, investigation and daily operations",
      "Cybersecurity engineers skilled in tools such as SIEM, EDR and firewalls",
      "VAPT and application security testers to support assessment cycles",
      "Compliance and risk consultants who integrate with your internal teams and processes",
    ],
  },
  {
    slug: "dpdp",
    title: "Data Protection and Digital Privacy (DPDP)",
    description:
      "Prepare for and sustain compliance with India’s Digital Personal Data Protection Act while building customer trust around privacy.",
    features: [
      "DPDP readiness and gap assessments covering people, process and technology",
      "Drafting and refinement of privacy policies, notices and consent mechanisms",
      "Design of data subject rights processes and supporting workflows",
      "Data protection impact assessments and privacy‑by‑design advisory for high‑risk processing",
      "Ongoing monitoring, audits and awareness programs to keep DPDP compliance on track",
    ],
  },
];
