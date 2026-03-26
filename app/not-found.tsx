import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-[#F8F9FA] px-6 text-center text-[#111827]">
      <h1 className="text-3xl font-bold text-[#0A2540]">Page Not Found</h1>
      <p className="max-w-md text-slate-600">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link href="/" className="rounded-md bg-[#166534] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#14532d]">
        Return Home
      </Link>
    </main>
  );
}
