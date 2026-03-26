import type { Metadata } from "next";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Keebler Advisors | Led by CFO Justin Keebler, CPA",
  description:
    "Learn about Keebler Advisors - founded by private equity-backed CFO Justin Keebler, CPA - providing strategic finance, accounting transformation, and transaction advisory to growing and mid-market companies.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F8F9FA] px-6 py-20 text-[#111827] md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <Badge className="bg-[#0A2540] text-white hover:bg-[#0A2540]">About Keebler Advisors</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-[#0A2540] md:text-5xl">
          Strategic Finance Advisory for Pivotal Business Moments
        </h1>
        <p className="max-w-4xl text-slate-700">
          Keebler Advisors helps entrepreneurs, operators, and investors navigate pivotal moments - selling a business, raising capital, or transforming finance operations.
        </p>
        <p className="max-w-4xl text-slate-700">
          Founded by Justin Keebler, CPA, a private equity-backed CFO and operator, the firm blends financial rigor with hands-on operational insight. We have scaled companies, closed acquisitions, raised capital, and integrated businesses up to $200M+.
        </p>

        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-[#0A2540]">Founder Bio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
              <Image
                src="/images/justin-keebler-headshot.png"
                alt="Justin Keebler, CPA"
                width={220}
                height={260}
                className="w-full max-w-[220px] rounded-lg border border-slate-200 object-cover"
                priority
              />
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Justin Keebler, CPA - Managing Member</span>
                </p>
                <p>
                  A finance and operations executive with nearly 20 years of experience bridging accounting, operational IT systems, and high-stakes transactions. Justin has led accounting transformations, capital raises, and M&A initiatives across multiple industries.
                </p>
                <p>
                  His pragmatic, data-driven approach helps clients create enterprise value through clarity and execution.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
              <p>Website: www.keebleradvisors.com</p>
              <p>Email: jkeebler@keebleradvisor.com</p>
              <p>Phone: 678-793-1690</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
