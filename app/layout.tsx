import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Vivek — Web & Academic Project Developer",
  description:
    "Web developer with 150+ completed projects. M.Tech and B.E. project development.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
