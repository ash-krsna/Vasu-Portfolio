import { useEffect, useMemo, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Highlights from "./components/Highlights.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import AssistantPopup from "./components/AssistantPopup.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const sections = useMemo(
    () => ["home", "about", "highlights", "skills", "projects", "certifications", "testimonials", "contact"],
    []
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.utils.toArray(".reveal-up").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%" },
        }
      );
    });

    return () => {
      timer && clearTimeout(timer);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader-screen"
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
          >
            <motion.div
              className="loader-mark"
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="bi bi-bar-chart-line"></i>
            </motion.div>
            <span>Preparing insights</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar
        sections={sections}
        theme={theme}
        onThemeToggle={() => setTheme((value) => (value === "light" ? "dark" : "light"))}
      />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Skills />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AssistantPopup />
      <button
        className="back-to-top"
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
}
