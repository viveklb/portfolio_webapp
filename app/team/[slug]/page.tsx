import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLayout from "../../section-layout";
import { siteName, siteUrl, teamMembers } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teamMembers.map(({ slug }) => ({ slug }));
}

function getMember(slug: string) {
  const member = teamMembers.find((person) => person.slug === slug);
  if (!member) notFound();
  return member;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = getMember((await params).slug);
  return {
    title: member.displayName,
    description: member.description,
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: {
      type: "profile",
      siteName,
      title: `${member.displayName} | ${siteName}`,
      description: member.description,
      url: `/team/${member.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.displayName} | ${siteName}`,
      description: member.description,
    },
  };
}

export default async function TeamProfile({ params }: Props) {
  const member = getMember((await params).slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/team/${member.slug}#profile`,
    url: `${siteUrl}/team/${member.slug}`,
    name: `${member.displayName} | ${siteName}`,
    mainEntity: { "@id": `${siteUrl}/#${member.slug}` },
    isPartOf: { "@id": `${siteUrl}/#website` },
  };
  return (
    <SectionLayout>
      <header className="pageHero teamProfileHero wrap">
        <small>
          <Link href="/about#team">VIVEK SOFTWARES / OUR TEAM</Link>
        </small>
        <h1>{member.displayName}</h1>
        <p>
          <strong>{member.role}</strong>
        </p>
        <p>{member.description}</p>
      </header>
      <section className="pageCopy wrap">
        <h2>
          About <em>{member.displayName.split(" ")[0]}.</em>
        </h2>
        <div>
          <p>{member.bio}</p>
          {member.slug === "vivek-bharamshetti" && (
            <p className="profileLinks">
              <a
                href="https://www.linkedin.com/in/vivek-bharamshetti-1b9892341"
                rel="me"
              >
                LinkedIn ↗
              </a>
              <a href="https://github.com/viveklb" rel="me">
                GitHub ↗
              </a>
            </p>
          )}
        </div>
      </section>
      <section className="section wrap">
        <h2>
          Areas of <em>focus.</em>
        </h2>
        <div className="skillCloud">
          {member.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <p className="actions">
          <Link className="btn" href="/contact">
            Discuss a project ↗
          </Link>
          <Link href="/work">Explore team projects ↗</Link>
        </p>
      </section>
      <section className="section wrap">
        <h2>
          Meet the <em>team.</em>
        </h2>
        <p className="profileLinks">
          {teamMembers
            .filter((person) => person.slug !== member.slug)
            .map((person) => (
              <Link key={person.slug} href={`/team/${person.slug}`}>
                {person.displayName} ↗
              </Link>
            ))}
        </p>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </SectionLayout>
  );
}
