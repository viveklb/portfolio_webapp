import SectionLayout from "../section-layout";
export default function About() {
  return (
    <SectionLayout>
      <header className="pageHero wrap">
        <small>01 / ABOUT ME</small>
        <h1>
          Code with purpose.
          <br />
          <em>Built with precision.</em>
        </h1>
        <p>
          I’m a web developer and academic project specialist who turns complex
          ideas into clean, usable products. Every build receives thoughtful
          design, solid engineering and clear communication.
        </p>
      </header>
      <section className="aboutDetail wrap">
        <div>
          <b>150+</b>
          <span>Projects successfully built</span>
        </div>
        <div>
          <b>100%</b>
          <span>Commitment to every client</span>
        </div>
        <div>
          <b>2</b>
          <span>Degree levels supported</span>
        </div>
      </section>
      <section className="pageCopy wrap">
        <h2>
          Ideas become useful
          <br />
          <em>when they work.</em>
        </h2>
        <p>
          I combine modern web technologies with a practical development
          process. Whether it is a business website, an M.Tech research project,
          or a B.E. final-year project, my focus stays the same: understandable
          code, polished design, and a result you can confidently present.
        </p>
      </section>
    </SectionLayout>
  );
}
