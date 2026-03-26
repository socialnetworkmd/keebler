"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/75 dark:border-slate-700 dark:bg-slate-900/70">
      <div className="hidden border-b border-white/10 bg-[#0A2540] text-[11px] text-slate-200 md:block">
        <div className="mx-auto flex h-8 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <p>Business Hours: 8 AM - 5 PM EST</p>
          <p>Atlanta HQ | Phone: 404-444-5566</p>
        </div>
      </div>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/keebler-advisors-logo.png"
            alt="Keebler Advisors"
            width={284}
            height={72}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex dark:text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#0A2540] dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden bg-[#166534] text-white hover:bg-[#14532d] sm:inline-flex">
            <Link href="#contact">Book Session</Link>
          </Button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 md:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95 md:hidden"
          >
            <nav className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-2 text-slate-700 transition hover:bg-slate-100 hover:text-[#0A2540] dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="mt-4 w-full bg-[#166534] text-white hover:bg-[#14532d]">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Book a Confidential Call
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
