import TeamCards from "../team-cards";
import SectionLayout from "../section-layout";
export const metadata = {
  title:
    "About Vivek Bharamshetti, Vaishnavi Yelapure & Aditya Rachatte - Software Engineering Team",
  description:
    "Learn about Vivek Bharamshetti, Vaishnavi Yelapure, and Aditya Rachatte. Solapur-based full-stack engineering team building web applications, Samarth Collection, CrackMNC platform, M.Tech projects, and IEEE research papers.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Vivek Bharamshetti, Vaishnavi Yelapure & Aditya Rachatte",
    description:
      "Full-stack software engineering team specializing in web development, M.Tech projects, and research paper publication.",
  },
};
export default function About() {
  return (
    <SectionLayout>
      <header className="pageHero wrap">
        <small>01 / ABOUT US & OUR TEAM</small>
        <h1>
          Code with purpose.
          <br />
          <em>Built with precision.</em>
        </h1>
        <p>
          Founded by <strong>Vivek Laxman Bharamshetti</strong> alongside core
          developers <strong>Vaishnavi Yelapure</strong> and{" "}
          <strong>Aditya Rachatte</strong>, we build web applications, client
          solutions, M.Tech research projects, and research paper publications.
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

      {/* Team Showcase for Search Indexing */}
      <section
        className="teamSection section wrap"
        style={{ borderRadius: "24px", margin: "40px auto" }}
        id="team"
      >
        <small style={{ color: "#8065ff", fontWeight: 700 }}>
          THE ENGINEERS BEHIND VIVEK SOFTWARES
        </small>
        <h2
          style={{ color: "#ffffff", marginTop: "8px", marginBottom: "32px" }}
        >
          Meet the <em>developers.</em>
        </h2>
        <TeamCards />
      </section>

      <section className="pageCopy wrap">
        <h2>
          Ideas become useful
          <br />
          <em>when they work.</em>
        </h2>
        <p>
          We combine modern web technologies with a practical engineering
          process. Whether it is a client store like{" "}
          <strong>Samarth Collection</strong>, a placement platform like{" "}
          <strong>CrackMNC</strong>, an <strong>M.Tech research project</strong>
          , or an <strong>IEEE Research Paper</strong> publication, our focus
          stays the same: understandable code, polished design, and results you
          can present confidently.
        </p>
      </section>
      <section className="ownerStory wrap">
        <div className="ownerStoryTitle">
          <small>EXPERIENCE</small>
          <h2>
            Building practical software <em>since 2023.</em>
          </h2>
        </div>
        <article className="experienceCard">
          <div>
            <span>Aug 2023 - Present</span>
            <h3>Software Developer</h3>
            <p>N. B. Navale Sinhgad College of Engineering, Kegaon, Solapur</p>
          </div>
          <p>
            Developing full-stack MERN applications, Next.js portals, and REST
            APIs for secure authentication, data management, and real-time
            product features.
          </p>
        </article>
      </section>
      <section className="ownerDetails wrap">
        <div className="detailColumn">
          <small>EDUCATION</small>
          <article>
            <span>2025</span>
            <h3>Bachelor of Computer Applications</h3>
            <p>Punyashlok Ahilyadevi Holkar Solapur University - 67%</p>
          </article>
          <article>
            <span>2020</span>
            <h3>Diploma in Mechanical Engineering</h3>
            <p>Government Polytechnic Solapur - 60.88%</p>
          </article>
          <article>
            <span>2015</span>
            <h3>Secondary School Certificate</h3>
            <p>Shri Shahaji High School, Akkalkot - 80%</p>
          </article>
        </div>
        <div className="detailColumn">
          <small>TECHNICAL TOOLKIT</small>
          <div className="skillCloud">
            {[
              "JavaScript",
              "Python",
              "React.js",
              "Next.js",
              "Redux",
              "Node.js",
              "MongoDB",
              "REST APIs",
              "Firebase",
              "DevOps",
              "Git",
              "GitHub",
              "ESP32",
              "Arduino",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="cvProjects wrap">
        <small>FEATURED PROJECTS</small>
        <div>
          <article>
            <span>01</span>
            <h3>Samarth Collection & CrackMNC Platform</h3>
            <p>
              Client e-commerce web applications and MNC recruitment career
              preparation portals with mock interview simulators.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>M.Tech Projects & IEEE Research Papers</h3>
            <p>
              Postgraduate research systems combining computer vision, IoT
              telemetry, algorithm design, and journal paper publication
              support.
            </p>
          </article>
        </div>
        <p className="profileLinks">
          <a
            href="https://www.linkedin.com/in/vivek-bharamshetti-1b9892341"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="https://github.com/viveklb" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </p>
      </section>
    </SectionLayout>
  );
}
