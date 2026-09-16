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
        <Link href="/">← Back to home</Link>
        <span>© 2026 Vivek Softwares</span>
      </div>
    </main>
  );
}
