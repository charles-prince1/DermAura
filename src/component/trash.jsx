import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  ArrowUp,
  Sparkles,
  Zap,
  Shield,
  BarChart3,
  Users,
  Workflow,
  Cpu,
  Star,
  Play,
  Check,
} from "lucide-react";

export default function LandingPage() {
  // --- States ---
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [billingCycle, setBillingCycle] = useState("annual"); // 'monthly' | 'annual'
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Toggle Dark Mode Class on root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Back to Top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() !== "") {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  // --- Data Structures ---
  const logos = ["AcmeCorp", "GlobalTech", "ApexLabs", "Innovate", "HyperPulse", "VortexAI"];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "Smart Workflow Automation",
      desc: "Automatically sequence repetitive tasks and trigger actions based on context.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-indigo-500" />,
      title: "AI Project Co-Pilot",
      desc: "Get real-time insights, task breakdowns, and automated summaries for projects.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      title: "Predictive Analytics",
      desc: "Forecast bottlenecks and estimate project timelines with precision precision.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Real-time Collaboration",
      desc: "Sync work instantly across global teams with contextual AI comment summaries.",
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
      title: "Enterprise Governance",
      desc: "Bank-grade encryption, SOC2 compliance, and granular role permissions.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: "Custom AI Agent Builder",
      desc: "Deploy tailored AI agents to process custom documents and handle workflows.",
    },
  ];

  const stats = [
    { value: "99.9%", label: "Platform Uptime" },
    { value: "10M+", label: "Tasks Automated Daily" },
    { value: "4.8/5", label: "Customer Satisfaction" },
    { value: "65%", label: "Average Time Saved" },
  ];

  const solutions = [
    {
      title: "For Product Teams",
      desc: "Streamline sprint planning, auto-generate user stories, and map product dependencies effortless.",
    },
    {
      title: "For Marketing Operations",
      desc: "Automate campaign tracking, content scheduling, and cross-channel performance reporting.",
    },
    {
      title: "For Executive Leadership",
      desc: "Gain high-level visibility over strategic initiatives with real-time AI status summaries.",
    },
  ];

  const testimonials = [
    {
      quote: "NOVA completely transformed how our engineering teams handle project backlogs. The automated breakdowns alone saved us hours.",
      author: "Sarah Jenkins",
      role: "VP of Engineering at ApexLabs",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      quote: "The custom AI agents feel like hiring 10 extra project managers. Highly recommended for scaling fast-growing startups.",
      author: "Marcus Vance",
      role: "Founder & CEO, HyperPulse",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      quote: "We reduced context switching by 50% across our marketing departments. NOVA is our central operational hub now.",
      author: "Elena Rostova",
      role: "Head of Marketing, GlobalTech",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      desc: "Perfect for individuals and small teams starting with AI.",
      priceMonthly: 19,
      priceAnnual: 15,
      features: ["Up to 5 team members", "1,000 AI Credits/mo", "Basic Automation Builder", "Standard Analytics", "Email Support"],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Pro",
      desc: "Ideal for growing organizations scaling automation.",
      priceMonthly: 49,
      priceAnnual: 39,
      features: ["Up to 25 team members", "10,000 AI Credits/mo", "Advanced Workflow Engine", "Custom AI Agent Builder", "Priority Support", "SSO Authentication"],
      cta: "Start 14-Day Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "Custom governance and scale for large organizations.",
      priceMonthly: 119,
      priceAnnual: 99,
      features: ["Unlimited team members", "Unlimited AI Credits", "Dedicated AI Model Fine-tuning", "SOC2 & HIPAA Compliance", "Dedicated Success Manager", "24/7 SLA Support"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "How does NOVA differ from traditional project management tools?",
      a: "NOVA isn't just a database for tasks—it uses proactive AI agents to automate task assignments, draft updates, predict bottlenecks, and organize workflows automatically.",
    },
    {
      q: "Is our company data secure when using NOVA's AI?",
      a: "Yes. Your data is encrypted at rest and in transit. We never use client data to train public LLM models, ensuring complete enterprise privacy.",
    },
    {
      q: "Can I integrate NOVA with our existing tools?",
      a: "Absolutely. NOVA connects natively with GitHub, Slack, Jira, Figma, Google Workspace, Notion, and 2,000+ app integrations via API.",
    },
    {
      q: "What happens if we exceed our AI credits?",
      a: "You can purchase extra credit packs or upgrade your tier anytime. We never pause your core workspace access.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes, all paid plans come with a full-featured 14-day free trial with no credit card required.",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      {/* 1. NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors ${darkMode ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <Sparkles className="w-6 h-6 text-indigo-500" />
            <span>NOVA</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#features" className="hover:text-indigo-500 transition-colors">Features</a>
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-indigo-500 transition-colors">How It Works</a>
            <a href="#solutions" className="hover:text-indigo-500 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-indigo-500 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-indigo-500 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? "hover:bg-slate-800 text-yellow-400" : "hover:bg-slate-100 text-slate-600"}`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#pricing" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md transition-all">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-800"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 2. MOBILE HAMBURGER MENU */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pt-2 pb-6 border-b flex flex-col gap-4 font-medium text-base ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Platform
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Build Better. <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Work Smarter.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          NOVA is an AI-powered productivity platform that helps high-performing teams manage projects, automate repetitive tasks, and collaborate effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setVideoModalOpen(true)}
            className={`w-full sm:w-auto px-8 py-3.5 text-base font-semibold border rounded-xl transition-all flex items-center justify-center gap-2 ${
              darkMode ? "border-slate-800 hover:bg-slate-900" : "border-slate-300 hover:bg-slate-100"
            }`}
          >
            <Play className="w-4 h-4 fill-current" /> Watch Demo
          </button>
        </div>
      </section>

      {/* 3. TRUSTED BY / LOGOS */}
      <section className={`py-12 border-y ${darkMode ? "border-slate-800/80 bg-slate-900/40" : "border-slate-200 bg-slate-100/50"}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs uppercase font-semibold tracking-wider text-slate-500 mb-8">
            Trusted by forward-thinking teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 font-bold text-xl tracking-wider">
            {logos.map((logo, idx) => (
              <span key={idx} className="hover:opacity-100 transition-opacity cursor-pointer">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES SECTION */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supercharge Your Productivity</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Everything you need to automate workflows and optimize operational throughput.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                darkMode
                  ? "bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:shadow-indigo-500/10"
                  : "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-indigo-500/10"
              }`}
            >
              <div className={`p-3 rounded-xl w-fit mb-4 ${darkMode ? "bg-slate-800" : "bg-indigo-50"}`}>{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PRODUCT / ABOUT SECTION */}
      <section id="about" className={`py-20 border-y ${darkMode ? "border-slate-800/80 bg-slate-900/30" : "border-slate-200 bg-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-indigo-500 font-semibold text-sm uppercase tracking-wider">About NOVA</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">Designed to replace modern workspace fragmentation.</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Modern enterprises rely on dozens of disjointed SaaS applications. NOVA centralizes your communications, tracking, and execution into an intelligence layer that executes work on your behalf.
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Automated context synchronization
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Multi-modal task processing
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" /> Zero manual status updates
              </li>
            </ul>
          </div>
          <div className={`p-8 rounded-2xl border shadow-2xl ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            <div className="flex items-center justify-between border-b pb-4 mb-4 border-slate-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-slate-500">nova-agent-v2.4</span>
            </div>
            <p className="text-xs text-indigo-400 font-mono mb-2">$ nova analyze --sprint-health</p>
            <div className="font-mono text-sm space-y-2 text-slate-300">
              <p>✔ Analyzing 142 tickets across 4 repositories...</p>
              <p>✔ Bottleneck detected: Backend API dependencies</p>
              <p className="text-green-400">⚡ Auto-generated 3 sub-tasks & reassigned to team lead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How NOVA Works</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Get up and running in three simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Connect Workspace", desc: "Integrate your existing tools in one click with secure SSO and OAuth protocols." },
            { step: "02", title: "Configure AI Rules", desc: "Select custom templates or build autonomous agents tailored to your business logic." },
            { step: "03", title: "Scale Efficiency", desc: "Let NOVA automate workflow execution while you focus on creative strategy." },
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/20">
              <span className="text-5xl font-extrabold text-indigo-500/20 absolute top-4 right-4">{item.step}</span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. STATISTICS */}
      <section className={`py-16 border-y ${darkMode ? "border-slate-800/80 bg-indigo-950/20" : "border-slate-200 bg-indigo-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl sm:text-5xl font-extrabold text-indigo-500 mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SOLUTIONS / USE CASES */}
      <section id="solutions" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tailored for Modern Teams</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Discover how different functions leverage NOVA.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className={`p-8 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
              <h3 className="text-xl font-bold mb-3 text-indigo-400">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className={`py-24 border-y ${darkMode ? "border-slate-800/80 bg-slate-900/30" : "border-slate-200 bg-slate-100/50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by Teams Worldwide</h2>
            <p className="text-slate-400">See what tech leaders have to say about NOVA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`p-8 rounded-2xl border flex flex-col justify-between ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                <div>
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm italic leading-relaxed mb-6">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-sm">{t.author}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRICING SECTION */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 mb-8">Choose the perfect plan for your team size and workflow requirements.</p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-indigo-400" : "text-slate-500"}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="w-14 h-8 bg-indigo-600 rounded-full p-1 transition-colors relative"
              aria-label="Toggle Billing Cycle"
            >
              <div className={`w-6 h-6 bg-white rounded-full transition-transform ${billingCycle === "annual" ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-sm font-semibold ${billingCycle === "annual" ? "text-indigo-400" : "text-slate-500"}`}>
              Annual <span className="text-xs text-indigo-500 font-normal">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => {
            const price = billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={i}
                className={`p-8 rounded-2xl border flex flex-col justify-between relative transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? "border-indigo-500 shadow-indigo-500/10 bg-gradient-to-b from-indigo-950/20 to-transparent"
                    : darkMode
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs uppercase font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mb-6">{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold">${price}</span>
                    <span className="text-slate-400 text-sm">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-indigo-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                      : darkMode
                      ? "bg-slate-800 hover:bg-slate-700 text-white"
                      : "bg-slate-200 hover:bg-slate-300 text-slate-900"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section id="faq" className={`py-24 border-t ${darkMode ? "border-slate-800/80 bg-slate-900/30" : "border-slate-200 bg-slate-100/50"}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about the NOVA platform.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`border rounded-xl transition-colors ${darkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-white"}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center font-semibold text-lg"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 border border-indigo-500/30 rounded-3xl p-10 sm:p-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">Ready to transform your productivity?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-base sm:text-lg">
            Join thousands of modern product teams building faster with NOVA.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-xl transition-all"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* 13. FOOTER & NEWSLETTER */}
      <footer className={`border-t pt-16 pb-12 ${darkMode ? "border-slate-800 bg-slate-950" : "border-slate-200 bg-slate-900 text-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              <span>NOVA</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Empowering organizations with autonomous AI agents and modern task automation.
            </p>
            {/* Newsletter Validation Form */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="px-4 py-2.5 rounded-lg text-sm bg-slate-800 border border-slate-700 focus:outline-none focus:border-indigo-500 text-white flex-1"
              />
              <button type="submit" className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm rounded-lg text-white transition-colors">
                Subscribe
              </button>
            </form>
            {newsletterSuccess && <p className="text-xs text-green-400 mt-2">Thanks for subscribing!</p>}
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#solutions" className="hover:text-white">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-white">Enterprise</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#faq" className="hover:text-white">Documentation</a></li>
              <li><a href="#faq" className="hover:text-white">API Reference</a></li>
              <li><a href="#faq" className="hover:text-white">Guides</a></li>
              <li><a href="#faq" className="hover:text-white">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NOVA Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Security</a>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 transition-all z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* DEMO VIDEO MODAL BONUS */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <button onClick={() => setVideoModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-4">NOVA Product Demo</h3>
            <div className="aspect-video bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800">
              <p className="text-slate-500 font-mono text-sm">[ Demo Video Stream Placeholder ]</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}