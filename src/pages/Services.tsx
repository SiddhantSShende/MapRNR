import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Network,
  Database,
  Code2,
  Smartphone,
  BarChart3,
  Award,
  Server,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import type { ServiceSlug } from "@/data/services";

const iconMap: Record<ServiceSlug, LucideIcon> = {
  "governance-risk-compliance": BarChart3,
  "third-party-risk-management": Users,
  "business-continuity-management": Shield,
  "application-security": Code2,
  "cloud-security": Network,
  "mobile-app-security": Smartphone,
  "training-and-awareness": Award,
  "infrastructure-security": Server,
  "vciso-services": Shield,
  "resource-as-a-service": Database,
  dpdp: Code2,
};

const serviceRouteMap: Record<ServiceSlug, string> = {
  "governance-risk-compliance": "/services/governance-risk-compliance",
  "third-party-risk-management": "/services/third-party-risk-management",
  "business-continuity-management": "/services/business-continuity-management",
  "application-security": "/services/application-security",
  "cloud-security": "/services/cloud-security",
  "mobile-app-security": "/services/mobile-app-security",
  "training-and-awareness": "/services/training-awareness",
  "infrastructure-security": "/services/infrastructure-security",
  "vciso-services": "/services/vciso",
  "resource-as-a-service": "/services/resource-as-service",
  dpdp: "/services/dpdp",
};

export default function Services() {

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Cybersecurity & Risk Consulting Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              A complete portfolio of governance, risk, compliance, and technical security services designed to protect your organization and keep you audit-ready.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Heading */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Comprehensive cybersecurity and risk management solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Horizontal Cards */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-x-auto pb-4 -mx-4 lg:-mx-8 px-4 lg:px-8">
            <div className="flex gap-6 min-w-min">
              {services.map((service, index) => {
                const Icon = iconMap[service.slug] ?? Shield;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.05, 0.15) }}
                    className="group relative flex-shrink-0 w-80 p-6 rounded-2xl bg-background/70 border border-border/40 hover:border-primary/40 hover:bg-background/90 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)] transition-opacity" />
                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-2 p-0 h-auto font-medium"
                        asChild
                      >
                        <Link to={serviceRouteMap[service.slug]}>
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-2xl bg-muted/30 border border-border/30"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Security Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Every organization has unique security challenges. Let's discuss how we can help.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2" asChild>
              <Link to="/contact">
                Contact Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
