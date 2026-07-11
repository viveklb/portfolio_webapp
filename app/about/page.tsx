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
      <section className="ownerStory wrap">
        <div className="ownerStoryTitle">
          <small>EXPERIENCE</small>
          <h2>Building practical software <em>since 2023.</em></h2>
        </div>
        <article className="experienceCard">
          <div><span>Aug 2023 - Present</span><h3>Software Developer</h3><p>N. B. Navale Sinhgad College of Engineering, Kegaon, Solapur</p></div>
          <p>Developing full-stack MERN applications and REST APIs for secure authentication, data management and real-time product features.</p>
        </article>
      </section>
      <section className="ownerDetails wrap">
        <div className="detailColumn">
          <small>EDUCATION</small>
          <article><span>2025</span><h3>Bachelor of Computer Applications</h3><p>Punyashlok Ahilyadevi Holkar Solapur University - 67%</p></article>
          <article><span>2020</span><h3>Diploma in Mechanical Engineering</h3><p>Government Polytechnic Solapur - 60.88%</p></article>
          <article><span>2015</span><h3>Secondary School Certificate</h3><p>Shri Shahaji High School, Akkalkot - 80%</p></article>
        </div>
        <div className="detailColumn">
          <small>TECHNICAL TOOLKIT</small>
          <div className="skillCloud">
            {["JavaScript", "Python", "React.js", "Redux", "Node.js", "MongoDB", "REST APIs", "Firebase", "Git", "GitHub", "ESP32", "Arduino"].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>
      <section className="cvProjects wrap">
        <small>FEATURED PROJECTS</small>
        <div>
          <article><span>01</span><h3>Mock Test App</h3><p>An online examination platform built with the MERN stack and Firebase, including question management, automated evaluation and student performance monitoring.</p></article>
          <article><span>02</span><h3>Faculty Feedback System</h3><p>A scalable MERN and Firebase feedback platform deployed across local and cloud servers, with PM2 process management.</p></article>
        </div>
        <p className="profileLinks">
          <a href="https://www.linkedin.com/in/vivek-bharamshetti-1b9892341" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/viveklb" target="_blank" rel="noreferrer">GitHub ↗</a>
        </p>
      </section>
    </SectionLayout>
  );
}
