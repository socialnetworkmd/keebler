"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Cloud,
  Cpu,
  Factory,
  FileCheck,
  FolderKanban,
  Handshake,
  HeartPulse,
  Home,
  Lightbulb,
  ShoppingBag,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

const trustMetrics = [
  "Target Client Revenue: $2M - $200M+",
  "Nationwide Engagements",
  "CPA-Led (Non-Tax & Audit)",
];

const services = [
  {
    pillar: "Pillar 1",
    title: "Fractional CFO & FP&A Advisory",
    icon: BarChart3,
    description:
      "Practical, ongoing financial leadership to drive operational success.",
    bullets: [
      "Board-level advisory and monthly financial reviews.",
      "Development of operational KPIs, dashboards, and financial modeling.",
      "Cash flow forecasting and strategic budgeting.",
      "Interim leadership during executive transitions.",
    ],
  },
  {
    pillar: "Pillar 2",
    title: "Transaction, Capital & Debt Advisory (M&A)",
    icon: Handshake,
    description: "Guiding the full lifecycle of a deal with CPA precision.",
    bullets: [
      "Sell/Buy-Side Readiness: Quality of Earnings (QoE) prep, EBITDA normalization, and financial packaging.",
      "Capital Sourcing: Securing growth capital, cash flow loans, and asset-based debt through our lender network.",
      "Deal Execution: Managing the process from LOI through due diligence and successful close.",
    ],
  },
  {
    pillar: "Pillar 3",
    title: "Financial Transformation & Systems (Software)",
    icon: Cpu,
    description:
      "Modernizing infrastructure so your systems tell the exact same story your numbers do.",
    bullets: [
      "ERP and accounting software selection and implementation.",
      "Process redesign to overhaul back-office visibility and accuracy.",
      "Integration of reporting, controls, and KPIs.",
    ],
  },
  {
    pillar: "Pillar 4",
    title: "Technical Accounting & Clean-Up",
    icon: FileCheck,
    description:
      "Expert CPA capabilities for complex challenges (Exclusive of Tax & Audit).",
    bullets: [
      "Pre-audit readiness and historic accounting clean-up.",
      "GAAP alignment and complex accrual conversions.",
      "Structuring charts of accounts for multi-entity or franchised businesses.",
    ],
  },
];

const engagementModels = [
  {
    title: "Project-Based Execution",
    icon: FolderKanban,
    description:
      "For specific initiatives like an ERP implementation, accounting clean-up, or leading an M&A transaction.",
  },
  {
    title: "Retained / Fractional Leadership",
    icon: Users,
    description:
      "Ongoing monthly partnerships where we serve as your Fractional CFO, lead FP&A, or sit on your advisory board.",
  },
  {
    title: "Advisory & Strategy",
    icon: Lightbulb,
    description:
      "High-level, on-demand consulting for family offices, PE groups, and HNWI evaluating investments or portfolio performance.",
  },
];

const ownershipStructures = [
  "Founder & Privately-Owned Businesses",
  "Private Equity Portfolio Companies",
  "Family Offices & High-Net-Worth Individuals (HNWI)",
  "Independent Sponsors & Search Funds",
];

const industryExpertise = [
  {
    title: "Manufacturing & Distribution",
    icon: Factory,
    text: "Navigating complex inventory costing, supply chain financing, and operational KPIs.",
  },
  {
    title: "Software & Technology (SaaS)",
    icon: Cloud,
    text: "Managing recurring revenue models, cash burn rates, and capitalized software development costs.",
  },
  {
    title: "Home Services & Franchising",
    icon: Home,
    text: "Standardizing multi-entity accounting, geographic roll-ups, and unit-level economics.",
  },
  {
    title: "Healthcare & Medical Practices",
    icon: HeartPulse,
    text: "Streamlining back-office financial processes and executing practice consolidations.",
  },
  {
    title: "Consumer Products (CPG) & Retail",
    icon: ShoppingBag,
    text: "Optimizing gross margins, vendor negotiations, and omnichannel profitability.",
  },
  {
    title: "Professional & B2B Services",
    icon: Briefcase,
    text: "Structuring partnership accounting, utilization metrics, and working capital management.",
  },
];

