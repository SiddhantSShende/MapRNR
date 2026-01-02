import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const viewport = { once: true, amount: 0.25 };

export default function Terms() {
  return (
    <PageLayout>
      <section className="py-16 lg:py-20 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="text-sm font-mono uppercase tracking-[0.2em] text-primary"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-muted-foreground"
          >
            These Terms govern your use of this website. By accessing the site, you agree to these Terms. For service
            engagements, the signed proposal/master services agreement (if any) will control.
          </motion.p>

          <div className="mt-10 grid gap-6">
            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Use of the website</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                You agree not to misuse the website, attempt unauthorized access, or interfere with availability or
                security. We may suspend access if we reasonably believe misuse is occurring.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">No professional advice</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Content on this website is provided for general information and does not constitute legal, compliance,
                or security advice. Please contact us for advice tailored to your environment.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Intellectual property</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Website content, brand assets, and materials are owned by or licensed to RNR and protected by
                applicable laws. You may not copy, reproduce, or redistribute without permission.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Third-party links</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                The website may link to third-party sites. We are not responsible for their content or practices.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Limitation of liability</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                To the extent permitted by law, RNR will not be liable for indirect, incidental, or consequential
                damages arising from use of the website.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Questions about these Terms can be sent to{" "}
                <a className="text-primary hover:underline" href="mailto:info@consultrnr.com">
                  info@consultrnr.com
                </a>
                .
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Effective date: January 2, 2026</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/privacy">View Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
