"use client";

import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {
  getFirebaseAuth,
  googleProvider,
  isFirebaseConfigured,
} from "@/lib/firebase";

export default function LoginClient() {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState(
    isFirebaseConfigured
      ? "Sign in with Google to access your project discussion dashboard."
      : "Add your Firebase public keys to enable Google login.",
  );
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      return;
    }

    const auth = getFirebaseAuth();

    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setStatus(
        currentUser
          ? "You are signed in successfully."
          : "Sign in with Google to access your project discussion dashboard.",
      );
    });
  }, []);

  async function handleGoogleLogin() {
    if (!isFirebaseConfigured) {
      setStatus("Firebase is missing. Add the values from .env.example first.");
      return;
    }

    setIsBusy(true);
    setStatus("Opening Google sign-in...");

    try {
      await signInWithPopup(getFirebaseAuth(), googleProvider);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Google sign-in failed. Please try again.";

      setStatus(message);
    } finally {
      setIsBusy(false);
    }
  }

  async function handleLogout() {
    setIsBusy(true);

    try {
      await signOut(getFirebaseAuth());
      setStatus("Signed out successfully.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Sign-out failed.");
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <section className="loginShell wrap">
      <div className="loginCopy">
        <p className="eyebrow">● SECURE CLIENT ACCESS</p>
        <h1>
          Login to start a
          <br />
          <em>project conversation.</em>
        </h1>
        <p className="lead">
          Use Google login for faster onboarding, project requirement sharing
          and authenticated follow-up conversations.
        </p>
        <div className="loginHighlights">
          <p>
            <b>01</b>
            Requirement discussion
          </p>
          <p>
            <b>02</b>
            Quote and timeline
          </p>
          <p>
            <b>03</b>
            Source code handover
          </p>
        </div>
      </div>

      <div className="loginPanel">
        <span>Google Auth</span>
        <h2>{user ? "Welcome back" : "Client login"}</h2>
        <p>{status}</p>

        {user ? (
          <div className="userCard">
            {user.photoURL ? (
              <span
                aria-label={user.displayName ?? "Signed-in user"}
                className="userAvatar"
                role="img"
                style={{ backgroundImage: `url("${user.photoURL}")` }}
              />
            ) : (
              <strong>{user.displayName?.charAt(0) ?? "U"}</strong>
            )}
            <div>
              <b>{user.displayName ?? "Signed-in user"}</b>
              <small>{user.email}</small>
            </div>
          </div>
        ) : null}

        <button
          className="googleBtn"
          disabled={isBusy || !isFirebaseConfigured}
          onClick={handleGoogleLogin}
          type="button"
        >
          <svg className="googleLogo" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.55h3.24c1.9-1.75 2.98-4.33 2.98-7.42Z" />
            <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.35l-3.24-2.55c-.9.6-2.05.96-3.38.96-2.6 0-4.81-1.76-5.6-4.13H3.06v2.63A10 10 0 0 0 12 22Z" />
            <path fill="#FBBC05" d="M6.4 13.93A6 6 0 0 1 6.09 12c0-.67.11-1.32.31-1.93V7.44H3.06A10 10 0 0 0 2 12c0 1.64.39 3.19 1.06 4.56l3.34-2.63Z" />
            <path fill="#EA4335" d="M12 5.94c1.47 0 2.78.5 3.82 1.49l2.87-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.94 5.44l3.34 2.63C7.19 7.7 9.4 5.94 12 5.94Z" />
          </svg>
          {isBusy ? "Please wait..." : "Continue with Google"}
        </button>

        {user ? (
          <button
            className="ghostBtn"
            disabled={isBusy}
            onClick={handleLogout}
            type="button"
          >
            Sign out
          </button>
        ) : null}

        {!isFirebaseConfigured ? (
          <small className="setupNote">
            Create `.env.local` using `.env.example`, then enable Google as a
            Firebase Authentication provider.
          </small>
        ) : null}
      </div>
    </section>
  );
}
