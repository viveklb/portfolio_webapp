import SectionLayout from "../section-layout";
import LoginClient from "./LoginClient";

export const metadata = { title: "Client Login", robots: { index: false, follow: false }, alternates: { canonical: "/login" } };
export default function LoginPage() {
  return (
    <SectionLayout>
      <LoginClient />
    </SectionLayout>
  );
}
