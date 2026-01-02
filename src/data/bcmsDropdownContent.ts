export const bcmsModules = [
	{
		id: "policy-governance",
		title: "Business Continuity Policy & Governance",
		sections: {
			"What it is":
				"Defines leadership intent, scope, objectives, and decision rights for business continuity—so crisis response is coordinated, accountable, and auditable.",
			"Why it matters": [
				"Eliminates confusion during incidents and accelerates decision-making",
				"Sets measurable continuity objectives aligned to business risk",
				"Creates audit-ready governance aligned to ISO 22301 principles",
			],
			Methodology: [
				"Stakeholder workshops to define scope, critical services, and risk appetite",
				"BCMS policy and governance model (roles, committees, escalation)",
				"Documentation standards and evidence mapping for audits",
			],
			Deliverables: [
				"BCMS policy, scope statement, and governance charter",
				"Roles & responsibilities (RACI) and escalation workflow",
				"BCMS document set and review cadence",
			],
		},
	},
	{
		id: "critical-functions",
		title: "Critical Functions & Dependencies",
		sections: {
			"What it is":
				"Identifies the business services, processes, people, applications, infrastructure, and third parties that must be protected to meet continuity targets.",
			"Why it matters": [
				"Focuses investment on what truly keeps the business running",
				"Reduces blind spots in vendor and platform dependencies",
				"Improves recovery planning for complex, interconnected services",
			],
			Methodology: [
				"Map services and supporting assets (apps, infra, vendors, data)",
				"Identify single points of failure and key operational bottlenecks",
				"Prioritize dependencies based on impact and recoverability",
			],
			Deliverables: [
				"Critical services catalog and dependency maps",
				"Dependency risk notes and mitigation recommendations",
			],
		},
	},
	{
		id: "roles-escalation",
		title: "Roles, Responsibilities & Escalation",
		sections: {
			"What it is":
				"Defines who does what during disruptions (command, technical recovery, communications) and how incidents are escalated from detection to resolution.",
			"Why it matters": [
				"Ensures fast, coordinated response across business and IT",
				"Prevents gaps in customer, regulator, and internal communications",
				"Reduces downtime by removing decision bottlenecks",
			],
			Methodology: [
				"Design incident and crisis management roles (IC, deputies, SMEs)",
				"Define escalation triggers, severity levels, and contact trees",
				"Create runbooks and communication templates",
			],
			Deliverables: [
				"Crisis organization chart and on-call/escalation matrix",
				"Response playbooks and stakeholder communication templates",
			],
		},
	},
	{
		id: "iso-alignment",
		title: "ISO 22301 Alignment & Audit Readiness",
		sections: {
			"What it is":
				"Aligns your continuity program to ISO 22301 requirements and sector expectations to enable assurance, audits, and consistent operations.",
			"Why it matters": [
				"Improves credibility with customers and partners",
				"Reduces audit friction with clear evidence and traceability",
				"Creates a repeatable, measurable BCMS lifecycle",
			],
			Methodology: [
				"Gap assessment against ISO 22301 clauses and controls",
				"Implementation roadmap with owners, timelines, and evidence",
				"Internal audit preparation and management review readiness",
			],
			Deliverables: [
				"ISO 22301 gap report and remediation roadmap",
				"Evidence checklist and audit-ready artifacts",
			],
		},
	},
	{
		id: "bia",
		title: "Business Impact Analysis (BIA)",
		sections: {
			"What it is":
				"Quantifies disruption impact (financial, operational, legal, reputational) and defines RTO/RPO targets for critical services and supporting systems.",
			"Why it matters": [
				"Drives realistic recovery targets and investment decisions",
				"Prevents over/under-engineering recovery solutions",
				"Creates a defensible continuity strategy for leadership and auditors",
			],
			Methodology: [
				"Interview process owners and validate service dependencies",
				"Model impact over time (hours/days) and set tolerance thresholds",
				"Define RTO/RPO and minimum business continuity requirements",
			],
			Deliverables: [
				"BIA report with prioritized services and impact profiles",
				"RTO/RPO matrix and continuity requirements",
			],
		},
	},
	{
		id: "risk-assessment",
		title: "Threat & Vulnerability Assessment",
		sections: {
			"What it is":
				"Identifies disruption scenarios (cyber, third-party, facilities, technology, people) and evaluates likelihood and impact to prioritize treatments.",
			"Why it matters": [
				"Reduces the probability of outages and crisis escalation",
				"Improves resilience by addressing root causes",
				"Supports enterprise risk management and board reporting",
			],
			Methodology: [
				"Scenario mapping and control review",
				"Risk scoring and prioritization aligned to your risk appetite",
				"Treatment plan integrated with BC/DR strategy",
			],
			Deliverables: [
				"Risk register inputs for continuity risks",
				"Prioritized mitigation and control recommendations",
			],
		},
	},
	{
		id: "strategy",
		title: "Continuity & Recovery Strategy (People, Process, Technology)",
		sections: {
			"What it is":
				"Designs resilience strategies such as alternate workflows, redundancy, backup/restore, failover, staffing models, and communications.",
			"Why it matters": [
				"Ensures critical services continue under stress",
				"Balances cost vs. resilience using impact-driven targets",
				"Enables consistent, tested response across teams",
			],
			Methodology: [
				"Select strategy options aligned to RTO/RPO and risk priorities",
				"Define manual workarounds and minimum service levels",
				"Integrate vendor and facility continuity considerations",
			],
			Deliverables: [
				"Continuity strategy blueprint and options analysis",
				"Minimum service levels and recovery approach per service",
			],
		},
	},
	{
		id: "it-dr",
		title: "IT Disaster Recovery (DR) Integration",
		sections: {
			"What it is":
				"Aligns business continuity requirements with IT recovery capabilities across infrastructure, applications, data, and cloud services.",
			"Why it matters": [
				"Avoids mismatches between business needs and technical recovery",
				"Improves restore/failover success through clear runbooks",
				"Strengthens ransomware readiness with recoverability controls",
			],
			Methodology: [
				"Assess backup, restore, replication, and failover capabilities",
				"Create DR runbooks aligned to RTO/RPO and critical services",
				"Validate recoverability through tabletop and technical tests",
			],
			Deliverables: [
				"DR plan/runbooks and recovery architecture recommendations",
				"Test plan and recovery validation evidence",
			],
		},
	},
	{
		id: "plans",
		title: "BC & DR Plan Development",
		sections: {
			"What it is":
				"Creates practical, unit-level continuity and disaster recovery plans covering incident response, communications, recovery steps, and return-to-normal.",
			"Why it matters": [
				"Turns strategy into executable steps during real events",
				"Improves coordination across business units and IT",
				"Enables repeatable response with clear ownership",
			],
			Methodology: [
				"Draft plans per business unit and validate with stakeholders",
				"Define communications, recovery workflows, and dependencies",
				"Ensure version control and periodic review process",
			],
			Deliverables: [
				"Business unit BC plans and DR plans",
				"Contact lists, escalation paths, and communication templates",
			],
		},
	},
	{
		id: "testing",
		title: "Testing, Exercises & Continuous Improvement",
		sections: {
			"What it is":
				"Validates that plans work through tabletop exercises, simulations, and recovery tests, then improves the BCMS using outcomes and metrics.",
			"Why it matters": [
				"Finds gaps before an actual crisis does",
				"Improves team readiness and response confidence",
				"Builds measurable evidence for audits and leadership reporting",
			],
			Methodology: [
				"Tabletop exercises for crisis leadership and communications",
				"Technical recovery tests for backup/restore and failover",
				"After-action reviews and tracked improvement actions",
			],
			Deliverables: [
				"Exercise reports, observations, and action plans",
				"BCMS improvement backlog and review cadence",
			],
		},
	},
];

