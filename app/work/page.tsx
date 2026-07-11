import SectionLayout from "../section-layout";
import Link from "next/link";
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
