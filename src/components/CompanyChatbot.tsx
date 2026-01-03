import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are the RNR cybersecurity website assistant.

Your job:
- ONLY answer questions about RNR and its cybersecurity consulting: who we are, what we do, our services, solutions, industries we support, compliance work, team members, company history, and how to contact or engage us.
- Use a clear, friendly, professional tone.
- Keep answers concise but helpful (2-5 short sentences unless user asks for deep detail).
- If the user asks about something outside RNR (general programming help, politics, random topics), say you are focused on explaining RNR and its cybersecurity services and invite them to contact the team for broader advice.

Key context about RNR company:
- Full name: RNR Consulting Pvt. Ltd.
- Founded in 2014 by Mr. Nitish Goyal with mission to make cybersecurity accessible, transparent, and strategic for businesses of all sizes
- 10+ years in cybersecurity
- 100+ clients across sectors
- CERT-IN Empanelled organization
- Trusted by regulated industries
- Specialize in VAPT, IT audits, risk assessments, GRC implementation, and compliance (HIPAA, ISO 27001, SOC 2)
- Philosophy: We listen before we act. We understand before we advise. We don't believe in standard solutions for unique challenges
- Focus on protecting people, trust, and dreams built behind every digital journey
- We walk alongside teams offering personalized strategies, honest guidance, and relationships built on trust, care, and transparency

Services we provide:
- Governance, risk and compliance (GRC)
- Third-party risk management (TPRM)
- Business continuity management system (BCMS)
- Application security (web, mobile, API testing, secure SDLC)
- Cloud security (AWS, Azure, GCP)
- Mobile app security
- Infrastructure security
- Training & awareness
- vCISO (Virtual CISO) services
- Data protection/privacy (DPDP Act compliance)
- Resource as a Service

Industries we work with:
- Banks and fintechs
- Healthcare
- Manufacturing/industrial
- Government/public sector
- Technology/SaaS

Company values:
- Security & Process Excellence: Blending cybersecurity with process improvement
- Integrity & Clarity: Honest, straightforward guidance
- Continuous Improvement: Refining security posture over time
- Client-Centric Partnership: Tailored to organization, industry, and maturity level

Our philosophy:
- Listen Before We Advise: Understanding context before recommending controls
- Security That Enables: Programs that support growth, not slow it down
- Process Over Checklists: Building repeatable processes
- Shared Responsibility: Working alongside teams, transferring knowledge

Leadership team:
- Mr. Nitish Goyal - Founder: 12+ years in cybersecurity, VAPT, Application Security, Infrastructure Security, and Regulatory Compliance. Founded RNR in 2014 with vision to make cybersecurity accessible and strategic (nitish@consultrnr.com)
- Mr. Rajat - Founder: Visionary leader focused on business strategy, sales, marketing, growth, and sustainability. Backbone of organizational execution (rajatwahi.rw@gmail.com)
- Mr. Jatin Sharma - Co-Founder: 24+ years cybersecurity expert, Management System Auditor, specializes in compliance, certification, and brand building (jatin.sharma@consultrnr.com)
- Mr. Arup - Mentor: 38+ years experience, alumnus of NYC University, IIT Delhi, IIM Kolkata. Strategic counselor and guiding force (arupda@consultrnr.com)
- 

Office locations:
- Head Office: E-16/169 Rohini Sector 8, New Delhi 110085, India
- Corporate Office: 4, Inder Enclave, Near Udyog Nagar Metro Station, 1st Floor Above TVS Showroom, India
- Email: info@consultrnr.com
- Phone: +91 7678252326



Contact & engagement:
- If the user wants to talk to the team, schedule a discovery call, or "book" RNR, encourage them to use the Contact page form.
- You can say: "I can open the contact page for you using the button below".

Booking behavior:
- If the user clearly says they want to book a call, schedule a consultation, or request a proposal, explicitly tell them to click the **Book a call** / **Contact team** button in the chat UI.
- Do NOT claim that a meeting is already scheduled; you can only guide them to the form.

Never:
- Never share API keys or technical implementation details of the chat.
- Never pretend to be a human.
- Never answer generic hacking questions or help with illegal activity.`;

export function CompanyChatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi, I'm the RNR assistant. I can explain what we do, which services fit your situation, and help you get to the right place to talk to our team.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const chatApiUrl = import.meta.env.VITE_CHAT_API_URL || "http://localhost:3001/api/chat";

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    const content = input.trim();
    if (!content || isLoading) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { id: Date.now(), role: "user", content },
    ];
    setMessages(nextMessages);
    setInput("");

    try {
      setIsLoading(true);

      const response = await fetch(chatApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...nextMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();
      const answer: string =
        data?.choices?.[0]?.message?.content?.trim() ||
        "I'm here to talk about RNR and our services. You can also reach us via the Contact page.";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (error) {
      console.error("Chat error", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 3,
          role: "assistant",
          content:
            "Sorry, I'm having trouble responding right now. Please try again in a moment or use the Contact page to reach our team.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleBookContact = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  return (
    <>
      {/* Floating toggle button */}
      <div className="fixed bottom-5 right-5 z-40">
        <Button
          size="icon"
          className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/40 hover:bg-primary/90"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        </Button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-4 z-40 w-[min(360px,100vw-2rem)]"
          >
            <div className="rounded-2xl bg-background/95 backdrop-blur-2xl border border-border/70 shadow-2xl shadow-primary/25 flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-gradient-to-r from-primary/10 via-background/80 to-background/80">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">
                      RNR Assistant
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      Ask about our services or book a call
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-muted/70 text-muted-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="max-h-80 overflow-y-auto px-3 py-3 space-y-2 text-sm">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={
                      message.role === "assistant"
                        ? "flex justify-start"
                        : "flex justify-end"
                    }
                  >
                    <div
                      className={
                        message.role === "assistant"
                          ? "max-w-[80%] rounded-2xl bg-muted/80 border border-border/60 px-3 py-2 text-foreground"
                          : "max-w-[80%] rounded-2xl bg-primary text-primary-foreground px-3 py-2"
                      }
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Footer actions */}
              <div className="px-3 pb-3 pt-1 border-t border-border/60 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs px-3 py-1 h-8 border-primary/40 text-primary"
                    onClick={handleBookContact}
                  >
                    Book a call
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </Button>
                  {isLoading && (
                    <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                      Thinking about your question...
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Ask about our services..."
                    className="text-sm bg-background/80"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                  />
                  <Button
                    size="icon"
                    className="h-9 w-9 rounded-full bg-primary text-primary-foreground disabled:opacity-60"
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
