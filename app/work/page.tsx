import SectionLayout from "../section-layout";
import Link from "next/link";
import Image from "next/image";
import samarthLogo from "@/public/swami_samarth.png";
import plantVisionImage from "@/public/projects/plantvision-growth-monitoring.png";
import uavRadarImage from "@/public/projects/uav-radar-sensor-fusion.png";
import crackMncImage from "@/public/projects/crackmnc-career-platform.png";

const currentProjects = [
  {
    name: "Samarth Collection",
    title: "Samarth Collection E-Commerce & Retail Portal",
    tag: "CLIENT SHOWCASE · E-COMMERCE · RETAIL",
    text: "Custom digital commerce portal for Samarth Collection (समर्थ कलेक्शन) featuring product cataloging, online sales interface, order tracking, and inventory tools.",
    image: samarthLogo,
    alt: "Samarth Collection store logo and client project banner",
    isLogo: true,
  },
  {
    name: "CrackMNC",
    title: "Career Preparation Workspace",
    tag: "CAREER PLATFORM · DASHBOARD",
    text: "A focused placement platform bringing applications, mock interviews, resumes, question banks, coding practice and study materials into one workspace.",
    image: crackMncImage,
    alt: "CrackMNC career preparation dashboard with interview, resume and application tools",
  },
  {
    name: "PlantVision M-Tech",
    title: "Advanced Plant Growth Monitoring System",
    tag: "M-TECH PROJECT · AI VISION · IOT",
    text: "A research-grade M-Tech monitoring workspace combining image analysis, live ESP telemetry and scan history to track growth and health metrics.",
    image: plantVisionImage,
    alt: "PlantVision advanced plant growth monitoring dashboard with image analysis and health metrics",
  },
  {
    name: "UAV Radar Research Paper",
    title: "Radar Sensor Fusion & Research Paper",
    tag: "RESEARCH PAPERS · IEEE · OPENCV",
    text: "A real-time radar interface fusing sensor data with computer-vision tracking, packaged with complete research paper documentation and simulation models.",
    image: uavRadarImage,
    alt: "UAV radar sensor fusion research paper and simulation dashboard",
  },
];

const work = [
  {
    name: "Samarth Collection & Clients",
    tag: "CLIENT WEB APPS · E-COMMERCE",
    text: "Custom business portals, retail platforms, and brand solutions for real-world clients.",
  },
  {
    name: "CrackMNC Platform",
    tag: "CAREER PLATFORM · DASHBOARDS",
    text: "Placement portals, interview suites, and interactive recruitment dashboards.",
  },
  {
    name: "M.Tech Projects",
    tag: "RESEARCH · DEVELOPMENT · AI",
    text: "Advanced postgraduate research projects with complete source code, hardware integration, and thesis guidance.",
  },
  {
    name: "Research Papers",
    tag: "IEEE · SCI/SCOPUS · PUBLICATION",
    text: "Paper writing, algorithm formulation, simulation graphs, and journal publication assistance.",
  },
  {
    name: "B.E. Projects",
    tag: "WEB · SOFTWARE · DEMO",
    text: "Practical final-year engineering solutions, built, documented, and tested from idea to deployment.",
  },
  {
    name: "API & Deployment Support",
    tag: "BACKEND · DATABASE · CLOUD",
    text: "Production cloud setup, database optimization, and API integration for local and live web applications.",
  },
];
export const metadata = {
  title: "Web Development & Academic Project Portfolio",
  description:
    "Explore full-stack web apps, M.Tech research projects, B.E. final-year software, dashboards, APIs and deployment work by Vivek Bharamshetti.",
  alternates: { canonical: "/work" },
  openGraph: {
    url: "/work",
    title: "Web & Academic Project Portfolio",
    description:
      "A selection of full-stack applications and engineering projects built for real-world use.",
  },
};
export default function Work() {
  return (
    <SectionLayout>
      <header className="pageHero wrap">
        <small>02 / SELECTED EXPERTISE</small>
        <h1>
          Projects built to
          <br />
          <em>make an impact.</em>
        </h1>
        <p>
          More than 150 projects delivered across web development and academic
          engineering.
        </p>
      </header>
      <section
        className="currentWork wrap"
        aria-labelledby="current-projects-title"
      >
        <div className="currentWorkHeading">
          <div>
            <small>RECENTLY BUILT</small>
            <h2 id="current-projects-title">
              Current <em>projects.</em>
            </h2>
          </div>
          <p>
            Active product work across AI-assisted monitoring, sensor fusion and
            career technology.
          </p>
        </div>
        <div className="currentProjectsGrid">
          {currentProjects.map((project, index) => (
            <article
              className={
                index === 0
                  ? "currentProject featuredProject"
                  : "currentProject"
              }
              key={project.name}
            >
              <div className="projectScreenshot">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  placeholder="blur"
                  sizes={
                    index === 0
                      ? "(max-width: 800px) 100vw, 1180px"
                      : "(max-width: 800px) 100vw, 580px"
                  }
                />
              </div>
              <div className="projectDetails">
                <span>
                  0{index + 1} / {project.name}
                </span>
                <small>{project.tag}</small>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <Link
                  href={`/contact?type=${encodeURIComponent(project.title)}#project-requirements`}
                >
                  Build a project like this ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="cards pageCards wrap">
        {work.map((x, i) => (
          <article key={x.name}>
            <span>0{i + 1}</span>
            <div className={"visual v" + (i % 3)}>
              <span className="visualBadge">
                {i % 3 === 0 ? "</>" : i % 3 === 1 ? "AI" : "UI"}
              </span>
              <span className="visualLine visualLineWide" />
              <span className="visualLine" />
              <span className="visualLine visualLineShort" />
            </div>
            <small>{x.tag}</small>
            <h3>{x.name}</h3>
            <p>{x.text}</p>
            <Link
              className="cardAction"
              href={`/contact?type=${encodeURIComponent(x.name)}#project-requirements`}
            >
              Start this project ↗
            </Link>
          </article>
        ))}
      </section>
    </SectionLayout>
  );
}