const distinctAdvantages = [
  {
    title: "Nearly 20 Years of Experience",
    body: "Deep leadership spanning day-to-day FP&A, accounting transformations, complex M&A transactions, and capital raises.",
  },
  {
    title: "Scalable, Outcome-Driven Advisory Model",
    body: "We flex our engagement to match your needs—from monthly retained advisory and KPI reviews to intense, project-based system implementations. Practical CFO leadership aligned to your growth stage.",
  },
  {
    title: "Operational & Data-Backed Strategy",
    body: "We don't just report the numbers; we interpret them. We tie our strategy to clear, measurable KPIs that drive enterprise value and operational efficiency.",
  },
  {
    title: "Specialized CPA Capabilities (Exclusive of Tax & Audit)",
    body: "We bring the technical accounting rigor required for historic clean-ups, GAAP alignment, and diligence readiness, functioning as a powerful complement to your existing tax and audit providers.",
  },
];

export default function HomePage() {
  const handleConsultationSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");
    const subject = encodeURIComponent("Confidential consultation request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:jkeebler@keebleradvisor.com?subject=${subject}&body=${body}`;
  };

  return (
    <main id="home" className="scroll-smooth bg-[#F8F9FA] text-[#111827]">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0e2f4d] to-[#102a43] px-6 py-6 text-white md:px-10 md:py-8">
        <Image
          src="/images/hero-atlanta-skyline.png"
          alt="Atlanta skyline background"
          fill
          className="pointer-events-none z-0 object-cover object-center opacity-25"
          priority
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#0A2540]/70" />
        <div className="pointer-events-none absolute inset-0 z-10 opacity-20 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_50%,transparent_100%)]" />
        <motion.div
          initial={false}
          animate={{ opacity: 0.28, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="pointer-events-none absolute -left-12 top-20 z-10 h-64 w-64 rounded-full bg-[#166534] blur-3xl"
        />
        <motion.div
          initial={false}
          animate={{ opacity: 0.22, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
          className="pointer-events-none absolute -right-16 bottom-12 z-10 h-72 w-72 rounded-full bg-amber-300 blur-3xl"
        />

        <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <Badge className="bg-white/10 px-4 py-1.5 text-sm font-medium text-white hover:bg-white/15">
              Nationwide Financial Leadership | Atlanta, Georgia
            </Badge>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Strategic Financial Leadership &amp; Execution for Every Stage of Growth
            </h1>
            <p className="max-w-2xl text-lg text-slate-200 md:text-xl">
              Keebler Advisors is a CPA-led advisory firm providing comprehensive financial solutions for Business Owners, Private Equity Groups, Family Offices, and High-Net-Worth Individuals. From monthly fractional CFO oversight and FP&amp;A, to complex M&amp;A transactions and software implementations, we deliver deal-tested expertise without the fixed overhead.
            </p>
          </div>

          <div>
            <Card className="border-white/10 bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#0A2540]">
                  Financial Clarity for High-Stakes Growth Decisions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-700">
                <div className="rounded-lg border bg-white p-4">
                  <p className="font-medium text-[#0A2540]">Client Size Range</p>
                  <p className="mt-1 text-2xl font-bold text-[#166534]">$2M-$200M+</p>
                  <p className="text-xs text-slate-500">
                    Revenue depending on project scope and complexity
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-[#0A2540]">
                    Thinking about selling, raising capital, or transforming your finance function? Let&apos;s map your path forward.
                  </p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <Button asChild className="w-full bg-[#166534] text-white hover:bg-[#14532d]">
                      <Link href="#contact">
                        Book a Confidential Call <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      <Link href="#services">Explore Services</Link>
                    </Button>
                  </div>
                  <p className="mt-4 border-t border-slate-200 pt-4 text-center text-xs text-slate-500 md:text-sm">
                    Target Client Revenue: $2M - $200M+  | Nationwide Engagements  | CPA-Led (Non-Tax &amp; Audit)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Metrics Bar */}
      <section className="border-y border-slate-200 bg-white px-6 py-4 md:px-10">
        <SectionReveal className="mx-auto grid max-w-7xl gap-2 text-center sm:grid-cols-1 md:grid-cols-3">
          {trustMetrics.map((metric) => (
            <p key={metric} className="text-sm font-medium text-slate-700">
              {metric}
            </p>
          ))}
        </SectionReveal>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 md:px-10">
        <SectionReveal className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-[#0A2540] text-white hover:bg-[#0A2540]">
              Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] md:text-4xl">
              Our Core Services
            </h2>
            <p className="text-slate-600">
              Four integrated pillars covering ongoing leadership, transactions, systems, and technical accounting — with CPA precision and deal-tested execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title}>
                <Card className="h-full border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#166534]">
                      {service.pillar}
                    </p>
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0A2540]/10 text-[#0A2540]">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl text-[#0A2540]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#166534]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Client Profiles & Industry Expertise */}
      <section id="value-process" className="bg-[#0A2540] px-6 py-20 text-white md:px-10">
        <SectionReveal className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-white/10 text-white hover:bg-white/15">
              Client Profiles &amp; Industry Expertise
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Industry Agnostic Expertise for Growth and Mid-Market Businesses
            </h2>
            <p className="text-slate-200">
              We partner with diverse ownership groups to drive growth, optimize operations, and execute complex transactions. While our foundational financial principles are industry-agnostic, we bring deep, hands-on experience to a wide array of sectors.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg text-white">Target Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-200">
                  Scalable engagements for entities generating $2M to $200M+ in annual revenue.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg text-white">Ownership Structures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-200">
                  {ownershipStructures.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industryExpertise.map((row) => {
              const IndustryIcon = row.icon;
              return (
              <Card
                key={row.title}
                className="border-white/10 bg-white/5 text-white backdrop-blur"
              >
                <CardHeader className="space-y-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                    <IndustryIcon className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base leading-snug text-white">
                    {row.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-200">{row.text}</p>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </SectionReveal>
      </section>

      {/* Flexible Engagement Models */}
      <section id="engagement-models" className="px-6 py-20 md:px-10">
        <SectionReveal className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-[#0A2540] text-white hover:bg-[#0A2540]">
              Flexible Engagement Models
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] md:text-4xl">
              We scale our resources up or down based on your exact needs.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => {
              const ModelIcon = model.icon;
              return (
                <Card
                  key={model.title}
                  className="h-full border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0A2540]/10 text-[#0A2540]">
                      <ModelIcon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-[#0A2540]">
                      {model.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {model.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </SectionReveal>
      </section>

      {/* Why Keebler Advisors Section */}
      <section id="why-keebler" className="bg-[#0A2540] px-6 py-20 text-white md:px-10">
        <SectionReveal className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-4xl space-y-4">
            <Badge className="bg-white/10 text-white hover:bg-white/15">
              Why Keebler Advisors
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              CFO-Level Strategy. CPA Precision. Deal-Tested Execution.
            </h2>
            <p className="text-lg text-slate-200">
              Founded by Justin Keebler, CPA, a private equity-backed CFO and operator, Keebler Advisors blends financial rigor with operational insight to help entrepreneurs, operators, and investors navigate pivotal moments.
            </p>
            <p className="text-lg text-slate-200">
              Whether you need a trusted advisor on your board, a fractional CFO to drive monthly performance, or an expert to lead a complex transaction, we provide the exact horsepower you need.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              Our Distinct Advantages:
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {distinctAdvantages.map((item) => (
                <Card
                  key={item.title}
                  className="border-white/10 bg-white/5 text-white backdrop-blur"
                >
                  <CardHeader>
                    <CardTitle className="text-base leading-snug text-white md:text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-200">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#F8F9FA] px-6 py-20 md:px-10">
        <SectionReveal className="mx-auto max-w-7xl">
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <Badge className="w-fit bg-[#0A2540] text-white hover:bg-[#0A2540]">About Keebler Advisors</Badge>
              <CardTitle className="pt-2 text-3xl text-[#0A2540] md:text-4xl">
                Strategic Financial Leadership for Every Stage of Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-700">
              <p>
                Keebler Advisors partners with entrepreneurs, private equity groups, family offices, and independent sponsors to drive operational excellence and navigate complex financial landscapes. Founded by Justin Keebler, CPA, a private equity-backed CFO and operator, the firm bridges the gap between high-level strategy, deep operational insight, and technical accounting execution.
              </p>
              <p>
                Whether you need ongoing board-level advisory, a fractional CFO to build out your FP&amp;A function, or a steady hand to lead an acquisition or system transformation, we deliver the exact capabilities you need. We have scaled companies, led complex accounting integrations, closed acquisitions, and raised capital for businesses generating up to $200M+ in revenue.
              </p>
              <div className="grid gap-6 rounded-lg border border-slate-200 p-5 md:grid-cols-[220px_1fr] md:items-start">
                <Image
                  src="/images/justin-keebler-headshot.png"
                  alt="Justin Keebler, CPA"
                  width={220}
                  height={260}
                  className="w-full max-w-[220px] rounded-lg border border-slate-200 object-cover"
                />
                <div className="space-y-4">
                  <p className="font-semibold text-[#0A2540]">Justin Keebler, CPA — Managing Member</p>
                  <p>
                    Justin is a veteran finance and operations executive with nearly 20 years of experience bridging complex accounting, FP&amp;A, operational IT systems, and high-stakes deal-making. He acts as a strategic partner for diverse ownership groups, bringing CPA precision and a deal-tested operator&apos;s perspective to every engagement.
                  </p>
                  <p>
                    Throughout his career, Justin has led full-scale accounting transformations, built robust financial reporting models, managed capital raises, and guided M&amp;A initiatives across a wide array of industries. His pragmatic, data-driven approach helps clients create long-term enterprise value through financial clarity and disciplined execution.
                  </p>
                  <Button asChild className="w-full bg-[#166534] text-white hover:bg-[#14532d] sm:w-auto">
                    <Link href="#contact">Book a Confidential Consultation</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </section>

      {/* Our Promise Strip */}
      <section className="bg-gradient-to-r from-[#0A2540] via-[#113656] to-[#0A2540] px-6 py-14 text-white md:px-10">
        <SectionReveal className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              Our Promise To You
            </p>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
              Thinking about selling, raising capital, or transforming your finance function?
            </h3>
            <p className="text-slate-200">
              Let&apos;s map your path forward.
            </p>
          </div>
          <div className="space-y-4 rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-slate-100">
              We benchmark your current performance, prioritize the financial
              levers that matter most, and partner with your team to execute
              with accountability.
            </p>
            <p className="text-sm text-slate-100">
              Our approach blends CPA precision with real-world operator experience, helping you anticipate questions, defend valuation, and execute confidently.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Contact — consultation form (anchor #contact) */}
      <section id="contact" className="border-t border-slate-200 bg-white px-6 py-16 md:px-10">
        <SectionReveal className="mx-auto max-w-xl space-y-6">
          <div className="text-center">
            <Badge className="bg-[#0A2540] text-white hover:bg-[#0A2540]">Contact</Badge>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A2540] md:text-3xl">
              Book a Confidential Consultation
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Share a brief note and we will follow up to schedule your call.
            </p>
          </div>
          <form
            onSubmit={handleConsultationSubmit}
            className="space-y-4 text-left"
          >
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#0A2540] focus:outline-none focus:ring-1 focus:ring-[#0A2540]"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#0A2540] focus:outline-none focus:ring-1 focus:ring-[#0A2540]"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-slate-700">
                How can we help?
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-[#0A2540] focus:outline-none focus:ring-1 focus:ring-[#0A2540]"
                placeholder="Brief context for your consultation request"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#166534] text-white hover:bg-[#14532d] sm:w-auto"
            >
              Book a Confidential Consultation
            </Button>
          </form>
        </SectionReveal>
      </section>

    </main>
  );
}
