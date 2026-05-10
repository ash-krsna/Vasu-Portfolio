import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader.jsx";
import { personal } from "../data/portfolioData.js";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("Sending...");
    try {
      await emailjs.sendForm("service_id", "template_id", form, "public_key");
      setStatus("Message sent successfully.");
      form.reset();
    } catch {
      setStatus("EmailJS is ready for your service keys.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Let us talk about the next dashboard" />
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="contact-panel reveal-up">
              <h3>Hire-ready data analyst</h3>
              <p>{personal.role}</p>
              <a href={personal.linkedIn} target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i>LinkedIn</a>
              <a href={`mailto:${personal.email}`}><i className="bi bi-envelope-fill"></i>{personal.email}</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><i className="bi bi-github"></i>GitHub</a>
            </div>
          </div>
          <div className="col-lg-7">
            <motion.form className="contact-form reveal-up" onSubmit={handleSubmit} whileHover={{ y: -3 }}>
              <label>
                <span><i className="bi bi-person"></i>Name</span>
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                <span><i className="bi bi-envelope"></i>Email</span>
                <input type="email" name="email" required placeholder="your@email.com" />
              </label>
              <label>
                <span><i className="bi bi-chat-left-text"></i>Message</span>
                <textarea name="message" rows="5" required placeholder="Tell me about the opportunity"></textarea>
              </label>
              <div className="form-actions">
                <button className="btn btn-primary-soft" type="submit"><i className="bi bi-send"></i>Send Message</button>
                <a className="btn btn-outline-soft" href={personal.resume} download><i className="bi bi-download"></i>Download Resume</a>
                <a className="btn btn-gold" href={`mailto:${personal.email}`}><i className="bi bi-briefcase"></i>Hire Me</a>
              </div>
              {status && <p className="form-status">{status}</p>}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
