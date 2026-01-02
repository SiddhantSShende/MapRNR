import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Users, ArrowRight, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo, useRef, useState } from "react";

const stats = [
  { value: "2014", label: "Year Established" },
  { value: "50+", label: "Professionals" },
  { value: "200+", label: "Organizations Served" },
  { value: "1000+", label: "Projects Delivered" },
];

const highlightBadges = [
  "CERT-IN Empanelled",
  "Cybersecurity & Risk Advisory",
  "Process Improvement Focus",
  "Trusted by Regulated Industries",
];

const values = [
  {
    title: "Security & Process Excellence",
    description:
      "We blend cybersecurity expertise with process improvement so that controls are effective, sustainable, and practical.",
  },
  {
    title: "Integrity & Clarity",
    description:
      "Honest, straightforward guidance that gives leadership a clear view of risk and priorities.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We help you refine your security posture over time instead of treating it as a one-time exercise.",
  },
  {
    title: "Client-Centric Partnership",
    description:
      "Every engagement is tailored to the organization, industry, and maturity level we are supporting.",
  },
];

const philosophy = {
  intro: "In today's hyper-connected world, where every click, transaction, and interaction is digital — cybersecurity is no longer just an IT function. It's a shared responsibility. At RNR Consulting, we believe that security must be embedded not just in systems, but in people, processes, and culture.",
  sections: [
    {
      title: "Our Mission",
      description:
        "To help organizations stay secure in a digital world that's constantly evolving. We focus on making cybersecurity understandable, practical, and tailored to real-world business needs. Whether it's through audits, assessments, or building stronger cyber defences, we're here to reduce risks, support compliance, and offer guidance that makes a difference.",
    },
    {
      title: "Our Vision",
      description:
        "To secure organizations whether they are big or small. We believe in a secure future where security becomes a business strength, not a burden. Our vision is to be a trusted partner to companies navigating the fast-changing digital landscape, providing them with the right mix of insight, support, and strategy to move forward without fear.",
    },
    {
      title: "Our Goals",
      description:
        "We aim to keep growing by expanding into new sectors and regions, while never compromising on quality. We're constantly upgrading our skills, staying ahead of emerging threats and regulations. Most importantly, we want every client to feel that they're not just buying a service — they're gaining a partner who truly understands their needs.",
    },
  ],
  howWeWork: {
    title: "How We Work",
    intro: "Our work is built around collaboration, customization, and clarity. We don't offer one-size-fits-all solutions — we co-create strategies based on your unique context.",
    principles: [
      {
        title: "Consultative Design",
        description: "Every solution aligns with your business decisions and long-term goals.",
      },
      {
        title: "Client Engagement",
        description: "We become an extension of your team, helping you scale with speed and stability.",
      },
      {
        title: "Holistic View",
        description: "We gather, analyze, and simplify complex data to support smarter decision-making.",
      },
      {
        title: "Actionable Deliverables",
        description: "We bring insights to life with clear, visual formats that drive outcomes.",
      },
    ],
  },
};

