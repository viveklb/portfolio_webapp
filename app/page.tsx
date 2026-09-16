import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
import TeamCards from "./team-cards";
import { defaultDescription } from "@/lib/seo";
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
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    text: "We clarify your idea, modules, deadline, guide requirements and expected output.",
  },
  {
    step: "02",
    title: "Build",
    text: "I design and develop the project with clean UI, working logic and practical documentation.",
  },
  {
    step: "03",
    title: "Handover",
    text: "You receive source code, deployment support and explanation so you can present confidently.",
  },
];
const deliverables = [
  "Modern responsive UI",
  "Complete source code",
  "Database integration",
  "Admin/user modules",
  "Project documentation",
  "Deployment guidance",
  "Git repository setup",
  "Final demo support",
];
const trustNotes = [
  {
    title: "For students",
    text: "Clear academic flow, practical modules and project explanations for M.Tech and B.E. submissions.",
  },
  {
    title: "For startups",
    text: "Fast MVP-style web apps with clean pages, authentication, dashboard screens and deployment support.",
  },
  {
    title: "For businesses",
    text: "Professional websites and tools built around real goals, not just visual templates.",
  },
];
export const metadata = {
  title: { absolute: "Vivek Softwares | Web Development Team in Solapur" },
  description: defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Vivek Softwares | Web Development Team in Solapur",
    description: defaultDescription,
  },
};
export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <section className="hero wrap" id="home">
        <div className="heroCopy">
          <p className="eyebrow">● AVAILABLE FOR NEW PROJECTS</p>
          <h1>
            I build digital
            <br />
            products that <em>work.</em>
          </h1>
          <p className="lead">
            Vivek Softwares is a Solapur-based web development team led by Vivek
            Bharamshetti, with Vaishnavi Yelapure and Aditya Rachatte. We create
            polished experiences — from first idea to final deployment.
          </p>
          <div className="heroSignals" aria-label="Development capabilities">
            <span>
              <b>Next.js 16</b>
              production ready
            </span>
            <span>
              <b>Full-stack</b>
              design to deployment
            </span>
            <span>
              <b>Direct support</b>
              clear project guidance
            </span>
          </div>
          <p className="actions">
            <Link className="btn" href="/work">
              Explore my work <A />
            </Link>
            <Link href="/services#pricing">View pricing ↓</Link>
            <Link href="/login">Client login →</Link>
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
        <div className="heroClientsShowcase">
          <div className="clientCardHeader">
            <small>FEATURED CLIENTS & PORTFOLIO</small>
            <h3>Real-world Deliverables</h3>
          </div>
          <div className="heroClientsGrid">
            <Link href="#clients" className="heroClientCard featuredClient">
              <div className="clientLogoWrap">
                <Image
                  src="/samarth-collection-logo.png"
                  alt="Samarth Collection"
                  width={250}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="clientMeta">
                <strong>Samarth Collection</strong>
                <span>E-Commerce Store & Client Portal</span>
              </div>
            </Link>

            <Link href="#clients" className="heroClientCard">
              <div className="clientIconBadge">🚀</div>
              <div className="clientMeta">
                <strong>CrackMNC Platform</strong>
                <span>Career Preparation & Recruitment</span>
              </div>
            </Link>

            <Link href="#clients" className="heroClientCard">
              <div className="clientIconBadge">🎓</div>
              <div className="clientMeta">
                <strong>M-Tech Projects</strong>
                <span>AI Vision, IoT & Telemetry Systems</span>
              </div>
            </Link>

            <Link href="#clients" className="heroClientCard">
              <div className="clientIconBadge">📜</div>
              <div className="clientMeta">
                <strong>Research Papers</strong>
                <span>IEEE & Journal Publication Support</span>
              </div>
            </Link>
          </div>
          <div className="heroClientsProof">
            <strong>150+</strong> PROJECTS DELIVERED TO CLIENTS & STUDENTS
          </div>
        </div>
      </section>
      <div className="strip">
        CLIENTS & PROJECTS　✦　SAMARTH COLLECTION　✦　CRACKMNC　✦　M.TECH
        PROJECTS　✦　RESEARCH PAPERS
      </div>
      <section
        className="teamSection section"
        id="team"
        aria-labelledby="team-title"
      >
        <div className="wrap">
          <small>THE PEOPLE BEHIND THE WORK</small>
          <h2 id="team-title">
            Meet the <em>developers.</em>
          </h2>
          <TeamCards />
        </div>
      </section>
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
        <small>02 / FEATURED CLIENTS & DOMAINS</small>
        <h2>
          Clients & <em>core expertise.</em>
        </h2>
        <div className="cards">
          {[
            {
              title: "Samarth Collection",
              subtitle: "CLIENT E-COMMERCE & PORTAL",
              tag: "RETAIL · BRANDING · NEXT.JS",
              desc: "Custom web app and catalog portal built for Samarth Collection (समर्थ कलेक्शन).",
              icon: "🛍️",
            },
            {
              title: "CrackMNC Platform",
              subtitle: "CAREER & RECRUITMENT",
              tag: "DASHBOARD · MOCK INTERVIEWS",
              desc: "Comprehensive placement preparation workspace for software engineers.",
              icon: "🚀",
            },
            {
              title: "M.Tech Projects",
              subtitle: "ADVANCED AI & ENGINEERING",
              tag: "RESEARCH · HARDWARE · DEEP LEARNING",
              desc: "Postgraduate degree projects built with complete source code & thesis guidance.",
              icon: "🎓",
            },
            {
              title: "Research Papers",
              subtitle: "IEEE & JOURNAL PUBLICATIONS",
              tag: "IEEE · SCOPUS · ALGORITHMS",
              desc: "Academic paper formulation, MATLAB/Python simulations, and publication support.",
              icon: "📜",
            },
          ].map((x, i) => (
            <article key={x.title}>
              <span>0{i + 1}</span>
              <div className={"visual v" + (i % 3)}>
                <span className="visualBadge">{x.icon}</span>
                <span className="visualLine visualLineWide" />
                <span className="visualLine" />
                <span className="visualLine visualLineShort" />
              </div>
              <small>{x.tag}</small>
              <h3>{x.title}</h3>
              <p>{x.desc}</p>
              <Link className="cardAction" href="/work">
                View details ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Showcase Grid for Clients & Major Deliverables */}
      <section
        className="currentWork wrap"
        id="clients"
        style={{ marginTop: "40px" }}
      >
        <div className="currentWorkHeading">
          <div>
            <small>CLIENTS & FEATURED DELIVERABLES</small>
            <h2>
              Featured <em>portfolio.</em>
            </h2>
          </div>
          <p>
            Real-world client applications, specialized products, M.Tech
            systems, and publication work.
          </p>
        </div>
        <div className="currentProjectsGrid">
          <article className="currentProject featuredProject">
            <div
              className="projectScreenshot"
              style={{
                position: "relative",
                width: "100%",
                minHeight: "320px",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #edf4ff 50%, #dce9fe 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "36px 24px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "rgba(21, 94, 239, 0.08)",
                  filter: "blur(24px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "-40px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "rgba(10, 47, 137, 0.08)",
                  filter: "blur(24px)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "92%",
                  maxWidth: "480px",
                  padding: "36px 44px",
                  borderRadius: "26px",
                  background: "#ffffff",
                  boxShadow:
                    "0 24px 54px rgba(24, 59, 112, 0.14), 0 0 0 1px rgba(21, 94, 239, 0.12)",
                  textAlign: "center",
                }}
              >
                <Image
                  src="/samarth-collection-logo.png"
                  alt="Samarth Collection Company Logo"
                  width={380}
                  height={170}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    maxWidth: "360px",
                    height: "auto",
                    maxHeight: "150px",
                  }}
                />
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      background: "#ebf3ff",
                      color: "#0f49c5",
                      fontSize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    E-Commerce Store
                  </span>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      background: "#f1f5f9",
                      color: "#475569",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Client Web App
                  </span>
                </div>
              </div>
            </div>
            <div className="projectDetails">
              <span>01 / CLIENT SHOWCASE</span>
              <small>E-COMMERCE · CLIENT PORTAL · BRANDING</small>
              <h3>Samarth Collection (समर्थ कलेक्शन)</h3>
              <p>
                Custom digital commerce store and inventory management portal
                developed for Samarth Collection, streamlining product
                cataloging, order tracking, and client sales.
              </p>
              <Link href="/contact?type=Samarth%20Collection%20Client%20Project#project-requirements">
                Build a client app like this ↗
              </Link>
            </div>
          </article>

          <article className="currentProject">
            <div className="projectScreenshot">
              <Image
                src="/projects/crackmnc-career-platform.png"
                alt="CrackMNC Career Preparation Platform"
                fill
                sizes="(max-width: 800px) 100vw, 580px"
              />
            </div>
            <div className="projectDetails">
              <span>02 / FEATURED PLATFORM</span>
              <small>CAREER PLATFORM · RECRUITMENT · DASHBOARD</small>
              <h3>CrackMNC Career Platform</h3>
              <p>
                Complete career placement ecosystem featuring mock interview
                simulators, resume tools, MNC question banks, and interactive
                coding practice environments.
              </p>
              <Link href="/work">View platform details ↗</Link>
            </div>
          </article>

          <article className="currentProject">
            <div className="projectScreenshot">
              <Image
                src="/projects/plantvision-growth-monitoring.png"
                alt="PlantVision M-Tech AI Growth Monitoring Project"
                fill
                sizes="(max-width: 800px) 100vw, 580px"
              />
            </div>
            <div className="projectDetails">
              <span>03 / ACADEMIC ENGINEERING</span>
              <small>M.TECH PROJECTS · AI VISION · IOT TELEMETRY</small>
              <h3>M-Tech Engineering Projects</h3>
              <p>
                Advanced postgraduate research systems combining deep learning,
                sensor fusion, image processing, and telemetry with full source
                code & thesis documentation.
              </p>
              <Link href="/services#pricing">Explore M-Tech projects ↗</Link>
            </div>
          </article>

          <article className="currentProject">
            <div className="projectScreenshot">
              <Image
                src="/projects/uav-radar-sensor-fusion.png"
                alt="Research Papers & IEEE Publications"
                fill
                sizes="(max-width: 800px) 100vw, 580px"
              />
            </div>
            <div className="projectDetails">
              <span>04 / RESEARCH & PUBLICATIONS</span>
              <small>RESEARCH PAPERS · IEEE · SCI / SCOPUS JOURNALS</small>
              <h3>Research Papers & Publications</h3>
              <p>
                End-to-end research paper writing, algorithm formulation,
                MATLAB/Python simulations, and publication guidance for IEEE and
                Scopus indexed journals.
              </p>
              <Link href="/contact?type=Research%20Paper%20Support#project-requirements">
                Publish a research paper ↗
              </Link>
            </div>
          </article>
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
                <Link
                  href={`/contact?type=${encodeURIComponent(s.name)}#project-requirements`}
                >
                  Discuss your project <A />
                </Link>
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
      <section className="process section wrap">
        <small>05 / HOW I WORK</small>
        <h2>
          From rough idea
          <br />
          to <em>working product.</em>
        </h2>
        <div className="processGrid">
          {processSteps.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="deliverables section">
        <div className="wrap">
          <small>06 / WHAT YOU GET</small>
          <h2>
            Practical output,
            <br />
            not just <em>screenshots.</em>
          </h2>
          <div className="deliverableGrid">
            {deliverables.map((item, index) => (
              <p key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="trust section wrap">
        <small>07 / BUILT FOR REAL NEEDS</small>
        <h2>
          One developer,
          <br />
          many <em>project goals.</em>
        </h2>
        <div className="trustGrid">
          {trustNotes.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
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
          <Link className="btn" href="/contact#project-requirements">
            Start a conversation <A />
          </Link>
          <div className="foot">
            <Link className="logo" href="/">
              <b>V</b>Vivek Softwares
            </Link>
            <span>Web developer · M.Tech & B.E. project specialist</span>
            <span>Phone: 7083232813</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
