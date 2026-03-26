import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services | Deal Advisory, Transformation, and Fractional CFO",
  description:
    "Explore Keebler Advisors' core services - transaction advisory, capital and debt consulting, system and process transformation, and fractional CFO accounting services. Expert support for businesses preparing for sale or growth.",
};

const serviceGroups = [
  {
    title: "Deal Work",
    subtitle: "Transaction Advisory, Exit Readiness, and Capital & Debt Advisory",
    points: [
      "Prepare businesses for sale through EBITDA normalization, financial packaging, and diligence readiness.",
      "Manage the transaction process from buyer targeting and LOI through due diligence and closing.",
      "Identify capital and debt solutions including cash flow loans, asset-based lending, and growth capital.",
    ],
  },
  {
    title: "Transformation Work",
    subtitle: "Systems, Processes, and Integration Projects",
    points: [
      "Implement scalable ERP and accounting systems.",
      "Redesign financial processes for visibility, accuracy, and accountability.",
      "Support post-acquisition integrations and align reporting, KPIs, and controls across platforms.",
    ],
  },
  {
    title: "Traditional Accounting & Finance Services",
    subtitle: "Fractional CFO, Accounting Clean-Up, and Transition Work",
    points: [
      "Fractional CFO oversight for growing companies.",
      "Accounting clean-up, accrual conversions, and GAAP alignment.",
      "Interim and transition services during leadership or system changes.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F9FA] px-6 py-20 text-[#111827] md:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <Badge className="bg-[#0A2540] text-white hover:bg-[#0A2540]">Services</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-[#0A2540] md:text-5xl">
          Deal Advisory, Transformation, and Fractional CFO Services
        </h1>
        <p className="max-w-4xl text-slate-700">
          Our approach blends CPA precision with real-world operator experience, helping you anticipate questions, defend valuation, and close confidently.
        </p>

        <div className="grid gap-6">
          {serviceGroups.map((group) => (
            <Card key={group.title} className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0A2540]">{group.title}</CardTitle>
                <p className="text-sm text-slate-600">{group.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  {group.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
