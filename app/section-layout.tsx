import Link from "next/link";
import Navbar from "./navbar";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main id="main-content">
      <Navbar />
      {children}
      <div className="pageFoot wrap">
        <Link href="/dashboard">← Back to dashboard</Link>
        <span>© 2026 Vivek</span>
      </div>
    </main>
  );
}
