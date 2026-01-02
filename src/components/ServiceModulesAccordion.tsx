import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type ServiceModuleSections = Record<string, string | string[]>;

export type ServiceModule = {
  id: string;
  title: string;
  sections: ServiceModuleSections;
};

export function ServiceModulesAccordion({
  modules,
  accordionType = "single",
}: {
  modules: ServiceModule[];
  accordionType?: "single" | "multiple";
}) {
  return (
    <Accordion type={accordionType} collapsible className="w-full">
      {modules.map((module) => (
        <AccordionItem key={module.id} value={module.id}>
          <AccordionTrigger className="text-left">{module.title}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {Object.entries(module.sections).map(([heading, body]) => (
                <div key={heading} className="space-y-2">
                  <div className="text-sm font-semibold text-foreground">{heading}</div>
                  {Array.isArray(body) ? (
                    <ul className="space-y-2">
                      {body.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
