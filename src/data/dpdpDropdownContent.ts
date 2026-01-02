// DPDP Service Dropdown Content
// Paste the content from RNR website dropdowns here

export const dpdpDropdownContent = {
  compliance: {
    title: "DPDP Act Compliance & Implementation",
    content: `What is it?
DPDP compliance and implementation translates India’s Digital Personal Data Protection (DPDP) Act expectations into practical controls across people, process, and technology—so personal data is collected, used, shared, and retained responsibly.

Why it matters
- Creates clear privacy governance and accountability.
- Builds trust with customers and partners through transparent handling of personal data.
- Reduces risk from inconsistent processes, shadow data stores, and ad-hoc access.

Methodology of RNR
- Discovery & scoping: Identify business units, systems, and data flows where personal data is processed.
- Gap assessment: Review notices, consent flows, retention, access controls, and incident readiness.
- Control design: Define policies, roles, SOPs, and governance cadence.
- Implementation support: Work with product/IT/security/legal to roll out controls and evidence.
- Continuous improvement: Define metrics, periodic reviews, and program updates.

Deliverables
- DPDP readiness/gap assessment report
- Prioritized implementation roadmap
- Drafted/updated privacy notices and internal policies
- Operating model (roles, responsibilities, review cadence)
- Evidence templates and audit-ready documentation`
  },

  dpia: {
    title: "Data Protection Impact Assessments (DPIA)",
    content: `What is it?
A DPIA is a structured assessment used to identify privacy risks in higher-impact processing activities and document mitigations before launch or major change.

Why it matters
- Detects privacy and security risks early—before they become incidents.
- Produces defensible documentation for leadership, stakeholders, and audits.
- Improves product and process design decisions for new features and integrations.

Methodology of RNR
- Trigger identification: Determine which initiatives should undergo DPIA.
- Data-flow mapping: Document categories of data, purpose, recipients, storage, and retention.
- Risk analysis: Assess risk likelihood/impact and key failure scenarios.
- Mitigation planning: Recommend controls (minimization, encryption, access control, monitoring).
- Sign-off workflow: Define ownership, approvals, and re-assessment events.

Deliverables
- DPIA template + completed DPIA report for scoped initiatives
- Risk register entries and mitigation plan
- Privacy-by-design recommendations for product and engineering teams`
  },

  consentManagement: {
    title: "Consent Management Solutions",
    content: `What is it?
Consent management ensures that user permissions are collected, recorded, and honored across the lifecycle—including updates, withdrawals, and evidence retention.

Why it matters
- Prevents inconsistent consent behavior across channels and systems.
- Improves transparency and reduces customer complaints.
- Enables scalable governance as products and marketing programs grow.

Methodology of RNR
- Requirement mapping: Identify where consent is needed and what evidence must be stored.
- UX + policy alignment: Ensure notices and consent screens match business and legal needs.
- System integration: Define how consent signals propagate to downstream systems.
- Logging & evidence: Specify secure storage, integrity, and retrieval for auditability.
- Validation: Define test cases to confirm consent enforcement end-to-end.

Deliverables
- Consent workflow and data model
- Implementation guidance for product/engineering
- Consent recordkeeping and audit evidence approach
- Test cases for validation and regression checks`
  },

  dataBreachResponse: {
    title: "Data Breach Response & Incident Management",
    content: `What is it?
Privacy incident management defines how you detect, triage, contain, investigate, and communicate personal-data-related incidents with clear roles, timelines, and evidence handling.

Why it matters
- Reduces business impact by enabling faster containment and recovery.
- Ensures consistent decision-making under pressure.
- Improves readiness through playbooks, rehearsals, and escalation paths.

Methodology of RNR
- Readiness assessment: Review incident response processes, tooling, and responsibilities.
- Playbook design: Create privacy-focused playbooks (exposure, ransomware, insider events).
- Tabletop exercises: Run simulations to validate coordination and close gaps.
- Evidence & reporting: Define logging, chain-of-custody, and reporting artifacts.
- Continuous improvement: Post-incident review process and metrics.

Deliverables
- Privacy incident playbooks and escalation matrix
- Tabletop exercise report and improvement actions
- Breach communication decision checklist and templates
- Incident metrics and governance cadence`
  },

  vendorDataProtection: {
    title: "Vendor & Third-Party Data Protection",
    content: `What is it?
Third-party data protection ensures vendors who process personal data follow appropriate safeguards—through due diligence, contract controls, and ongoing monitoring.

Why it matters
- Vendors can become the fastest path to large-scale exposure.
- Contracts and due diligence reduce ambiguity during incidents.
- Monitoring helps prevent control drift across long vendor relationships.

Methodology of RNR
- Vendor inventory & tiering: Classify vendors by criticality and data sensitivity.
- Due diligence: Evaluate security/privacy controls, policies, and operational maturity.
- Contract control set: Define privacy/security clauses, obligations, and breach handling.
- Monitoring: Establish review cadence, evidence checks, and exception handling.

Deliverables
- Vendor tiering model and assessment templates
- Contract clause/control checklist for procurement/legal
- Risk findings and remediation tracking approach
- Ongoing monitoring plan`
  },

  ongoingCompliance: {
    title: "Ongoing Compliance & Training",
    content: `What is it?
Ongoing compliance and training keeps DPDP controls effective over time by institutionalizing monitoring, internal audits, and role-based awareness.

Why it matters
- Privacy programs fail when processes are not reinforced.
- Training reduces human-error-driven incidents.
- Periodic audits keep evidence current and identify drift early.

Methodology of RNR
- Control monitoring: Define checks for retention, access, consent, and incident readiness.
- Audit and evidence: Establish periodic review cycles and sampling methods.
- Awareness: Run role-based privacy training for business, HR, support, engineering, and leadership.
- Metrics: Track program KPIs and improvement actions.

Deliverables
- DPDP compliance monitoring checklist
- Internal audit plan and evidence templates
- Training plan and role-based training materials
- KPI guidance and review cadence`
  }
};