const leadership = [
  {
    name: "Mr. Nitish Goyal",
    role: "Founder",
    bio: "Founder of RNR Consulting Pvt. Ltd. with over 12 years of experience in Information and Cyber Security. Built strong expertise across VAPT, Application Security, Infrastructure Security, and Regulatory Compliance. Led numerous security transformation projects—designing secure cloud and on-premise architectures, implementing SecOps pipelines, and streamlining enterprise-wide security programs. Known for building integrated risk and governance frameworks that align cybersecurity with business goals. Founded RNR in 2014 driven by the vision to make cybersecurity accessible, transparent, and strategic for businesses of all sizes.",
    email: "nitish@consultrnr.com",
  },
  {
    name: "Mr. Rajat",
    role: "Founder",
    bio: "Founder of RNR Consulting Pvt. Ltd. and visionary thought leader who serves as the backbone of the organization. Strong foundation in business strategy, sales, and marketing with sharp focus on growth, execution, and long-term sustainability. Leadership has been instrumental in shaping RNR's evolution into a trusted name in cybersecurity consulting. Deep belief in people and purpose, playing pivotal role in transforming RNR's vision into reality. Ability to turn ideas into meaningful outcomes reflected in setting goals, guiding teams, building lasting client relationships, and ensuring every project is delivered with care and commitment.",
    email: "rajatwahi.rw@gmail.com",
  },
  {
    name: "Mr. Jatin Sharma",
    role: "Co-Founder",
    bio: "Over 24 years of experience as a cybersecurity expert and trusted partner who truly understands the complexities organizations face in today's digital world. Journey driven by passion to help businesses protect their organization and build resilience. Includes five years as Management System Auditor and nine years training teams through complex processes with focus on clarity and collaboration. Expertise spans management consulting, brand building, certification, and regulatory compliance. As co-founder, has been steady force behind company's growth, guiding vision with care and commitment.",
    email: "jatin.sharma@consultrnr.com",
  },
  {
    name: "Mr. Arup",
    role: "Mentor - Strategist & Counsellor",
    bio: "Over 38 years of cross-industry experience bringing deep wisdom, strategic clarity, and calming presence to RNR. Proud alumnus of NYC University, IIT Delhi, and IIM Kolkata. Held leadership roles at global organizations such as Siemens, Boston Consulting Group, and BSI, where he shaped strategies, led transformations, and mentored countless professionals. Since RNR's inception, has been its guiding star—quietly guiding the team, shaping vision, and nurturing growth. Not only the mentor behind the mission but also the mind who helped give birth to the idea. Presence continues to inspire the team to think bigger, move smarter, and stay grounded.",
    email: "arupda@consultrnr.com",
  },
  {
    name: "Mrs. Shalu Yadav",
    role: "Member - Contributor since 2015",
    bio: "Dedicated cybersecurity professional with over 11 years of experience in Information and Cyber Security. Since joining RNR in 2015, has been key contributor to company's technical strength and success. Expertise spans wide range of security domains including vulnerability assessments, penetration testing, red teaming, DevSecOps implementations, and certification readiness. Successfully delivered more than 500 projects. Recognized for strong technical expertise, execution, and attention to detail. Calm nature, consistent delivery, and deep passion for cybersecurity have made her core strength of RNR team. Brings thoughtful approach to every engagement, helping clients stay protected and prepared.",
    email: "shalu.yadav@consultrnr.com",
  },
  {
    name: "Mr. Khasim Natankar Anwar",
    role: "Sr. Associate - Risk Management, PCI, IT Auditing",
    bio: "Over 15 years of experience in Risk Management, PCI Compliance, IT Auditing, and Information Security, bringing deep technical insight and strategic mindset to the team. Work focuses on designing and implementing robust security policies, standards, and frameworks that align IT security efforts with broader business goals. Led numerous initiatives ensuring security implementations meet both regulatory requirements and enterprise-level architectural standards. Broad exposure to wide range of IT technologies, governance methods, and service delivery models makes him trusted advisor. Plays key role in helping clients strengthen risk posture, meet compliance objectives, and align security with long-term business strategy.",
    email: "khasim.anwar@consultrnr.com",
  },
  {
    name: "Mr. Simanchala Sahu",
    role: "Member - Client & Vendor Dealing, Admin",
    bio: "Over 17 years of professional experience bringing deep expertise in client and vendor management, along with strong administrative and operational capabilities. Proven track record of building long-term strategic relationships, driving service excellence, and optimizing vendor partnerships to support business goals. Best known for ability to handle complex projects with ease—successfully managing negotiations, improving workflows, and enhancing operational efficiency across teams. Prior to joining RNR, spent a decade with NIIT Ltd. and six years with SBI Cards, gaining rich experience across sectors. As key member of RNR team, plays integral role ensuring seamless coordination between internal teams, clients, and external partners—supporting firm's continued growth and delivery excellence.",
    email: "simanchala.sahu@consultrnr.com",
  },
  {
    name: "Mr. Ashish Chauhan",
    role: "CISO",
    bio: "Seasoned cybersecurity leader with over 15 years of experience in protecting digital infrastructures and building secure, compliant organizations. As Chief Information Security Officer (CISO) at RNR, plays key role in leading firm's IT governance, risk management, and compliance strategy. Expertise spans designing and implementing resilient security architectures, managing advanced GRC platforms, and aligning regulatory requirements with business objectives. Conducted numerous high-impact risk assessments, security audits, and vendor evaluations across industries. Deeply committed to fostering culture that prioritizes security. Works closely with teams to raise cybersecurity awareness, oversees third-party risk management, and ensures governance practices are seamlessly integrated into daily operations. Dedication empowers organizations to remain resilient, well-prepared, and confident in navigating both current and future challenges.",
    email: "Ashish@consultrnr.com",
  },
];

