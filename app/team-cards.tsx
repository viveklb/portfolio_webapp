import Link from "next/link";
import { teamMembers } from "@/lib/seo";

export default function TeamCards() {
  return (
    <div className="teamGrid">
      {teamMembers.map((member, index) => (
        <article className="teamMember" key={member.slug}>
          <span className="teamNumber">0{index + 1}</span>
          <h3>
            <Link href={`/team/${member.slug}`}>{member.displayName}</Link>
          </h3>
          <p>{member.role}</p>
          <Link className="cardAction" href={`/team/${member.slug}`}>
            View profile ↗
          </Link>
        </article>
      ))}
    </div>
  );
}
