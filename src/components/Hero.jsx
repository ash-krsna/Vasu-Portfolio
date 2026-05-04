import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { typingRoles, personal } from "../data/portfolioData.js";

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [letters, setLetters] = useState("");

  useEffect(() => {
    const word = typingRoles[roleIndex];
    let frame = 0;
    const interval = window.setInterval(() => {
      frame += 1;
      setLetters(word.slice(0, frame));
      if (frame > word.length + 9) {
        clearInterval(interval);
        setRoleIndex((index) => (index + 1) % typingRoles.length);
      }
    }, 95);
    return () => clearInterval(interval);
  }, [roleIndex]);

  return <span className="typing-text">{letters}<span className="typing-caret">|</span></span>;
}

function DashboardVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 18 });
  const rotateX = useTransform(smoothY, [-120, 120], [8, -8]);
  const rotateY = useTransform(smoothX, [-120, 120], [-8, 8]);

  return (
    <motion.div
      className="dashboard-orbit"
      style={{ rotateX, rotateY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div className="glass-panel main-dashboard" animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="dash-head">
          <span>Analytics Pulse</span>
          <i className="bi bi-stars"></i>
        </div>
        <div className="kpi-row">
          <div><strong>92%</strong><span>Accuracy</span></div>
          <div><strong>4.8k</strong><span>Records</span></div>
          <div><strong>18</strong><span>Insights</span></div>
        </div>
        <div className="chart-row">
          {[72, 44, 88, 60, 96, 68].map((height, index) => (
            <motion.span
              key={height}
              style={{ height: `${height}%` }}
              animate={{ scaleY: [0.72, 1, 0.82] }}
              transition={{ duration: 2.2, delay: index * 0.12, repeat: Infinity }}
            />
          ))}
        </div>
        <div className="line-chart">
          <span></span><span></span><span></span><span></span>
        </div>
      </motion.div>
      <motion.div className="floating-card pie-card" animate={{ y: [0, 18, 0], x: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <div className="pie"></div>
        <span>Tool Mix</span>
      </motion.div>
      <motion.div className="floating-card mini-kpi" animate={{ y: [0, -18, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <i className="bi bi-graph-up-arrow"></i>
        <strong>+36%</strong>
        <span>Trend Lift</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="animated-gradient"></div>
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
        >
          <span className="eyebrow">BCA Final Year • Ahmednagar</span>
          <h1>Hello, I&apos;m Payal Dhage</h1>
          <h2>Transforming Data into Smart Decisions</h2>
          <TypingText />
          <p>{personal.role}</p>
          <div className="hero-actions">
            <a className="btn btn-primary-soft" href="#projects"><i className="bi bi-grid"></i>View Projects</a>
            <a className="btn btn-outline-soft" href="/Payal-Dhage-Resume.pdf" download><i className="bi bi-download"></i>Download Resume</a>
            <a className="btn btn-outline-soft" href="#contact"><i className="bi bi-envelope"></i>Contact Me</a>
            <a className="btn btn-gold" href={`mailto:${personal.email}`}><i className="bi bi-briefcase"></i>Hire Me</a>
          </div>
        </motion.div>
        <DashboardVisual />
      </div>
    </section>
  );
}
