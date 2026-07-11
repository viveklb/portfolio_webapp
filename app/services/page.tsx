import SectionLayout from "../section-layout";
import Link from "next/link";
const plans = [
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
    price: "Custom quote",
    text: "Responsive websites and full-stack applications shaped around your goals and audience.",
  },
];
export default function Services() {
  return (
    <SectionLayout>
      <header className="pageHero darkHero">
        <div className="wrap">
          <small>03 / SERVICES & PRICING</small>
          <h1>
            Start your project
            <br />
            <em>with confidence.</em>
          </h1>
          <p>Transparent starting prices with scope-based final quotations.</p>
        </div>
      </header>
      <section className="servicePage" id="pricing">
        <div className="prices wrap">
          {plans.map((x, i) => (
            <article className={i === 1 ? "featured" : ""} key={x.name}>
              <small>{x.tag}</small>
              <h3>{x.name}</h3>
              <p>{x.text}</p>
              <div>
                <span>Starting at</span>
                <b>{x.price}</b>
              </div>
              <Link href={`/contact?type=${encodeURIComponent(x.name)}#project-requirements`}>Choose this service ↗</Link>
            </article>
          ))}
        </div>
      </section>
    </SectionLayout>
  );
}
