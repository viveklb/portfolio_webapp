export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "Vivek.dev";
export const ownerName = "Vivek Laxman Bharamshetti";

export const teamMembers = [
  {
    name: "Vivek Laxman Bharamshetti",
    role: "Owner · DevOps & Full-Stack Developer",
  },
  {
    name: "Vaishnavi Yelapure",
    role: "Frontend Developer · UI/UX Specialist",
  },
  {
    name: "Aditya Rachatte",
    role: "Senior Developer · DevOps Engineer",
  },
];

export const defaultDescription =
  "Official website of Vivek Bharamshetti, Vaishnavi Yelapure & Aditya Rachatte. Solapur-based full-stack web development team building MERN applications, Samarth Collection, CrackMNC platform, M.Tech research projects, and IEEE research paper publications.";

export const defaultKeywords = [
  "Vivek",
  "Vivek Bharamshetti",
  "Vivek Laxman Bharamshetti",
  "Vaishnavi Yelapure",
  "Aditya Rachatte",
  "Vivek Softwares",
  "Vivek.dev",
  "Vivek Bharamshetti developer",
  "Vaishnavi Yelapure developer",
  "Aditya Rachatte DevOps",
  "web developer in Solapur",
  "MERN stack developer Solapur",
  "Next.js developer India",
  "M.Tech project developer",
  "B.E. final year projects",
  "Research paper publication IEEE",
  "Samarth Collection web app",
  "CrackMNC career platform",
];
