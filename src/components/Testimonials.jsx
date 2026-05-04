import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { testimonials } from "../data/portfolioData.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <SectionHeader eyebrow="Testimonials" title="Professional promise, clearly noticed" />
        <div className="row g-4 justify-content-center">
          {testimonials.map((quote, index) => (
            <div className="col-md-4" key={quote}>
              <motion.div
                className="testimonial-card reveal-up"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <i className="bi bi-chat-quote"></i>
                <p>{quote}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
