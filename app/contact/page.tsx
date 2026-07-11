import SectionLayout from "../section-layout";
export default function Contact() {
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
        <a className="btn" href="mailto:bharamshettivivek71@gmail.com">
          Email me ↗
        </a>
      </header>
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
          </p>
        </div>
      </section>
    </SectionLayout>
  );
}
