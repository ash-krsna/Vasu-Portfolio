import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar({ sections, theme, onThemeToggle }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = sections.map((section) => {
      const target = document.getElementById(section);
      if (!target) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(section);
        },
        { threshold: 0.42 }
      );
      observer.observe(target);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, [sections]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top premium-nav">
      <div className="container">
        <Link className="navbar-brand" to="home" smooth duration={500}>
          <span className="brand-mark">
            <img src="/favicon.png" alt="Payal Dhage logo" />
          </span>
          Payal Dhage
        </Link>
        <div className="d-flex align-items-center gap-2 order-lg-2">
          <button className="icon-btn" type="button" aria-label="Toggle theme" onClick={onThemeToggle}>
            <i className={`bi ${theme === "light" ? "bi-moon-stars" : "bi-sun"}`}></i>
          </button>
          <button
            className="navbar-toggler icon-btn"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {sections.map((section) => (
              <li className="nav-item" key={section}>
                <Link
                  className={`nav-link ${active === section ? "active" : ""}`}
                  to={section}
                  smooth
                  duration={550}
                  offset={-72}
                  onClick={() => setOpen(false)}
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
