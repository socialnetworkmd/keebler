import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keebler Advisors | Transaction Advisory, Capital & CFO Services",
  description:
    "Keebler Advisors is a CPA-led advisory firm helping businesses sell, raise capital, or modernize their finance systems. Transaction advisory, capital sourcing, and fractional CFO services from $2M-$200M+ companies.",
  keywords: [
    "Transaction advisory",
    "Capital and debt advisory",
    "Fractional CFO",
    "Financial transformation",
    "CPA advisory firm",
    "Atlanta advisory",
  ],
  openGraph: {
    title: "Keebler Advisors",
    description:
      "CPA-led advisory firm for transaction advisory, capital and debt consulting, financial transformation, and fractional CFO services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
