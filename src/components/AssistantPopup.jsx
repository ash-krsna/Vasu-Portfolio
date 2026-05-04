import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AssistantPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="assistant-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            className="assistant-panel"
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
          >
            <strong><i className="bi bi-stars"></i>Portfolio Assistant</strong>
            <p>Ask about Payal&apos;s tools, projects, certifications, or availability for analyst roles.</p>
            <a href="#contact">Start conversation</a>
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" className="assistant-button" aria-label="Open assistant" onClick={() => setOpen((value) => !value)}>
        <i className="bi bi-stars"></i>
      </button>
    </div>
  );
}
