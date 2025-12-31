import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    const particles: Particle[] = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    let t = 0;

    const drawWaves = () => {
      ctx.strokeStyle = "rgba(162,28,175,0.25)";
      ctx.lineWidth = 1.2;

      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.008 + t * 1.2 + i) * 80;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }

        ctx.fillStyle = "#a21caf";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // линии
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);

          if (d < 120) {
            ctx.strokeStyle = `rgba(162,28,175,${1 - d / 120})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWaves();
      drawParticles();
      t += 0.015;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
