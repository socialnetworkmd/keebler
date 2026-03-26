import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Keebler Advisors | Schedule a Confidential Consultation",
  description:
    "Get in touch with Keebler Advisors for confidential financial advisory, M&A, capital raising, or transformation consulting. Schedule your call today.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F8F9FA] px-6 py-20 text-[#111827] md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <Badge className="bg-[#0A2540] text-white hover:bg-[#0A2540]">Contact</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-[#0A2540] md:text-5xl">
            Schedule a Confidential Consultation
          </h1>
          <p className="max-w-2xl text-slate-700">
            Thinking about selling, raising capital, or transforming your finance function? Let&apos;s map your path forward.
          </p>
          <div className="space-y-2 text-slate-700">
            <p>Email: jkeebler@keebleradvisor.com</p>
            <p>Phone: 678-793-1690</p>
            <p>Headquarters: Atlanta, Georgia</p>
          </div>
        </div>

        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-xl text-[#0A2540]">Book a Confidential Call</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-700">
              For now, contact us directly and we will respond quickly to schedule a confidential consultation.
            </p>
            <Button asChild className="w-full bg-[#166534] text-white hover:bg-[#14532d]">
              <a href="mailto:jkeebler@keebleradvisor.com">Email Keebler Advisors</a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href="tel:+16787931690">Call 678-793-1690</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
