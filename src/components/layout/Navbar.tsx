import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  ShieldCheck,
  Users,
  ClipboardCheck,
  AppWindow,
  Cloud,
  Smartphone,
  GraduationCap,
  Server,
  UserCog,
  Briefcase,
  BadgeCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LogoLight from "@/data/image.png";
import LogoDark from "@/data/imagedarktheme.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "GRC", href: "/services/governance-risk-compliance" },
      { label: "Third-Party Risk (TPRM)", href: "/services/third-party-risk-management" },
      { label: "BCMS", href: "/services/business-continuity-management" },
      { label: "Application Security", href: "/services/application-security" },
      { label: "Cloud Security", href: "/services/cloud-security" },
      { label: "Mobile App Security", href: "/services/mobile-app-security" },
      { label: "Training & Awareness", href: "/services/training-awareness" },
      { label: "Infrastructure Security", href: "/services/infrastructure-security" },
      { label: "vCISO Services", href: "/services/vciso" },
      { label: "Resource as a Service", href: "/services/resource-as-service" },
      { label: "Data Protection & Privacy", href: "/services/dpdp" },
    ],
  },
  { label: "Threat Map", href: "/threat-map" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(stored);
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const getServiceIcon = (href: string) => {
    const map: Record<string, React.ElementType> = {
      "/services/governance-risk-compliance": ShieldCheck,
      "/services/third-party-risk-management": Users,
      "/services/business-continuity-management": ClipboardCheck,
      "/services/application-security": AppWindow,
      "/services/cloud-security": Cloud,
      "/services/mobile-app-security": Smartphone,
      "/services/training-awareness": GraduationCap,
      "/services/infrastructure-security": Server,
      "/services/vciso": UserCog,
      "/services/resource-as-service": Briefcase,
      "/services/dpdp": BadgeCheck,
    };
    return map[href] ?? ShieldCheck;
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 rounded-full bg-background/70 backdrop-blur-2xl border border-border/40 shadow-[0_18px_45px_rgba(0,0,0,0.55)] px-4 lg:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <img
                src={theme === "dark" ? LogoDark : LogoLight}
                alt="Company logo"
                className={cn(
                  "h-10 w-auto object-contain drop-shadow-lg transition-transform",
                  theme === "dark"
                    ? "scale-110 group-hover:scale-[1.15]"
                    : "group-hover:scale-105"
                )}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    isActive(item.href) 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      openDropdown === item.label && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-[520px] bg-background/95 backdrop-blur-xl border border-border/50 rounded-lg shadow-xl overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {item.children.map((child) => {
                          const Icon = getServiceIcon(child.href);
                          return (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={cn(
                                "flex items-start gap-3 rounded-md border border-border/30 bg-background/40 px-3 py-3 text-sm transition-colors",
                                isActive(child.href)
                                  ? "text-primary bg-primary/10 border-primary/30"
                                  : "text-foreground hover:bg-muted/50"
                              )}
                            >
                              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted/40 text-foreground">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="leading-snug">
                                <span className="block font-medium">{child.label}</span>
                                <span className="block text-xs text-muted-foreground">View details</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Theme toggle + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-9 w-16 items-center rounded-full border border-border/60 bg-background/70 px-1 text-xs font-medium shadow-sm shadow-black/10 transition-colors hover:border-primary/60"
            >
              <span
                className={cn(
                  "inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] transition-transform",
                  theme === "dark" ? "translate-x-7" : "translate-x-0"
                )}
              >
                {theme === "dark" ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
              </span>
            </button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
              asChild
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground rounded-full bg-background/40 border border-border/40 backdrop-blur"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/90 backdrop-blur-2xl border-b border-border/30"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium rounded-md transition-colors",
                      isActive(item.href) 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="relative inline-flex h-9 flex-1 items-center rounded-full border border-border/60 bg-background/70 px-1 text-xs font-medium shadow-sm shadow-black/10 transition-colors hover:border-primary/60"
                >
                  <span
                    className={cn(
                      "inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] transition-transform",
                      theme === "dark" ? "translate-x-[120%]" : "translate-x-0"
                    )}
                  >
                    {theme === "dark" ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                  </span>
                </button>
                <Button className="flex-1 bg-primary text-primary-foreground" asChild>
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
