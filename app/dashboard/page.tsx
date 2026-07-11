import Image from "next/image";
const A = () => <span>↗</span>;
const services = [
  {
    tag: "FOR POSTGRADUATES",
    name: "M.Tech Project",
    price: "₹25,000",
    text: "Research-oriented development with complete source code, implementation support and project guidance.",
  },
  {
    tag: "MOST POPULAR",
    name: "B.E. Project",
    price: "₹10,000",
    text: "Complete final-year project development with a modern interface, source code and deployment support.",
  },
  {
    tag: "FOR BUSINESSES",
    name: "Web Development",
    price: "Let's talk",
    text: "Responsive websites and full-stack applications shaped around your goals and audience.",
  },
];
export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="logo" href="/dashboard">
          <b>V</b>Vivek.dev
        </a>
        <div>
          <a href="/about">About</a>
          <a href="/work">Work</a>
          <a href="/services">Services</a>
        </div>
        <a className="talk" href="/contact">
          Let&lsquo;s talk ↗
        </a>
      </nav>
      <section className="hero wrap" id="home">
        <div className="heroCopy">
          <p className="eyebrow">● AVAILABLE FOR NEW PROJECTS</p>
          <h1>
            I build digital
            <br />
            products that <em>work.</em>
          </h1>
          <p className="lead">
            Web developer & academic project specialist creating powerful,
            polished experiences — from first idea to final deployment.
          </p>
          <p className="actions">
            <a className="btn" href="/work">
              Explore my work <A />
            </a>
            <a href="/services">View pricing ↓</a>
          </p>
          <div className="proof">
            <strong>150+</strong>
            <span>
              projects designed
              <br />
              and delivered
            </span>
          </div>
        </div>
        <div className="photo">
          <div className="ring" />
          <div className="portraitCrop squarePortrait">
            <Image
              src="/vivek-square-portrait.png"
              alt="Vivek, web and academic project developer"
              fill
              preload
              sizes="(max-width:800px) 82vw,390px"
            />
          </div>
          <aside>
            <strong>150+</strong> PROJECTS
            <br />
            COMPLETED
          </aside>
        </div>
      </section>
      <div className="strip">
        WEB DEVELOPMENT　✦　M.TECH PROJECTS　✦　B.E. PROJECTS　✦　SOURCE
        CODE　✦　DEPLOYMENT
      </div>
      <section className="about wrap section" id="about">
        <div>
          <small>01 / ABOUT ME</small>
          <h2>
            Code with purpose.
            <br />
            <em>Built with precision.</em>
          </h2>
        </div>
        <div>
          <p className="bio">
            I turn complex ideas into clean, usable products. Every build gets
            thoughtful design, solid engineering and clear communication.
          </p>
          <div className="stats">
            <p>
              <b>150+</b>Projects built
            </p>
            <p>
              <b>100%</b>Commitment
            </p>
            <p>
              <b>2</b>Degree levels
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap" id="work">
        <small>02 / SELECTED EXPERTISE</small>
        <h2>
          What I <em>build.</em>
        </h2>
        <div className="cards">
          {["Full-stack Web Apps", "M.Tech Projects", "B.E. Projects"].map(
            (x, i) => (
              <article key={x}>
                <span>0{i + 1}</span>
                <div className={"visual v" + i}>&lt;/&gt;</div>
                <small>
                  {i === 0
                    ? "NEXT.JS · NODE"
                    : i === 1
                      ? "RESEARCH · DEVELOPMENT"
                      : "WEB · SOFTWARE"}
                </small>
                <h3>{x}</h3>
                <p>
                  {i === 0
                    ? "Fast, responsive products built for real-world users."
                    : i === 1
                      ? "Advanced academic projects with complete source code and guidance."
                      : "Practical final-year solutions, built and documented end to end."}
                </p>
              </article>
            ),
          )}
        </div>
      </section>
      <section className="services section" id="services">
        <div className="wrap">
          <small>03 / SERVICES & PRICING</small>
          <h2>
            Start your project
            <br />
            <em>with confidence.</em>
          </h2>
          <div className="prices">
            {services.map((s, i) => (
              <article className={i === 1 ? "featured" : ""} key={s.name}>
                <small>{s.tag}</small>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                <div>
                  <span>Starting at</span>
                  <b>{s.price}</b>
                </div>
                <a href="/contact">
                  Discuss your project <A />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="skills section wrap">
        <small>04 / TOOLKIT</small>
        <h2>
          Tools I use to
          <br />
          <em>make it happen.</em>
        </h2>
        <div>
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "UI / UX",
          ].map((x, i) => (
            <p key={x}>
              <span>0{i + 1}</span>
              <b>{x}</b>
              <i>↗</i>
            </p>
          ))}
        </div>
      </section>
      <footer id="contact">
        <div className="wrap">
          <small>HAVE A PROJECT IN MIND?</small>
          <h2>
            Let&#39;s build something
            <br />
            <em>remarkable.</em>
          </h2>
          <a className="btn" href="mailto:hello@example.com">
            Start a conversation <A />
          </a>
          <div className="foot">
            <a className="logo" href="/dashboard">
              <b>V</b>Vivek.dev
            </a>
            <span>Web developer · M.Tech & B.E. project specialist</span>
            <span>© 2026 Vivek</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
