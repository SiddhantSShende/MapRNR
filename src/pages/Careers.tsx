import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, BookOpen, Award, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Users,
    title: "Inclusive Culture",
    description:
      "A diverse and collaborative environment where every voice is heard and valued.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Access to training, certifications, and conferences to stay ahead of the curve.",
  },
  {
    icon: Award,
    title: "Rewards & Recognition",
    description: "Your hard work and dedication are valued and celebrated.",
  },
  {
    icon: Zap,
    title: "Skill Development",
    description:
      "We sponsor industry-recognized certifications and provide mentorship.",
  },
];

export default function Careers() {
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
              Join Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Become a part of a dynamic and innovative team dedicated to making the digital world a safer place
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              At RNR Consulting, your work makes a real impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Overview
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At RNR Consulting Pvt. Ltd., We welcome ideas, innovations, and talent.
                    We're an organisation built on trust, collaboration, and a shared mission to
                    protect and empower the digital world. Every individual here contributes to
                    something bigger—helping organisations stay secure, compliant, and resilient
                    in an ever-changing landscape.
                  </p>
                  <p>
                    As a part of RNR, you'll be stepping into an environment that values
                    curiosity, continuous learning, and a commitment to do what's right. We
                    encourage bold ideas, reward accountability, and support each other through
                    challenges and growth.
                  </p>
                  <p>
                    Whether you're a seasoned professional or just starting your journey, we
                    offer a space where your skills are nurtured, your voice is heard, and your
                    contributions are recognized. We work together, celebrate wins together, and
                    learn together—because at RNR, your success is our success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grow With Us CTA */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-background/40 border border-primary/30 p-12 md:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_100%_0,_hsl(var(--primary))_0,_transparent_55%)]" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Grow With Us
              </h2>
              <p className="text-muted-foreground mb-8">
                Kindly fill the form by clicking the link below to get notified about
                opportunities with us.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Get Notified <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Benefits of Working With Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              At RNR Consulting, we believe that people are at the heart of everything we do.
              We don't just fill roles—we invest in individuals, nurture their potential, and
              empower them to shape the future of cybersecurity and compliance.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative p-6 rounded-2xl bg-background/60 border border-border/40 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)]" />
                  <div className="relative space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why RNR */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Join RNR?
            </h2>
            <div className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Real-World Impact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work on impactful, real-world projects across industries where your
                  contributions directly help organizations protect their digital assets and
                  compliance posture.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Ownership & Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Take ownership of your ideas and be recognized for your contributions every
                  step of the way. Your growth is our priority.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" /> Culture & Balance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our inclusive, zero-hierarchy culture values openness, respect, and
                  authenticity. We promote a healthy work-life balance that supports your
                  personal and professional well-being.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-2xl bg-muted/30 border border-border/30"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's talk about your career journey and how you can contribute to our mission.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2"
              asChild
            >
              <Link to="/contact">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
