"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 16;

    const chars =
      "AI01LLMRAGCVNLPAGENTPYTHONNEXTFASTAPI{}[]<>/\\#$0123456789ABCDEF".split(
        ""
      );

    let drops: number[] = [];
    let raf = 0;
    let last = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const cols = Math.ceil(canvas.width / fontSize);
      drops = Array.from({ length: cols }, () =>
        Math.floor((Math.random() * canvas.height) / fontSize)
      );
    };

    const paint = () => {
      ctx.fillStyle = "rgba(3, 10, 6, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[(Math.random() * chars.length) | 0];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.94 ? "#d7ffe9" : "#00ff66";
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);

      if (time - last < 50) return;

      last = time;
      paint();
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
    />
  );
}