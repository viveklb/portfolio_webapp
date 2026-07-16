import SectionLayout from "../section-layout";
import Link from "next/link";
import Image from "next/image";
import plantVisionImage from "@/public/projects/plantvision-growth-monitoring.png";
import uavRadarImage from "@/public/projects/uav-radar-sensor-fusion.png";
import crackMncImage from "@/public/projects/crackmnc-career-platform.png";

const currentProjects = [
  {
    name: "PlantVision",
    title: "Advanced Plant Growth Monitoring System",
    tag: "AI VISION · IOT · ESP TELEMETRY",
    text: "A plant-health monitoring workspace that combines image analysis, live ESP telemetry and scan history to track growth, moisture and environmental conditions.",
    image: plantVisionImage,
    alt: "PlantVision advanced plant growth monitoring dashboard with image analysis and health metrics",
  },
  {
    name: "UAV Radar",
    title: "Radar Sensor Fusion & Tracking",
    tag: "OPENCV · YOLO · SENSOR FUSION",
    text: "A real-time radar interface that fuses radar-wave scanning with computer-vision tracking for UAV detection, target locking and trajectory monitoring.",
    image: uavRadarImage,
    alt: "UAV radar sensor fusion dashboard showing live radar scanning and target configuration",
  },
  {
    name: "CrackMNC",
    title: "Career Preparation Workspace",
    tag: "CAREER PLATFORM · DASHBOARD",
    text: "A focused placement platform bringing applications, mock interviews, resumes, question banks, coding practice and study materials into one workspace.",
    image: crackMncImage,
    alt: "CrackMNC career preparation dashboard with interview, resume and application tools",
  },
];

const work = [
  {
    name: "Full-stack Web Apps",
    tag: "NEXT.JS · NODE",
    text: "Fast, responsive websites and applications built for real-world users.",
  },
  {
    name: "M.Tech Projects",
    tag: "RESEARCH · DEVELOPMENT",
    text: "Advanced academic projects with complete source code and implementation guidance.",
  },
  {
    name: "B.E. Projects",
    tag: "WEB · SOFTWARE",
    text: "Practical final-year solutions, built and documented from idea to deployment.",
  },
  {
    name: "Dashboards & Portals",
    tag: "DATA · UI/UX",
    text: "Clear, useful interfaces that turn complex information into confident decisions.",
  },
  {
    name: "API Development",
    tag: "BACKEND · DATABASE",
    text: "Secure and maintainable services that connect applications and data.",
  },
  {
    name: "Deployment Support",
    tag: "CLOUD · DELIVERY",
    text: "Production setup and guidance so your project works beyond the local machine.",
  },
];
export const metadata = {
  title: "Web Development & Academic Project Portfolio",
  description: "Explore full-stack web apps, M.Tech research projects, B.E. final-year software, dashboards, APIs and deployment work by Vivek Bharamshetti.",
  alternates: { canonical: "/work" },
  openGraph: { url: "/work", title: "Web & Academic Project Portfolio", description: "A selection of full-stack applications and engineering projects built for real-world use." },
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
      <section className="currentWork wrap" aria-labelledby="current-projects-title">
        <div className="currentWorkHeading">
          <div>
            <small>RECENTLY BUILT</small>
            <h2 id="current-projects-title">Current <em>projects.</em></h2>
          </div>
          <p>
            Active product work across AI-assisted monitoring, sensor fusion
            and career technology.
          </p>
        </div>
        <div className="currentProjectsGrid">
          {currentProjects.map((project, index) => (
            <article className={index === 0 ? "currentProject featuredProject" : "currentProject"} key={project.name}>
              <div className="projectScreenshot">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  placeholder="blur"
                  sizes={index === 0 ? "(max-width: 800px) 100vw, 1180px" : "(max-width: 800px) 100vw, 580px"}
                />
              </div>
              <div className="projectDetails">
                <span>0{index + 1} / {project.name}</span>
                <small>{project.tag}</small>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <Link href={`/contact?type=${encodeURIComponent(project.title)}#project-requirements`}>
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
            <div className={"visual v" + (i % 3)}>&lt;/&gt;</div>
            <small>{x.tag}</small>
            <h3>{x.name}</h3>
            <p>{x.text}</p>
            <Link className="cardAction" href={`/contact?type=${encodeURIComponent(x.name)}#project-requirements`}>
              Start this project ↗
            </Link>
          </article>
        ))}
      </section>
    </SectionLayout>
  );
}
