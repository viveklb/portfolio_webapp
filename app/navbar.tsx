"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (!isFirebaseConfigured) return;
    return onAuthStateChanged(getFirebaseAuth(), setUser);
  }, []);
  return (
    <nav className="nav wrap">
      <Link className="logo" href="/dashboard"><b>V</b>Vivek.dev</Link>
      <div className="navLinks">
        <Link href="/about">About</Link><Link href="/work">Work</Link><Link href="/services#pricing">Pricing</Link>
        {user ? (
          <Link className="navProfile" href="/login" aria-label="Open your profile">
            {user.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.photoURL} alt="" referrerPolicy="no-referrer" />
            ) : <span>{user.displayName?.charAt(0) || "U"}</span>}
            <span className="navUserName">{user.displayName?.split(" ")[0] || "Profile"}</span>
          </Link>
        ) : <Link href="/login">Login</Link>}
      </div>
      <Link className="talk" href="/contact">Let&#39;s talk ↗</Link>
    </nav>
  );
}
