import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { personal, stats } from "../data/portfolioData.js";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="Curious mind, business-ready analytics" />
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-5">
            <motion.div
              className="profile-visual reveal-up"
              whileHover={{ rotate: -1.5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="profile-avatar">
                <i className="bi bi-person-workspace"></i>
              </div>
              <div className="profile-badge">
                <i className="bi bi-geo-alt"></i>
                <span>{personal.location}</span>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-7">
            <div className="glass-panel about-copy reveal-up">
              <h3>{personal.name}</h3>
              <p>
                I am a passionate BCA Final Year student focused on Data Analytics. I enjoy
                turning raw data into meaningful insights using Excel, SQL, Python, Power BI,
                and Tableau.
              </p>
              <p className="muted-line">{personal.education}</p>
              <div className="stats-grid">
                {stats.map((item, index) => (
                  <motion.div
                    className="stat-card"
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
