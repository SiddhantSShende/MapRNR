import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const trainingModules = [
  {
    id: "workshops",
    title: "Cybersecurity Awareness Workshops",
    sections: {
      "What is it?": "Cybersecurity awareness workshops train your team to spot and handle cyber threats, like phishing or malware, ensuring they're ready to protect your business. At RNR Consulting Pvt. Ltd., we deliver engaging sessions to make your staff cyber-savvy. Our workshops keep your team sharp, helping your business stay secure and operations smooth.",
      "Why It Matters": [
        "Security Breaches: Untrained staff might fall for scams, like phishing, leading to data leaks or financial losses.",
        "Compliance Risks: Lack of awareness could violate regulations, risking fines or audits.",
        "Operational Snags: A cyber incident can disrupt workflows, like system outages, frustrating clients.",
        "Reputation Hits: A breach due to human error can spark bad press or client distrust, dimming your brand.",
      ],
      "Methodology of RNR": [
        "Interactive Sessions: RNR designs engaging workshops with real-world scenarios, like spotting phishing emails.",
        "Threat Education: We teach your team about risks, like ransomware or social engineering, and how to respond.",
        "Practical Tips: RNR provides actionable steps, like strong password practices, to boost security.",
        "Team Focus: We customize content for all staff levels, from new hires to execs.",
        "Regular Training: RNR schedules ongoing sessions to keep awareness fresh.",
      ],
      "Why Choose RNR": [
        "Custom Content: RNR tailors workshops to your industry, from healthcare to tech.",
        "Engaging Delivery: We keep sessions lively and practical for maximum impact.",
        "Team Readiness: RNR ensures every employee is cyber-prepared.",
        "Future-Ready Support: As threats evolve, RNR keeps your training current.",
      ],
    },
  },
  {
    id: "phishing",
    title: "Phishing Simulation Campaigns",
    sections: {
      "What is it?": "Phishing simulation campaigns test your team's ability to spot and avoid phishing scams by sending realistic fake emails, helping them stay sharp against real cyber threats. At RNR Consulting Pvt. Ltd., we run these campaigns to strengthen your defenses. As a CERT-In empaneled organization, RNR ensures your staff is ready to dodge phishing traps, keeping your business secure and running smoothly.",
      "Why It Matters": [
        "Data Breaches: Staff falling for phishing can leak sensitive data, costing money or trust.",
        "Compliance Risks: Poor cyber preparedness might violate regulations, risking fines or audits.",
        "Workflow Disruptions: A phishing attack can halt systems, delaying services and frustrating clients.",
        "Reputation Dings: A breach from phishing can fuel bad press or client doubts, hurting your brand.",
      ],
      "Methodology of RNR": [
        "Realistic Scenarios: RNR creates fake phishing emails mimicking real-world attacks to test staff vigilance.",
        "Targeted Testing: We customize campaigns for different teams, like IT or finance, to address specific risks.",
        "Feedback Reports: RNR provides clear results on who clicked what, highlighting areas for improvement.",
        "Follow-Up Training: We offer tips to spot phishing, like checking sender details, post-campaign.",
        "Regular Drills: RNR schedules ongoing simulations to keep defenses sharp.",
      ],
      "Why Choose RNR": [
        "Custom Campaigns: RNR tailors tests to your industry and teams.",
        "Clear Insights: We provide actionable feedback to boost awareness.",
        "Future-Ready Support: As scams evolve, RNR keeps your defenses current.",
      ],
    },
  },
  {
    id: "coding",
    title: "Secure Coding Training",
    sections: {
      "What is it?": "Secure coding training teaches your developers to write software that's tough against cyber threats, like vulnerabilities that hackers could exploit. At RNR Consulting Pvt. Ltd., we deliver hands-on training to make your code bulletproof. Our sessions ensure your tech team builds secure systems, keeping your business safe and operations steady.",
      "Why It Matters": [
        "Security Breaches: Weak code can let hackers in, causing data leaks or financial losses.",
        "Compliance Risks: Vulnerable software might violate regulations, risking fines or audits.",
        "System Downtime: Exploited code can crash systems, disrupting services and frustrating clients.",
        "Reputation Scratches: A hack due to bad code can spark bad press or client distrust, dimming your brand.",
      ],
      "Methodology of RNR": [
        "Hands-On Sessions: RNR runs practical workshops with real coding exercises to teach secure practices.",
        "Threat Education: We cover common vulnerabilities, like SQL injection or cross-site scripting, and how to avoid them.",
        "Best Practices: RNR teaches secure coding standards, like input validation or encryption, for robust software.",
        "Team Focus: We customize training for your developers' skill levels and projects.",
        "Ongoing Learning: RNR schedules regular sessions to keep skills sharp.",
      ],
      "Why Choose RNR": [
        "Custom Content: RNR tailors training to your tech stack and industry.",
        "Practical Focus: We ensure developers learn hands-on, actionable skills.",
        "Future-Ready Support: As threats evolve, RNR keeps your training current.",
      ],
    },
  },
  {
    id: "materials",
    title: "Training Material Articulation",
    sections: {
      "What is it?": "Training material articulation means creating clear, engaging resources—like guides, videos, or slides—to teach your team about cybersecurity and continuity, ensuring they're ready for crises. We craft materials that make learning stick. Our resources keep your staff informed and prepared, helping your business stay secure and operational.",
      "Why It Matters": [
        "Response Gaps: Poor materials can leave staff confused, slowing crisis response and costing revenue.",
        "Compliance Risks: Weak training resources might violate regulations, risking fines or audits.",
        "Workflow Hiccups: Unclear guidance can delay recovery, frustrating clients and stalling operations.",
        "Reputation Bumps: A shaky response due to bad training can spark client distrust or bad press.",
      ],
      "Methodology of RNR": [
        "Custom Content: RNR designs guides, videos, or slides tailored to your business and risks.",
        "Clear Messaging: We simplify complex topics, like phishing or recovery steps, for easy understanding.",
        "Engaging Formats: RNR uses visuals and interactive elements to make learning stick.",
        "Team Focus: We create materials for all staff levels, from frontline to leadership.",
        "Regular Updates: RNR refreshes materials to match evolving threats or processes.",
      ],
      "Why Choose RNR": [
        "Custom Resources: RNR tailors content to your industry and needs.",
        "Engaging Design: We ensure materials are clear and captivating.",
        "Team Readiness: RNR equips staff with easy-to-use resources.",
        "Future-Ready Support: As risks change, RNR keeps materials current.",
      ],
    },
  },
  {
    id: "bcp",
    title: "BCP Training",
    sections: {
      "What is it?": "BCP (Business Continuity Planning) training teaches your team how to execute continuity plans during crises, like outages or disasters, ensuring they know their roles to keep operations running. At RNR Consulting Pvt. Ltd., we deliver hands-on training to make your team crisis-ready. Our sessions ensure your business stays steady, keeping clients happy and workflows smooth.",
      "Why It Matters": [
        "Response Chaos: Untrained staff could fumble plans, slowing recovery and costing revenue.",
        "Compliance Risks: Lack of training might violate regulations, risking fines or audits.",
        "Service Delays: Confusion over plans can stall operations, frustrating clients.",
        "Reputation Dents: A weak crisis response can fuel bad press or client doubts, dimming your brand.",
      ],
      "Methodology of RNR": [
        "Practical Sessions: RNR runs hands-on training with real-world crisis scenarios.",
        "Role Clarity: We teach staff their specific roles in continuity plans, like system recovery or client communication.",
        "Plan Walk-Throughs: RNR guides teams through plans to ensure understanding.",
        "Team Focus: We customize training for all levels, from frontline to execs.",
        "Ongoing Training: RNR schedules regular sessions to keep skills fresh.",
      ],
      "Why Choose RNR": [
        "Custom Content: RNR tailors training to your industry and plans.",
        "Engaging Delivery: We keep sessions practical and impactful.",
        "Future-Ready Support: As plans evolve, RNR keeps training current.",
      ],
    },
  },
  {
    id: "isms",
    title: "ISMS Training",
    sections: {
      "What is it?": "ISMS (Information Security Management System) training equips your team to protect sensitive data and systems by following security processes, ensuring your business stays safe from cyber threats. At RNR Consulting Pvt. Ltd., we deliver engaging training to make your team security pros. Our sessions keep your business secure, ensuring operations run smoothly and clients stay confident.",
      "Why It Matters": [
        "Data Breaches: Untrained staff might mishandle data, leading to leaks or financial losses.",
        "Compliance Risks: Poor security training could violate regulations, risking fines or audits.",
        "Operational Snags: Security lapses can disrupt systems, delaying services and frustrating clients.",
        "Reputation Bumps: A security failure can spark bad press or client distrust, hurting your brand.",
      ],
      "Methodology of RNR": [
        "Interactive Sessions: RNR runs hands-on training with scenarios like data breaches or access control failures.",
        "Security Education: We teach best practices, like access management or incident reporting.",
        "Process Clarity: RNR ensures staff understand security processes to protect systems and data.",
        "Team Focus: We customize training for all roles, from IT to leadership.",
        "Ongoing Training: RNR schedules regular sessions to keep skills current.",
      ],
      "Why Choose RNR": [
        "Custom Content: RNR tailors training to your industry and security needs.",
        "Engaging Sessions: We keep training clear and impactful.",
        "Team Readiness: RNR ensures every employee is security-ready.",
        "Future-Ready Support: As threats evolve, RNR keeps training up-to-date.",
      ],
    },
  },
];

export default function TrainingAwarenessService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Zap className="w-6 h-6 text-primary" /></div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Training and Awareness</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              Technology alone can't secure an organization — your people play a vital role. At RNR, we offer tailored cybersecurity training and awareness programs to build a security-first culture.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {trainingModules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={module.id}
                    className="rounded-2xl border border-border/40 bg-background/70 overflow-hidden px-6 py-0"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-6">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 space-y-6">
                      {Object.entries(module.sections).map(([sectionTitle, content]) => (
                        <div key={sectionTitle} className="space-y-3">
                          <h4 className="font-display text-base font-semibold text-foreground">
                            {sectionTitle}
                          </h4>
                          {Array.isArray(content) ? (
                            <ul className="space-y-2 ml-2">
                              {content.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="text-primary mt-1 shrink-0">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {content}
                            </p>
                          )}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            
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
