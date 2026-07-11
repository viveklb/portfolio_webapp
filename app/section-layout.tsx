import Link from "next/link";
export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <nav className="nav wrap">
        <Link className="logo" href="/dashboard">
          <b>V</b>Vivek.dev
        </Link>
        <div>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
        </div>
        <Link className="talk" href="/contact">
          Let&#39;s talk ↗
        </Link>
      </nav>
      {children}
      <div className="pageFoot wrap">
        <Link href="/dashboard">← Back to dashboard</Link>
        <span>© 2026 Vivek</span>
      </div>
    </main>
  );
}