const journeyMilestones = [
  {
    year: "2014",
    title: "The Beginning",
    description:
      "The Establishment of RNR Consulting Pvt. Ltd. was began as a small idea born from passion quickly turned into a mission. With a clear vision to provide cybersecurity, accessible, and impactful, RNR Consulting was founded. We didn't have a big office or a fancy setup — just a strong belief that cybersecurity should be easy to understand, trustworthy, and truly helpful. From day one, our goal was clear: to protect not just data and systems, but the people and dreams behind them.",
  },
  {
    year: "2016",
    title: "First Footprint",
    description:
      "In 2016, we established our first physical office — a milestone made possible by the trust, resilience, and unwavering support of our clients. It was more than just setting up a workspace; it was a reflection of the confidence our clients placed in us and our commitment to serve with purpose. That modest space became the foundation where ideas turned into action, and relationships turned into lasting partnerships.",
  },
  {
    year: "2019",
    title: "Strength in People",
    description:
      "By 2019, RNR Consulting had grown into a team of 50+ passionate professionals, proudly serving over 100 clients across industries. But for us, growth was never just about numbers — it was about trust, care, and the meaningful relationships we built along the way. Each new team member added strength to our purpose. Each client engagement deepened our commitment.",
  },
  {
    year: "2020",
    title: "National Recognition",
    description:
      "In 2020, we were empaneled by CERT-In — a major milestone made possible by the continued trust of our clients and the dedication of our team. This achievement was more than just a certification. It reflected the confidence our clients placed in us and the hard work our team put in every step of the way. In a time of growing digital threats, this recognition proved that we were trusted, capable, and ready to protect organizations at a national level.",
  },
  {
    year: "2022",
    title: "Milestone",
    description:
      "By 2022, RNR had successfully delivered over 1000 projects and secured the trust of 200+ organizations — ranging from agile start-ups to large enterprises and state agencies. But for us, these numbers tell more than just a growth story — they reflect the trust we've earned, the industries we've served, and the lasting impact we've made.",
  },
  {
    year: "2025",
    title: "Strengthening Our Presence",
    description:
      "2025 marked a phase of meaningful expansion and strengthened relationships. We extended our reach across new regions, bringing us closer to our clients and enabling more responsive, localized support. Our high client retention reflected the continued trust in our approach and delivery.",
  },
];

