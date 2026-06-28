import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} · ${site.role}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(225,29,52,0.35), transparent 60%), #0a0708",
          color: "#f3eff0",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "#e11d34",
              boxShadow: "0 0 24px #e11d34",
            }}
          />

          <div
            style={{
              fontSize: 30,
              color: "#a7a0a3",
            }}
          >
            {site.role}
          </div>
        </div>

        {/* Center */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>

          <div
            style={{
              fontSize: 36,
              color: "#a7a0a3",
              marginTop: 16,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Building intelligent systems that solve real-world problems using
            Artificial Intelligence, Agentic AI, Large Language Models,
            Computer Vision, Retrieval-Augmented Generation, and Full-Stack
            Engineering.
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#e11d34",
              fontWeight: 700,
            }}
          >
            {site.url.replace("https://", "")}
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#8f8b8d",
            }}
          >
            AI Engineer • Researcher • Problem Solver
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}