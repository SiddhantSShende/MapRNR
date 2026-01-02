import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileCheck, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { grcDropdownContent } from "@/data/grcDropdownContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GRCService() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Governance, Risk and Compliance (GRC)
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Our GRC services help organizations establish a unified approach to managing
              cybersecurity risks, aligning policies with business objectives, and ensuring
              compliance with regulatory standards. From identifying potential threats to setting
              governance frameworks and maintaining audit readiness.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            
            <div className="space-y-12">
              {/* Governance Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-muted/30 border border-border/40 p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Governance Services</h3>
                <Accordion type="single" collapsible className="w-full">
                  {Object.entries(grcDropdownContent.governanceServices).map(([key, item]) => (
                    <AccordionItem key={key} value={`gov-${key}`}>
                      <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Risk Management Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-muted/30 border border-border/40 p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Risk Management Services</h3>
                <Accordion type="single" collapsible className="w-full">
                  {Object.entries(grcDropdownContent.riskManagementServices).map(([key, item]) => (
                    <AccordionItem key={key} value={`risk-${key}`}>
                      <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Compliance Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-muted/30 border border-border/40 p-8"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">Compliance Services and Audit Services</h3>
                <Accordion type="single" collapsible className="w-full">
                  {Object.entries(grcDropdownContent.complianceServices).map(([key, item]) => (
                    <AccordionItem key={key} value={`comp-${key}`}>
                      <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>

            {/* CTA */}
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
