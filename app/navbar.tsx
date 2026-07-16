"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

type NavIconName =
  "home" | "about" | "projects" | "pricing" | "login" | "contact";

function NavIcon({ name }: { name: NavIconName }) {
  const paths: Record<NavIconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    about: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    projects: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
      </>
    ),
    pricing: (
      <>
        <path d="M20 13 13 20 4 11V4h7Z" />
        <circle cx="8.5" cy="8.5" r="1" />
      </>
    ),
    login: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="9" r="3" />
        <path d="M6.5 18a6.5 6.5 0 0 1 11 0" />
      </>
    ),
    contact: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8M8 13h5" />
      </>
    ),
  };

  return (
    <svg
      className="navIcon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    return onAuthStateChanged(getFirebaseAuth(), setUser);
  }, []);

  function itemClass(path: string) {
    return `navItem${pathname === path ? " active" : ""}`;
  }

  return (
    <nav className="nav wrap">
      <Link className="logo" href="/dashboard" aria-label="Home">
        <NavIcon name="home" />
        <b>V</b>
        <span className="navBrandText">Vivek.dev</span>
      </Link>
      <div className="navLinks">
        <Link
          className={itemClass("/about")}
          href="/about"
          aria-label="About"
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          <NavIcon name="about" />
          <span className="navLabel">About</span>
        </Link>
        <Link
          className={itemClass("/work")}
          href="/work"
          aria-label="Projects"
          aria-current={pathname === "/work" ? "page" : undefined}
        >
          <NavIcon name="projects" />
          <span className="navLabel">Projects</span>
        </Link>
        <Link
          className={itemClass("/services")}
          href="/services#pricing"
          aria-label="Pricing"
          aria-current={pathname === "/services" ? "page" : undefined}
        >
          <NavIcon name="pricing" />
          <span className="navLabel">Pricing</span>
        </Link>
        {user ? (
          <Link
            className={`${itemClass("/login")} navProfile`}
            href="/login"
            aria-label="Open your profile"
            aria-current={pathname === "/login" ? "page" : undefined}
          >
            {user.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photoURL} alt="" referrerPolicy="no-referrer" />
            ) : (
              <span>{user.displayName?.charAt(0) || "U"}</span>
            )}
            <span className="navUserName">
              {user.displayName?.split(" ")[0] || "Profile"}
            </span>
          </Link>
        ) : (
          <Link
            className={itemClass("/login")}
            href="/login"
            aria-label="Login"
            aria-current={pathname === "/login" ? "page" : undefined}
          >
            <NavIcon name="login" />
            <span className="navLabel">Login</span>
          </Link>
        )}
      </div>
      <Link
        className={`talk navCta${pathname === "/contact" ? " active" : ""}`}
        href="/contact"
        aria-label="Contact"
        aria-current={pathname === "/contact" ? "page" : undefined}
      >
        <NavIcon name="contact" />
        <span className="navCtaLabel">Let&#39;s talk ↗</span>
      </Link>
    </nav>
  );
}