function JourneyTimeline() {
  const journeyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"],
  });
  const journeyLineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={journeyRef} className="relative pl-8">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-border/40" />
      <motion.div
        aria-hidden="true"
        className="absolute left-2 top-0 w-px bg-gradient-to-b from-primary/80 via-primary/40 to-transparent"
        style={{
          transformOrigin: "top",
          scaleY: journeyLineScaleY,
          height: "100%",
        }}
      />

      <div className="space-y-6">
        {journeyMilestones.map((item, index) => (
          <motion.div
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: Math.min(index * 0.04, 0.2) }}
            className="relative"
          >
            <div className="absolute -left-[6px] top-5 w-3 h-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.18)]" />
            <div className="rounded-2xl border border-border/40 bg-background/70 p-5 overflow-hidden">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="text-xs font-medium text-primary">{item.year}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [expandedBios, setExpandedBios] = useState({});

  const toggleBio = (name) => {
    setExpandedBios(prev => ({ ...prev, [name]: !prev[name] }));
  };

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
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Cybersecurity & Process Improvement Experts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              We are a consulting firm dedicated to helping organizations strengthen their
              cybersecurity posture while improving the processes that support it. Our focus
              is on practical, business-aligned security that actually works in the real
              world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {highlightBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 border border-border/40 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  <CheckCircle className="w-3 h-3 text-primary" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="who" className="w-full">
            <TabsList className="grid h-12 w-full grid-cols-2 md:grid-cols-4 rounded-xl bg-muted/60 p-1">
              <TabsTrigger value="who" className="rounded-lg">
                Who We Are
              </TabsTrigger>
              <TabsTrigger value="journey" className="rounded-lg">
                Our Journey
              </TabsTrigger>
              <TabsTrigger value="philosophy" className="rounded-lg">
                Our Philosophy
              </TabsTrigger>
              <TabsTrigger value="team" className="rounded-lg">
                Our Team
              </TabsTrigger>
            </TabsList>

            <TabsContent value="who" className="mt-10">
              <div className="space-y-16">
                {/* Who We Are */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                      Who We Are
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        The firm began in 2014 with a clear objective: provide organizations
                        with reliable cybersecurity and management consulting support that is
                        grounded in real operational challenges.
                      </p>
                      <p>
                        Over the years we have helped clients design governance frameworks,
                        meet regulatory expectations, and strengthen technical controls across
                        applications, infrastructure, and cloud environments.
                      </p>
                      <p>
                        Today we work with organizations across multiple industries, acting as
                        a long-term partner for security, risk, and process improvement
                        initiatives.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/25 via-primary/5 to-transparent border border-primary/40 flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,_rgba(56,189,248,0.35),_transparent_55%),radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.3),_transparent_55%)]" />
                    <div className="relative flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-background/80 flex items-center justify-center border border-primary/40 shadow-lg shadow-primary/30">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
                        Realistic • Reliable
                      </p>
                      <p className="text-sm text-muted-foreground max-w-xs text-center">
                        Blending cyber, compliance, and process thinking to build resilience
                        into everyday operations.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Values */}
                <div>
                  <div className="text-center mb-12">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Our Values
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                      The principles that guide everything we do.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative p-6 rounded-2xl bg-background/60 border border-border/40 overflow-hidden"
                      >
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)]" />
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="journey" className="mt-10">
              <div className="space-y-10">
                <div className="max-w-3xl">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Our Journey
                  </h2>
                  <p className="text-muted-foreground">
                    At RNR Consulting, our journey is not just marked by milestones — it's
                    shaped by people. Every challenge we faced became a stepping stone. Every
                    client we served became a trusted partner. And every step forward was
                    guided by a shared vision i.e., to build a safer, stronger digital future,
                    together.
                  </p>
                </div>

                <div className="grid lg:grid-cols-[2fr,3fr] gap-10 items-start">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-muted/40 to-background/40 border border-border/40 p-5"
                      >
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_0_0,_hsl(var(--primary))_0,_transparent_55%)]" />
                        <div className="relative">
                          <div className="font-display text-3xl font-bold text-primary mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <JourneyTimeline />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="philosophy" className="mt-10">
              <div className="space-y-12">
                {/* Philosophy Intro */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto"
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                    Our Philosophy
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                    {philosophy.intro}
                  </p>
                </motion.div>

                {/* Mission, Vision, Goals */}
                <div className="grid md:grid-cols-3 gap-6">
                  {philosophy.sections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative rounded-2xl border border-border/40 bg-background/70 p-6 overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)]" />
                      <div className="relative">
                        <h3 className="font-display text-lg font-semibold text-primary mb-3">
                          {section.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* How We Work */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {philosophy.howWeWork.title}
                    </h3>
                    <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                      {philosophy.howWeWork.intro}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {philosophy.howWeWork.principles.map((principle, index) => (
                      <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="relative group"
                      >
                        <div className="relative h-full rounded-2xl border border-border/40 bg-gradient-to-br from-background/80 to-background/40 p-5 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)] transition-opacity duration-300" />
                          <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <h4 className="font-display text-sm font-semibold text-foreground mb-2">
                              {principle.title}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {principle.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-10">
              <div className="space-y-16">
                {/* Leadership */}
                <div>
                  <div className="text-center mb-12">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Leadership Team
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                      A multidisciplinary team blending governance, risk, technology, and
                      people enablement.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {leadership.map((person, index) => (
                      <motion.div
                        key={person.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative p-6 rounded-2xl bg-background/70 border border-border/40 overflow-hidden"
                      >
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top,_hsl(var(--primary))_0,_transparent_55%)]" />
                        <div className="relative flex flex-col items-center text-center gap-2">
                          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mb-1">
                            <Users className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-display text-base font-semibold text-foreground">
                            {person.name}
                          </h3>
                          <p className="text-[11px] uppercase tracking-wide text-primary">
                            {person.role}
                          </p>
                          <p
                            className={`text-xs text-muted-foreground leading-relaxed ${
                              expandedBios[person.name] ? "" : "line-clamp-3"
                            }`}
                          >
                            {person.bio}
                          </p>
                          <button
                            type="button"
                            onClick={() => toggleBio(person.name)}
                            className="text-[10px] text-primary hover:underline mt-1"
                          >
                            {expandedBios[person.name] ? "Read Less" : "Read More"}
                          </button>
                          {person.email && (
                            <a
                              href={`mailto:${person.email}`}
                              className="text-[10px] text-primary hover:underline inline-block"
                            >
                              {person.email}
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center p-12 rounded-2xl bg-muted/30 border border-border/30"
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Join Our Mission
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    We're always looking for talented security professionals to join our team.
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2"
                    asChild
                  >
                    <Link to="/careers">
                      View Open Positions <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
}