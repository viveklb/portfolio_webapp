export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "Vivek.dev";
export const ownerName = "Vivek Laxman Bharamshetti";

export const defaultDescription =
  "Full-stack web developer in Solapur building MERN applications, business websites, M.Tech projects and B.E. final-year projects with source code and deployment support.";
