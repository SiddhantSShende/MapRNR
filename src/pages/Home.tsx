import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Lock, Eye, Zap, Shield, Users, Globe, Award, ChevronRight, Quote, Building2, Star } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ThreatMap } from "@/components/ThreatMap";
import { AttackLegend } from "@/components/AttackLegend";
import { AttackCounter } from "@/components/AttackCounter";
import { useAttackSimulation } from "@/hooks/useAttackSimulation";
import Featuresection from "@/components/Featuresection";
import ShowcaseSection from "@/components/ShowcaseSection";

const viewport = { once: true, amount: 0.25 };
const easeOut = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition: { duration: 0.6, ease: easeOut },
};

const features = [
  {
    icon: Shield,
    title: "Government-Recognized Expertise",
    description:
      "CERT-IN empanelled cybersecurity partner trusted by public and private sector organizations.",
  },
  {
    icon: Eye,
    title: "End-to-End Cyber & Risk",
    description:
      "From governance and compliance to technical hardening, we cover the full security lifecycle.",
  },
  {
    icon: Users,
    title: "Technical Depth with Business Insight",
    description:
      "Security consultants who understand both complex infrastructure and real-world business constraints.",
  },
  {
    icon: Zap,
    title: "Tailored, Ongoing Partnership",
    description:
      "Engagements designed around your environment with continuous support beyond one-off assessments.",
  },
];

const stats = [
  { value: "2014", label: "Year We Started" },
  { value: "10+", label: "Years in Cybersecurity" },
  { value: "100+", label: "Organizations Supported" },
  { value: "24x7", label: "Security Engagement" },
];

const statIcons = [Award, Shield, Globe, Lock];

const certifications = [
  "CERT-IN Empanelled",
  "ISO 27001 Aligned",
  "SOC 2 Ready",
  "PCI DSS Guidance",
  "Sector-Specific Compliance",
];

const clients = [
  "Banks and Fintechs",
  "Healthcare and Pharma",
  "Manufacturing and Industrial",
  "Government and Public Sector",
  "Technology and SaaS",
];

const testimonials = [
  {
    name: "Head of Information Security",
    company: "Digital Lending Fintech",
    quote:
      "They helped us move from ad-hoc security tasks to a structured GRC and risk program without slowing our product teams.",
  },
  {
    name: "CTO",
    company: "Healthcare SaaS Platform",
    quote:
      "Their cloud and application security guidance gave us confidence going into audits and major feature launches.",
  },
  {
    name: "Chief Risk Officer",
    company: "Retail Bank",
    quote:
      "A practical partner who understands both regulatory expectations and the realities of running a large technology estate.",
  },
];

