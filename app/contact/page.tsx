import SectionLayout from "../section-layout";
import ProjectForm from "./ProjectForm";
export const metadata = {
  title: "Contact Vivek - Start Your Web or Academic Project",
  description: "Discuss a website, MERN application, M.Tech project or B.E. final-year project with Vivek Bharamshetti in Solapur. Request a timeline and quote.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Start Your Project with Vivek", description: "Share your project requirements and receive a practical development plan and quote." },
};
export default async function Contact({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  return (
    <SectionLayout>
      <header className="pageHero contactHero wrap">
        <small>HAVE A PROJECT IN MIND?</small>
        <h1>
          Let’s build something
          <br />
          <em>remarkable.</em>
        </h1>
        <p>
          Tell me what you want to build, your degree level or business goal,
          and your preferred timeline.
        </p>
        <p className="contactActions">
          <a className="btn" href="mailto:bharamshettivivek71@gmail.com">
            Email me ↗
          </a>
          <a href="tel:+917083232813">Call 7083232813</a>
        </p>
      </header>
      <ProjectForm selectedType={type} />
      <section className="contactGrid wrap">
        <div>
          <small>PROJECT TYPES</small>
          <p>
            Web Development
            <br />
            M.Tech Projects
            <br />
            B.E. Projects
          </p>
        </div>
        <div>
          <small>STARTING PRICES</small>
          <p>
            M.Tech — ₹25,000
            <br />
            B.E. — ₹10,000
            <br />
            Web — Custom quote
          </p>
        </div>
        <div>
          <small>AVAILABILITY</small>
          <p>
            Currently accepting
            <br />
            new projects.
            <br />
            Phone: 7083232813
          </p>
        </div>
      </section>
    </SectionLayout>
  );
}
