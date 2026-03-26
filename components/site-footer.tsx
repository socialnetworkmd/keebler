import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 dark:border-slate-700 dark:bg-slate-900 md:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/keebler-advisors-logo.png"
            alt="Keebler Advisors"
            width={210}
            height={54}
            className="h-8 w-auto"
          />
          <p>© {new Date().getFullYear()} Keebler Advisors. All rights reserved.</p>
        </div>
        <p>Nationwide Service | Headquarters: Atlanta, Georgia</p>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Keebler Advisors provides consulting, accounting, and financial advisory services. The firm does not provide legal services, real estate brokerage, or securities brokerage. Clients should engage appropriately licensed professionals as needed.
        </p>
      </div>
    </footer>
  );
}
