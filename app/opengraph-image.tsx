import { ImageResponse } from "next/og";

export const alt = "Vivek Bharamshetti - Full-Stack Web Developer and Academic Project Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "76px", background: "#050b18", color: "#f5f7ff", fontFamily: "Arial" }}>
      <div style={{ color: "#8c72ff", fontSize: 24, fontWeight: 700 }}>VIVEK.DEV</div>
      <div style={{ display: "flex", fontSize: 70, lineHeight: 1.05, fontWeight: 800, marginTop: 30 }}>Digital products that work.</div>
      <div style={{ display: "flex", fontSize: 28, color: "#a1abc0", marginTop: 30 }}>Full-stack web development · M.Tech projects · B.E. projects</div>
      <div style={{ display: "flex", fontSize: 21, color: "#8c72ff", marginTop: 48 }}>Solapur, Maharashtra · 150+ projects delivered</div>
    </div>, size,
  );
}