export default function Home() {
  const { totalAttacks, activeAttacks } = useAttackSimulation(4);

  return (
    <PageLayout showParticles={false}>
      {/* Hero Section with Live Threat Map */}
      <section className="relative min-h-[90vh] flex flex-col">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
            <div className="max-w-2xl pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Strategic Cybersecurity Consulting
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight drop-shadow-lg"
              >
                Your Shield for a{" "}
                <span className="text-primary text-glow-cyan">Digital-First World</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl drop-shadow-md"
              >
                We help organizations build resilient, compliant, and secure digital operations
                through strategic cybersecurity consulting, risk management, and hands-on
                implementation support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 group">
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border/50 bg-background/50 backdrop-blur-sm gap-2" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-2"
              >
                {certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1.5 rounded-md bg-background/60 backdrop-blur-sm border border-border/30 text-xs font-medium text-muted-foreground">
                    {cert}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <AttackCounter totalAttacks={totalAttacks} />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <AttackLegend />
        </div>

        <div className="absolute inset-0">
          <ThreatMap activeAttacks={activeAttacks} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/30 bg-gradient-to-r from-muted/30 via-muted/10 to-muted/30 relative z-10 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-25"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 30%, hsl(var(--primary) / 0.18) 0%, transparent 55%)," +
              "radial-gradient(circle at 82% 70%, hsl(var(--accent) / 0.18) 0%, transparent 55%)",
            backgroundSize: "140% 140%",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: index * 0.08, duration: 0.6, ease: easeOut }}
                  whileHover={{ y: -3, transition: { duration: 0.25, ease: easeOut } }}
                  className="group relative p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/60 shadow-sm shadow-primary/5 overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col items-center gap-2">
                    {Icon && (
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <motion.div 
                      className="font-display text-2xl md:text-3xl font-bold text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 relative z-10 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-15"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 24, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "linear-gradient(120deg, hsl(var(--primary) / 0.12), transparent 55%)," +
              "linear-gradient(300deg, hsl(var(--accent) / 0.12), transparent 55%)",
            backgroundSize: "160% 160%",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.span
              {...fadeUp}
              className="text-primary text-sm font-mono uppercase tracking-widest mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              {...fadeUp}
              className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
            >
              Complete Cybersecurity Solutions
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              From threat detection to compliance management, we provide everything 
              you need to keep your business secure.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: index * 0.08, duration: 0.6, ease: easeOut }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: easeOut } }}
                className="group relative p-6 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/60 shadow-sm shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                  >
                    <feature.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Featuresection />

      {/* Zero Trust & Automation Showcase Section */}
      <ShowcaseSection />

      {/* Trusted By Section */}
      <section className="py-20 relative z-10 border-y border-border/20 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ["0% 100%", "100% 0%"] }}
          transition={{ duration: 26, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 90%, hsl(var(--primary) / 0.18) 0%, transparent 55%)," +
              "radial-gradient(circle at 90% 10%, hsl(var(--accent) / 0.18) 0%, transparent 55%)",
            backgroundSize: "150% 150%",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            {...fadeUp}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground text-sm uppercase tracking-widest">Trusted by Industry Leaders</span>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                whileHover={{ opacity: 1, scale: 1.03 }}
                viewport={viewport}
                transition={{ delay: index * 0.06, duration: 0.55, ease: easeOut }}
                className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground font-display text-xs md:text-sm cursor-default shadow-sm hover:border-primary/50 transition-colors"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-24 relative z-10 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 28, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, hsl(var(--border) / 0.4) 0, hsl(var(--border) / 0.4) 1px, transparent 1px, transparent 16px)",
            backgroundSize: "200% 100%",
          }}
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
            <div>
              <motion.span
                {...fadeUp}
                className="text-primary text-sm font-mono uppercase tracking-[0.2em] mb-3 block"
              >
                Client Voices
              </motion.span>
              <motion.h2
                {...fadeUp}
                className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 }}
                className="text-sm md:text-base text-muted-foreground max-w-xl"
              >
                A snapshot of how security, risk, and compliance leaders describe working with our
                team on real-world engagements.
              </motion.p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Star className="w-4 h-4 text-primary" />
              <span>Security & risk consulting partner for regulated industries</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, index) => (
              <motion.article
                key={t.company + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: index * 0.08, duration: 0.6, ease: easeOut }}
                whileHover={{ y: -3, transition: { duration: 0.25, ease: easeOut } }}
                className="relative rounded-2xl bg-background/80 backdrop-blur-xl border border-border/60 shadow-sm shadow-primary/10 p-6 flex flex-col gap-4 overflow-hidden"
              >
                <div className="absolute right-4 top-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="relative">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                <div className="relative pt-3 mt-auto border-t border-border/50 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
                      <Building2 className="w-3 h-3 text-primary" />
                      <span>{t.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-10 lg:p-20 text-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{ 
                background: [
                  "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.05 }}
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
              >
                <Shield className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
                Get a free security assessment and discover vulnerabilities before attackers do.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2 group">
                  Schedule Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10" asChild>
                  <Link to="/threat-map">View Live Threats <ChevronRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
