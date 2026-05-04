import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { skills } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeader eyebrow="Skills" title="Tools for clear, confident decisions" />
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-md-6 col-xl-4" key={skill.name}>
              <motion.div
                className="skill-card reveal-up"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{ "--skill-color": skill.color }}
              >
                <div className="skill-top">
                  <i className={`bi ${skill.icon}`}></i>
                  <div>
                    <h3>{skill.name}</h3>
                    <span>{skill.level}% practical confidence</span>
                  </div>
                </div>
                <div className="progress soft-progress" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
