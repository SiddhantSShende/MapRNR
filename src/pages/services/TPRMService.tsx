import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { tprmDropdownContent } from "@/data/tprmDropdownContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TPRMService() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">Our Services</span>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Third-Party Risk Management (TPRM) Services
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground leading-relaxed">
              Our TPRM service ensures you assess, monitor, and manage cybersecurity, compliance, and operational risks posed by third parties. We help build a structured framework for vendor onboarding, risk scoring, continuous monitoring, and contractual risk mitigation.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">Our Approach</h2>
            
            <div className="space-y-12">
              {Object.entries(tprmDropdownContent).map(([sectionKey, section]) => (
                <motion.div 
                  key={sectionKey}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  className="rounded-2xl bg-muted/30 border border-border/40 p-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">{section.title}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {section.items.map((item, idx) => {
                      const itemKey = `${sectionKey}-${idx}`;
                      return (
                        <AccordionItem key={itemKey} value={itemKey}>
                          <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground whitespace-pre-line">
                            {item.content}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </motion.div>
              ))}
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
