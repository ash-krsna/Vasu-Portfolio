import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { highlights } from "../data/portfolioData.js";

export default function Highlights() {
  return (
    <section id="highlights" className="section highlights-section">
      <div className="container">
        <SectionHeader eyebrow="Updated Profile" title="Ready for data roles in 2026" />
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <motion.article
              className="highlight-card reveal-up"
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -8 }}
            >
              <i className={`bi ${item.icon}`}></i>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
