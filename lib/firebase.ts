import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured =
  Object.values(firebaseConfig).every(Boolean);

export function getFirebaseAuth() {
  if (!isFirebaseConfigured) {
    throw new Error(
      "Firebase public environment variables are not configured.",
    );
  }

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  return getAuth(app);
}

export const googleProvider = new GoogleAuthProvider();
