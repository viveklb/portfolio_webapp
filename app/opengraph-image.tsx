import { ImageResponse } from "next/og";

export const alt =
  "Vivek Softwares — Vivek Bharamshetti, Vaishnavi Yelapure and Aditya Rachatte";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "76px",
        background: "#ffffff",
        color: "#0b1220",
        fontFamily: "Arial",
        border: "18px solid #e8f0ff",
      }}
    >
      <div style={{ color: "#1557ff", fontSize: 24, fontWeight: 700 }}>
        VIVEK SOFTWARES · VIVEKSOFTWARES.ONLINE
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 70,
          lineHeight: 1.05,
          fontWeight: 800,
          marginTop: 30,
        }}
      >
        Digital products that work.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: "#4b5a70",
          marginTop: 30,
        }}
      >
        Full-stack web development · M.Tech projects · B.E. projects
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 21,
          color: "#1557ff",
          marginTop: 48,
        }}
      >
        Vivek Bharamshetti · Vaishnavi Yelapure · Aditya Rachatte
      </div>
    </div>,
    size,
  );
}
