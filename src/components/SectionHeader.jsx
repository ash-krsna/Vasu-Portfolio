import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, align = "start" }) {
  return (
    <motion.div
      className={`section-header text-${align} reveal-up`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </motion.div>
  );
}
