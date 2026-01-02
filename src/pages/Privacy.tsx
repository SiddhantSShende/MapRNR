import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const viewport = { once: true, amount: 0.25 };

export default function Privacy() {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.05 }}
            className="mt-4 max-w-3xl text-muted-foreground"
          >
            This Privacy Policy explains how RNR ("we", "us") collects, uses, and protects information when you
            visit our website or contact our team. If you have questions, reach out at{" "}
            <a className="text-primary hover:underline" href="mailto:info@consultrnr.com">
              info@consultrnr.com
            </a>
            .
          </motion.p>

          <div className="mt-10 grid gap-6">
            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Information we collect</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Contact details you submit (name, email, phone, company, and message).</li>
                <li>Basic usage data (pages visited, device/browser information) for security and performance.</li>
                <li>Any information you provide during business discussions or service inquiries.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">How we use information</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Respond to inquiries and provide requested services or proposals.</li>
                <li>Operate, secure, and improve the website.</li>
                <li>Comply with legal obligations and enforce our policies.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Sharing</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We do not sell personal information. We may share data with trusted service providers (e.g., hosting,
                analytics, communication tools) only as necessary to operate the website and communicate with you, and
                with appropriate safeguards.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Security</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We apply reasonable administrative, technical, and organizational measures to protect information.
                No system is 100% secure, so we encourage you to avoid sharing sensitive data through website forms.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Your choices</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                You can request access, correction, or deletion of your information by contacting us. Some data may be
                retained when required for security, compliance, or legitimate business purposes.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground">Updates</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We may update this policy from time to time. Changes will be posted on this page with a revised
                effective date.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">Effective date: January 2, 2026</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/terms">View Terms of Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
