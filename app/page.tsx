"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Landmark,
  LineChart,
  Network,
  Scale,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

const trustMetrics = ["CPA-Led Advisory", "$2M-$200M+ Client Revenue", "Deal-Tested Operators", "Nationwide Engagements"];

const services = [
  {
    title: "Fractional / Outsourced CFO",
    icon: Scale,
    description:
      "Transaction Advisory, Exit Readiness, and Capital & Debt Advisory.",
    bullets: [
      "Prepare businesses for sale through EBITDA normalization, financial packaging, and diligence readiness.",
      "Manage the transaction process from buyer targeting and LOI through due diligence to closing.",
      "Source cash flow loans, asset-based lending, and growth capital through our lender network.",
    ],
  },
  {
    title: "Transformation Work",
    icon: Network,
    description:
      "Systems, Processes, and Integration Projects.",
    bullets: [
      "Implement scalable ERP and accounting systems.",
      "Redesign financial processes for visibility, accuracy, and accountability.",
      "Support post-acquisition integrations and align reporting, KPIs, and controls.",
    ],
  },
  {
    title: "Traditional Accounting & Finance Services",
    icon: Landmark,
    description:
      "Fractional CFO, Accounting Clean-Up, and Transition Work.",
    bullets: [
      "Fractional CFO oversight for growing companies.",
      "Accounting clean-up, accrual conversions, and GAAP alignment.",
      "Interim and transition support during leadership or system changes.",
    ],
  },
];

const processSteps = [
  "Readiness - Establish goals, performance baseline, and key value drivers.",
  "Prepare - Normalize earnings, improve reporting, and strengthen financial controls.",
  "Go to Market / Raise Capital - Manage buyer targeting, outreach, and capital sourcing.",
  "Close & Integrate - Support due diligence, working capital negotiations, and post-close integration.",
];

export default function HomePage() {
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
              Maximizing Value. Transforming Finance. Guiding Transactions.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200 md:text-xl">
              Keebler Advisors is a CPA-led advisory firm specializing in transactions, capital and debt advisory, financial transformation, and fractional CFO services. Whether you&apos;re preparing for a sale, raising capital, or modernizing your finance systems, we deliver hands-on, deal-tested expertise.
            </p>
            <p className="text-sm text-slate-200">
              Nationwide Service • Atlanta Headquarters • CPA-Led Engagements
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Metrics Bar */}
      <section className="border-y border-slate-200 bg-white px-6 py-4 md:px-10">
        <SectionReveal className="mx-auto grid max-w-7xl gap-2 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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
              We guide clients through transactions, transformations, and ongoing finance leadership with CPA precision and practical operator experience.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title}>
                <Card className="h-full border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="space-y-4">
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

      {/* Industries & Client Size */}
      <section id="value-process" className="bg-[#0A2540] px-6 py-20 text-white md:px-10">
        <SectionReveal className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-white/10 text-white hover:bg-white/15">
              Industries & Client Size
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Industry Agnostic Expertise for Growth and Mid-Market Businesses
            </h2>
            <p className="text-slate-200">
              Keebler Advisors works across industries from home services and distribution to manufacturing, healthcare, and technology. Our engagements scale for clients ranging from $2M to $200M+ in revenue.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base"><LineChart className="h-4 w-4" /> Home Services & Distribution</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base"><TrendingUp className="h-4 w-4" /> Manufacturing & Healthcare</CardTitle>
              </CardHeader>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base"><Landmark className="h-4 w-4" /> Technology & SaaS</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </SectionReveal>
      </section>

      {/* Our Process */}
      <section id="testimonials" className="px-6 py-20 md:px-10">
        <SectionReveal className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-[#0A2540] text-white hover:bg-[#0A2540]">
              Our Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-[#0A2540] md:text-4xl">
              A Structured Path from Readiness to Close & Integrate
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, idx) => (
              <Card key={step} className="h-full border-slate-200 bg-white">
                <CardContent className="space-y-4 pt-6">
                  <Badge className="bg-[#0A2540]/10 text-[#0A2540] hover:bg-[#0A2540]/10">
                    Step {idx + 1}
                  </Badge>
                  <p className="text-sm leading-relaxed text-slate-700">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* Why Keebler Advisors Section */}
      <section id="why-keebler" className="bg-[#0A2540] px-6 py-20 text-white md:px-10">
        <SectionReveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <Badge className="bg-white/10 text-white hover:bg-white/15">
              Why Keebler Advisors
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              CFO-Level Strategy. CPA Precision. Deal-Tested Execution.
            </h2>
            <p className="text-slate-200">
              Founded by Justin Keebler, CPA, a private equity-backed CFO and operator, Keebler Advisors blends financial rigor with operational insight to help entrepreneurs, operators, and investors navigate pivotal moments.
            </p>
            <ul className="space-y-3 text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                Practical CFO leadership aligned to your growth stage
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                Data-backed strategy tied to clear, measurable KPIs
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                Exit planning discipline that increases buyer confidence
              </li>
            </ul>
          </div>
          <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">
                Outcome-Driven Advisory Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-100">
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <p className="font-medium text-white">Nearly 20 Years of Experience</p>
                <p className="text-slate-200">Deep leadership in accounting transformation, M&A transactions, and capital raises.</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <p className="font-medium text-white">Scalable Advisory Model</p>
                <p className="text-slate-200">Flexible, project-based expertise that scales with your transaction or transformation needs.</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/10 p-4">
                <p className="font-medium text-white">Operator Mindset</p>
                <p className="text-slate-200">Hands-on execution that aligns your systems, reporting, and deal narrative.</p>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#F8F9FA] px-6 py-20 md:px-10">
        <SectionReveal className="mx-auto max-w-7xl">
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <Badge className="w-fit bg-[#0A2540] text-white hover:bg-[#0A2540]">About Keebler Advisors</Badge>
              <CardTitle className="pt-2 text-3xl text-[#0A2540] md:text-4xl">
                Strategic Finance Advisory for Pivotal Business Moments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-700">
              <p>
                Keebler Advisors helps entrepreneurs, operators, and investors navigate pivotal moments - selling a business, raising capital, or transforming finance operations.
              </p>
              <p>
                Founded by Justin Keebler, CPA, a private equity-backed CFO and operator, the firm blends financial rigor with hands-on operational insight. We have scaled companies, closed acquisitions, raised capital, and integrated businesses up to $200M+.
              </p>
              <div className="grid gap-6 rounded-lg border border-slate-200 p-5 md:grid-cols-[220px_1fr] md:items-start">
                <Image
                  src="/images/justin-keebler-headshot.png"
                  alt="Justin Keebler, CPA"
                  width={220}
                  height={260}
                  className="w-full max-w-[220px] rounded-lg border border-slate-200 object-cover"
                />
                <div className="space-y-3">
                  <p className="font-semibold text-[#0A2540]">Justin Keebler, CPA - Managing Member</p>
                  <p>
                    A finance and operations executive with nearly 20 years of experience bridging accounting, operational IT systems, and high-stakes transactions. Justin has led accounting transformations, capital raises, and M&A initiatives across multiple industries.
                  </p>
                  <p>
                    His pragmatic, data-driven approach helps clients create enterprise value through clarity and execution.
                  </p>
                  <p className="text-sm">Email: jkeebler@keebleradvisor.com | Phone: 678-793-1690</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </section>

      {/* Our Promise Strip */}
      <section id="contact" className="bg-gradient-to-r from-[#0A2540] via-[#113656] to-[#0A2540] px-6 py-14 text-white md:px-10">
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

    </main>
  );
}
